/**
 * @author Maxime Morellon
 * @description Utilitaires de détection de bots côté client
 */

const RATE_LIMIT_KEY = 'contact_form_submissions';
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 heure
const MAX_SUBMISSIONS = 3;

/**
 * Vérifie si l'utilisateur a dépassé la limite de soumissions
 * @returns {Object} {allowed: boolean, remaining: number, resetTime: number}
 */
export function checkClientRateLimit() {
    try {
        const stored = localStorage.getItem(RATE_LIMIT_KEY);
        const now = Date.now();

        if (!stored) {
            // Première soumission
            localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({
                submissions: [now],
                count: 1
            }));
            return {
                allowed: true,
                remaining: MAX_SUBMISSIONS - 1,
                resetTime: now + RATE_LIMIT_WINDOW
            };
        }

        const data = JSON.parse(stored);

        // Nettoyer les anciennes soumissions (hors de la fenêtre)
        const recentSubmissions = data.submissions.filter(
            timestamp => now - timestamp < RATE_LIMIT_WINDOW
        );

        if (recentSubmissions.length >= MAX_SUBMISSIONS) {
            const oldestSubmission = Math.min(...recentSubmissions);
            return {
                allowed: false,
                remaining: 0,
                resetTime: oldestSubmission + RATE_LIMIT_WINDOW
            };
        }

        // Ajouter la nouvelle soumission
        recentSubmissions.push(now);
        localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({
            submissions: recentSubmissions,
            count: recentSubmissions.length
        }));

        return {
            allowed: true,
            remaining: MAX_SUBMISSIONS - recentSubmissions.length,
            resetTime: recentSubmissions[0] + RATE_LIMIT_WINDOW
        };
    } catch (error) {
        console.error('Erreur rate limiting:', error);
        // En cas d'erreur, autoriser la soumission
        return { allowed: true, remaining: MAX_SUBMISSIONS, resetTime: Date.now() };
    }
}

/**
 * Réinitialise le compteur de rate limiting (pour les tests)
 */
export function resetClientRateLimit() {
    try {
        localStorage.removeItem(RATE_LIMIT_KEY);
    } catch (error) {
        console.error('Erreur reset rate limiting:', error);
    }
}

/**
 * Formate le temps restant avant reset
 * @param {number} resetTime - Timestamp du reset
 * @returns {string} Temps formaté (ex: "45 minutes")
 */
export function formatTimeUntilReset(resetTime) {
    const now = Date.now();
    const diff = resetTime - now;

    if (diff <= 0) return '0 minute';

    const minutes = Math.ceil(diff / (60 * 1000));
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours > 0) {
        return `${hours} heure${hours > 1 ? 's' : ''} ${remainingMinutes > 0 ? `et ${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}` : ''}`;
    }

    return `${minutes} minute${minutes > 1 ? 's' : ''}`;
}

/**
 * Génère un timestamp de soumission pour la validation côté serveur
 * @returns {string} Timestamp de démarrage du formulaire
 */
export function generateSubmissionTimestamp() {
    return Date.now().toString();
}

/**
 * Valide le temps de soumission côté client
 * @param {string} startTimestamp - Timestamp de démarrage
 * @param {number} minTime - Temps minimum en ms (défaut: 3000)
 * @param {number} maxTime - Temps maximum en ms (défaut: 1h)
 * @returns {Object} {valid: boolean, timeTaken: number, error: string}
 */
export function validateSubmissionTiming(startTimestamp, minTime = 3000, maxTime = 60 * 60 * 1000) {
    try {
        const startTime = parseInt(startTimestamp);
        const now = Date.now();
        const timeTaken = now - startTime;

        if (timeTaken < minTime) {
            return {
                valid: false,
                timeTaken,
                error: 'Veuillez prendre le temps de remplir le formulaire correctement.'
            };
        }

        if (timeTaken > maxTime) {
            return {
                valid: false,
                timeTaken,
                error: 'Votre session a expiré. Veuillez rafraîchir la page.'
            };
        }

        return {
            valid: true,
            timeTaken,
            error: null
        };
    } catch (error) {
        console.error('Erreur validation timing:', error);
        // En cas d'erreur, autoriser la soumission
        return { valid: true, timeTaken: 0, error: null };
    }
}
