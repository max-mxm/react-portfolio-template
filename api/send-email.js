/**
 * Vercel Serverless Function pour l'envoi d'emails via Resend
 * Endpoint: /api/send-email
 *
 * Cette fonction sécurisée côté serveur :
 * 1. Valide les données du formulaire
 * 2. Détecte les bots (honeypot, timing, rate limiting)
 * 3. Envoie l'email via Resend
 */

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Configuration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 heure en millisecondes
const MAX_REQUESTS_PER_WINDOW = 3;
const MIN_SUBMISSION_TIME = 3000; // 3 secondes minimum
const MAX_SUBMISSION_TIME = 60 * 60 * 1000; // 1 heure maximum

// Store pour le rate limiting (en mémoire - pour production, utiliser Redis/DB)
const submissionStore = new Map();

/**
 * Nettoie les anciennes entrées du rate limiting
 */
function cleanupOldSubmissions() {
    const now = Date.now();
    for (const [ip, data] of submissionStore.entries()) {
        if (now - data.firstSubmission > RATE_LIMIT_WINDOW) {
            submissionStore.delete(ip);
        }
    }
}

/**
 * Vérifie le rate limiting par IP
 */
function checkRateLimit(ip) {
    cleanupOldSubmissions();

    const now = Date.now();
    const ipData = submissionStore.get(ip);

    if (!ipData) {
        submissionStore.set(ip, {
            count: 1,
            firstSubmission: now
        });
        return true;
    }

    if (now - ipData.firstSubmission > RATE_LIMIT_WINDOW) {
        // Fenêtre expirée, reset
        submissionStore.set(ip, {
            count: 1,
            firstSubmission: now
        });
        return true;
    }

    if (ipData.count >= MAX_REQUESTS_PER_WINDOW) {
        return false;
    }

    ipData.count++;
    return true;
}

/**
 * Valide les données du formulaire
 */
function validateFormData(data) {
    const { name, email, subject, message, honeypot, submissionTime } = data;

    // 1. Vérifier que tous les champs requis sont présents
    if (!name || !email || !subject || !message) {
        return { valid: false, error: 'Tous les champs sont requis' };
    }

    // 2. Vérifier le honeypot (champ caché que seuls les bots remplissent)
    if (honeypot && honeypot.trim() !== '') {
        return { valid: false, error: 'Bot détecté (honeypot)' };
    }

    // 3. Vérifier le timing (trop rapide = bot, trop lent = suspect)
    if (submissionTime) {
        const timeTaken = Date.now() - parseInt(submissionTime);
        if (timeTaken < MIN_SUBMISSION_TIME) {
            return { valid: false, error: 'Soumission trop rapide (bot suspect)' };
        }
        if (timeTaken > MAX_SUBMISSION_TIME) {
            return { valid: false, error: 'Session expirée' };
        }
    }

    // 4. Valider le format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { valid: false, error: 'Format d\'email invalide' };
    }

    // 5. Vérifier la longueur minimale du message
    const wordCount = message.trim().split(/\s+/).length;
    if (wordCount < 3) {
        return { valid: false, error: 'Le message doit contenir au moins 3 mots' };
    }

    // 6. Détection basique de spam (ratio voyelles/consonnes)
    const letters = message.toLowerCase().match(/[a-z]/g) || [];
    const vowels = message.toLowerCase().match(/[aeiouy]/g) || [];
    if (letters.length > 0) {
        const vowelRatio = vowels.length / letters.length;
        if (vowelRatio < 0.15 || vowelRatio > 0.7) {
            return { valid: false, error: 'Message suspect détecté' };
        }
    }

    return { valid: true };
}

/**
 * Fonction principale Vercel Serverless
 */
export default async function handler(req, res) {
    // Autoriser uniquement les requêtes POST
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            error: 'Méthode non autorisée'
        });
    }

    // Headers CORS pour autoriser les requêtes depuis votre domaine
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*'); // En production, spécifiez votre domaine
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    try {
        const { name, email, subject, message, honeypot, submissionTime } = req.body;

        // Obtenir l'IP du client
        const clientIp = req.headers['x-forwarded-for'] ||
                        req.headers['x-real-ip'] ||
                        req.connection.remoteAddress;

        // 1. Vérifier le rate limiting
        if (!checkRateLimit(clientIp)) {
            return res.status(429).json({
                success: false,
                error: 'Trop de tentatives. Veuillez réessayer dans une heure.'
            });
        }

        // 2. Valider les données
        const validation = validateFormData(req.body);
        if (!validation.valid) {
            return res.status(400).json({
                success: false,
                error: validation.error
            });
        }

        // 3. Envoyer l'email via Resend
        const emailResponse = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
            to: process.env.RESEND_TO_EMAIL || 'morellon.maxime@gmail.com',
            subject: `[Portfolio] ${subject}`,
            html: `
                <h2>Nouveau message depuis votre portfolio</h2>
                <p><strong>Nom :</strong> ${name}</p>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Sujet :</strong> ${subject}</p>
                <hr />
                <h3>Message :</h3>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr />
                <p style="color: #666; font-size: 12px;">
                    IP: ${clientIp}<br>
                    Date: ${new Date().toLocaleString('fr-FR')}
                </p>
            `,
            reply_to: email
        });

        if (emailResponse.error) {
            console.error('Erreur Resend:', emailResponse.error);
            return res.status(500).json({
                success: false,
                error: 'Erreur lors de l\'envoi de l\'email'
            });
        }

        // Succès !
        return res.status(200).json({
            success: true,
            message: 'Email envoyé avec succès',
            id: emailResponse.data?.id
        });

    } catch (error) {
        console.error('Erreur serveur:', error);
        return res.status(500).json({
            success: false,
            error: 'Erreur serveur interne'
        });
    }
}
