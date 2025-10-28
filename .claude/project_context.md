# React Portfolio Template - Contexte du Projet

## Vue d'ensemble
Template de portfolio moderne et réactif pour développeurs, construit avec **React**, **Vite** et **Bootstrap 5**.

## Architecture du Projet

### Structure des Dossiers
```
react-portfolio-template/
├── src/
│   ├── components/          # Composants React
│   │   ├── articles/        # Types d'articles (Portfolio, Skills, Timeline, etc.)
│   │   ├── buttons/         # Composants de boutons
│   │   ├── capabilities/    # HOCs (Swipeable, Scrollable, Collapsable, etc.)
│   │   ├── forms/           # Composants de formulaires
│   │   ├── generic/         # Composants réutilisables
│   │   ├── layout/          # Composants de mise en page
│   │   ├── modals/          # Modals (Gallery, YouTube, etc.)
│   │   ├── mouse/           # Effets de souris personnalisés
│   │   ├── nav/             # Navigation (Sidebar, Mobile Header, etc.)
│   │   ├── notifications/   # Système de notifications
│   │   ├── sections/        # Sections du portfolio
│   │   └── widgets/         # Widgets (Logo, DateBadge, PacMan, etc.)
│   ├── hooks/               # Custom hooks et utilitaires
│   └── main.jsx             # Point d'entrée React
├── public/
│   ├── data/                # Configuration JSON
│   │   ├── settings.json    # Paramètres globaux
│   │   ├── profile.json     # Informations du profil
│   │   ├── categories.json  # Catégories de navigation
│   │   ├── sections.json    # Configuration des sections
│   │   ├── strings.json     # Traductions i18n
│   │   └── sections/        # Données par section
│   ├── images/              # Images et assets
│   └── audio/               # Fichiers audio
└── npm/                     # Scripts npm personnalisés

```

## Technologies Principales

### Frontend
- **React 18.3.1** - Framework UI
- **Bootstrap 5.3.3** - Framework CSS
- **React Bootstrap 2.10.4** - Composants Bootstrap pour React
- **Vite 6.3.5** - Build tool et dev server

### Libraries
- **Swiper 11.1.14** - Carrousels et sliders tactiles
- **Smooth Scrollbar 8.8.4** - Scrollbar personnalisée
- **EmailJS 4.4.1** - Envoi d'emails sans backend
- **Font Awesome 6.6.0** - Icônes
- **PrimeIcons 7.0.0** - Icônes supplémentaires

### Dev Tools
- **ESLint** - Linting du code
- **Sass Embedded** - Préprocesseur CSS

## Système de Configuration

### Fichiers JSON Principaux

1. **settings.json** - Configuration globale
   - Mode debug, version
   - Preloader settings
   - Langues supportées (en, es, fr, ko)
   - Thèmes (dark, light)
   - Options de template

2. **profile.json** - Informations personnelles
   - Photo, nom, titre
   - Réseaux sociaux
   - CV téléchargeable

3. **sections.json** - Définition des sections
   - Cover, Experience, Education, Skills, Portfolio, etc.

4. **categories.json** - Catégories de navigation mobile

5. **strings.json** - Système i18n multi-langues

## Types d'Articles Disponibles

### Articles de Contenu
- **ArticleText** - Texte simple avec formatage
- **ArticleInlineList** - Listes inline
- **ArticleInfoList** - Liste d'informations détaillées
- **ArticleFacts** - Faits avec statistiques animées

### Articles de Portfolio
- **ArticlePortfolio** - Grille de projets avec filtres
- **ArticleCards** - Cartes avec images et descriptions
- **ArticleTestimonials** - Témoignages/citations

### Articles de Compétences
- **ArticleSkills** - Compétences avec barres de progression
- **ArticleStack** - Stack technique en grille
- **ArticleTimeline** - Timeline d'événements

### Articles Interactifs
- **ArticleContactForm** - Formulaire de contact (EmailJS)
- **ArticleThread** - Fils de discussion

## Fonctionnalités Clés

### Responsive Design
- Layout adaptatif desktop/mobile
- Sidebar fixe sur desktop
- Navigation à onglets sur mobile
- Support touch et swipe

### Internationalisation
- Support multi-langues (EN, ES, FR, KO)
- Changement de langue dynamique
- Fichiers de traduction JSON

### Thèmes
- Dark mode / Light mode
- Changement dynamique
- Persistance dans localStorage

### Animations
- Curseur animé personnalisé
- Transitions de page fluides
- Animations de chargement
- Smooth scrolling

### Performances
- Code splitting (Vite)
- Lazy loading des composants
- Chunk séparé pour Swiper
- Optimisation des images

## Scripts NPM Disponibles

```json
{
  "dev": "vite",                              # Dev server
  "build": "vite build",                      # Production build
  "preview": "vite preview",                  # Preview du build
  "lint": "eslint .",                         # Linting
  "resume:make:article": "...",               # Créer un nouvel article
  "resume:clear": "..."                       # Nettoyer le projet
}
```

## Configuration Vite

- **Base path**: `/react-portfolio-template/`
- **Code splitting**: Swiper dans un chunk séparé
- **SCSS**: Préprocesseur avec silenceDeprecations

## Points d'Attention

### Développement
1. Toujours tester sur mobile et desktop
2. Vérifier la cohérence des traductions
3. Valider les données JSON avant modifications
4. Respecter la structure des articles existants

### Performance
1. Optimiser les images avant ajout
2. Utiliser le lazy loading pour les composants lourds
3. Minimiser les re-renders inutiles
4. Vérifier la taille du bundle après modifications

### Maintenance
1. Maintenir la cohérence entre composants et données JSON
2. Documenter les nouveaux articles personnalisés
3. Tester l'envoi d'emails (EmailJS) en production
4. Vérifier les liens externes régulièrement

## Commandes Claude Personnalisées

Les commandes suivantes sont disponibles :
- `/analyze-component` - Analyse un composant React
- `/review-article` - Examine un type d'article
- `/update-content` - Aide à modifier le contenu
- `/create-article` - Crée un nouvel article personnalisé
- `/check-i18n` - Vérifie les traductions
- `/optimize-build` - Optimise la configuration de build

## Resources Utiles

- [Documentation GitHub](https://github.com/ryanbalieiro/react-portfolio-template)
- [Tutoriels vidéo](https://www.youtube.com/watch?v=PnV8p1xm7-o)
- [Démo en ligne](https://ryanbalieiro.github.io/react-portfolio-template/)
- Documentation dans `/docs/tutorials/`
