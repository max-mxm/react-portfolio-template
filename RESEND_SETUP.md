# Configuration Resend pour le Formulaire de Contact

Ce guide vous explique comment configurer Resend pour que votre formulaire de contact envoie des emails.

## 📋 Prérequis

1. Un compte Resend (gratuit) : https://resend.com
2. Un domaine vérifié ou utilisez `onboarding@resend.dev` pour les tests
3. Votre site déployé sur Vercel

## 🔧 Étape 1 : Créer un compte Resend

1. Allez sur https://resend.com
2. Créez un compte gratuit
3. Vérifiez votre email

## 🔑 Étape 2 : Obtenir votre clé API

1. Dans le dashboard Resend, allez dans **API Keys**
2. Cliquez sur **Create API Key**
3. Donnez-lui un nom (ex: "Portfolio Contact Form")
4. Sélectionnez les permissions : **Sending access**
5. Copiez la clé (elle commence par `re_`)

⚠️ **IMPORTANT** : Sauvegardez cette clé immédiatement, vous ne pourrez plus la voir !

## 📧 Étape 3 : Configurer votre domaine (Optionnel mais recommandé)

### Option A : Utiliser votre propre domaine

1. Dans Resend, allez dans **Domains**
2. Cliquez sur **Add Domain**
3. Entrez votre domaine (ex: `maxime-morellon.dev`)
4. Ajoutez les enregistrements DNS suivants dans votre hébergeur de domaine :
   - **SPF** : `TXT` record
   - **DKIM** : `TXT` record
   - **DMARC** : `TXT` record
5. Attendez la vérification (peut prendre jusqu'à 48h)

### Option B : Utiliser le domaine de test (pour commencer)

Utilisez `onboarding@resend.dev` - aucune configuration nécessaire, mais l'email ira uniquement à votre adresse email vérifiée.

## 🚀 Étape 4 : Configurer les variables d'environnement sur Vercel

1. Allez sur votre projet Vercel
2. Allez dans **Settings** > **Environment Variables**
3. Ajoutez les 3 variables suivantes :

### Variables à ajouter :

| Nom | Valeur | Exemple |
|-----|--------|---------|
| `RESEND_API_KEY` | Votre clé API Resend | `re_abc123...` |
| `RESEND_FROM_EMAIL` | Email d'envoi | `contact@maxime-morellon.dev` ou `onboarding@resend.dev` |
| `RESEND_TO_EMAIL` | Votre email personnel | `morellon.maxime@gmail.com` |

4. Cliquez sur **Save** pour chaque variable
5. **Redéployez** votre site pour que les variables prennent effet

## 💻 Étape 5 : Configuration locale (.env)

Pour tester en local :

1. Éditez le fichier `.env` à la racine du projet :

```env
RESEND_API_KEY=re_votre_cle_api_ici
RESEND_FROM_EMAIL=contact@maxime-morellon.dev
RESEND_TO_EMAIL=morellon.maxime@gmail.com
```

2. Installez Vercel CLI :
```bash
npm install -g vercel
```

3. Lancez le projet en local :
```bash
vercel dev
```

⚠️ N'utilisez PAS `npm run dev` pour tester le formulaire, car les Vercel Functions ne fonctionnent qu'avec `vercel dev` !

## ✅ Étape 6 : Tester

### Test en local (avec `vercel dev`) :

1. Lancez `vercel dev`
2. Ouvrez http://localhost:3000
3. Allez dans la section **Contact**
4. Remplissez le formulaire et envoyez
5. Vérifiez votre boîte email (RESEND_TO_EMAIL)

### Test en production (après déploiement) :

1. Ouvrez votre site en production
2. Allez dans la section **Contact**
3. Remplissez le formulaire et envoyez
4. Vérifiez votre boîte email

## 🛡️ Protections anti-bot incluses

Votre formulaire inclut **3 couches de protection** :

### 1. **Honeypot Field** (champ piège)
- Champ invisible que seuls les bots remplissent
- Si rempli → soumission bloquée

### 2. **Rate Limiting** (limitation de débit)
- Maximum 3 soumissions par heure
- Côté client (localStorage) ET côté serveur
- Empêche le spam

### 3. **Timing Check** (vérification du timing)
- Minimum 3 secondes pour remplir le formulaire
- Maximum 1 heure de session
- Détecte les bots trop rapides ou les sessions expirées

### 4. **Validation côté serveur**
- Format d'email validé
- Minimum 3 mots dans le message
- Détection de spam par ratio voyelles/consonnes
- Tous les champs requis

## 📊 Monitoring

### Tableau de bord Resend

1. Allez sur https://resend.com/emails
2. Vous verrez tous les emails envoyés
3. Statut : delivered, bounced, etc.

### Logs Vercel

1. Allez sur votre projet Vercel
2. Onglet **Functions** > **send-email**
3. Consultez les logs en temps réel

## 🐛 Dépannage

### Problème : "Email non reçu"

✅ **Solutions** :
1. Vérifiez les logs Vercel Functions
2. Vérifiez le spam de votre boîte email
3. Vérifiez que `RESEND_TO_EMAIL` est correct
4. Vérifiez que votre domaine est vérifié dans Resend

### Problème : "Error 500 lors de l'envoi"

✅ **Solutions** :
1. Vérifiez que les variables d'environnement sont bien définies sur Vercel
2. Vérifiez que `RESEND_API_KEY` est valide
3. Redéployez le site après avoir ajouté les variables

### Problème : "Les Vercel Functions ne fonctionnent pas en local"

✅ **Solutions** :
1. Utilisez `vercel dev` au lieu de `npm run dev`
2. Assurez-vous que le fichier `.env` existe et contient les bonnes valeurs

### Problème : "Trop de tentatives"

C'est normal ! Le rate limiting fonctionne. Attendez 1 heure ou :
```javascript
// Dans la console du navigateur :
localStorage.removeItem('contact_form_submissions')
```

## 📝 Template d'email

L'email envoyé contient :
- **Sujet** : `[Portfolio] {sujet du formulaire}`
- **Contenu** :
  - Nom de l'expéditeur
  - Email de l'expéditeur
  - Sujet
  - Message
  - IP de l'expéditeur
  - Date/heure

## 🔒 Sécurité

✅ **Ce qui est sécurisé** :
- Clé API Resend côté serveur uniquement (jamais exposée au client)
- Rate limiting côté client ET serveur
- Validation côté serveur
- Honeypot pour détecter les bots
- Timing check pour détecter les soumissions automatisées

❌ **Ce qui n'est PAS inclus** :
- reCAPTCHA (peut être ajouté si nécessaire)
- Vérification de domaine d'email (peut être ajoutée)

## 💰 Limites du plan gratuit Resend

- **100 emails/jour**
- **500 emails/mois**
- Largement suffisant pour un portfolio personnel

## 📚 Ressources

- [Documentation Resend](https://resend.com/docs)
- [API Resend](https://resend.com/docs/api-reference/introduction)
- [Vercel Functions](https://vercel.com/docs/functions)

---

**Besoin d'aide ?** Consultez les logs ou contactez le support Resend.
