# Project Context

## What is this project?

React Portfolio Template is a modern, production-ready portfolio website template designed for developers, designers, and creative professionals. It's a fully responsive, customizable single-page application (SPA) built with modern web technologies.

## Core Purpose

Enable developers to quickly create professional portfolio websites without building from scratch, while maintaining full customization capabilities through a data-driven architecture.

## Key Characteristics

### 1. Data-Driven Architecture
- **All content** is stored in JSON files (no hardcoded content)
- **Easy customization** without touching component code
- **Separation of concerns** between presentation and data

### 2. Internationalization (i18n)
- Built-in support for 4 languages: English, Spanish, French, Korean
- Easy to add more languages
- Runtime language switching without page reload

### 3. Theme System
- Dark and Light modes
- CSS variables for consistent theming
- Persistent theme preference in localStorage

### 4. Modular Component System
- **14 article types** for different content needs
- **Reusable components** with consistent APIs
- **HOC capabilities** (Scrollable, Swipeable, Collapsable, etc.)

## Project History

**Created by**: Ryan Balieiro (https://ryanbalieiro.com)
**Current Version**: 2.0.3
**License**: MIT
**Framework Evolution**: Started with Bootstrap 4, now on Bootstrap 5 and React 18

## Tech Stack Rationale

### Why React?
- Component reusability
- Rich ecosystem
- Declarative UI paradigm
- Virtual DOM for performance

### Why Vite?
- Fast HMR (Hot Module Replacement)
- Modern ESM-based build
- Better DX than Create React App
- Optimal production bundles

### Why Bootstrap 5?
- Battle-tested responsive grid system
- Comprehensive component library
- Utility-first CSS approach
- No jQuery dependency (unlike Bootstrap 4)

### Why JSON for data?
- Non-developers can modify content
- Easy to validate and version control
- Clear separation from code
- Simple to fetch and parse

## Architecture Patterns

### Component Hierarchy
```
App (main.jsx)
└── Portfolio
    ├── Preloader (optional)
    ├── Layout
    │   ├── LayoutNavigation
    │   │   ├── NavSidebar (desktop)
    │   │   │   ├── NavProfileCard
    │   │   │   ├── NavLinkList
    │   │   │   └── NavToolList
    │   │   └── NavHeaderMobile (mobile)
    │   │       └── NavTabController
    │   ├── LayoutSlideshow
    │   │   └── Section[]
    │   │       ├── SectionHeader
    │   │       └── SectionBody
    │   │           └── Article (various types)
    │   └── LayoutBackground (animated or static)
    ├── MouseLayer (custom cursor)
    └── NotificationsLayer
```

### Data Flow Pattern
```
JSON files (public/data/)
    ↓ (fetch on mount)
useData() hook
    ↓ (parse and validate)
Context Providers (Layout, Language, Theme)
    ↓ (props drilling or context)
Components
    ↓ (render)
UI
```

### State Management Strategy
```
Global State (Context API):
- Layout state (mobile vs desktop)
- Language preference
- Theme preference
- Notification queue

Component State (useState):
- Form inputs
- Modal visibility
- Animation states
- Loading states

Persistent State (localStorage):
- Theme preference
- Language preference
- Sidebar collapsed state
```

## How It Runs

### Development Mode
```bash
npm run dev
→ Vite dev server starts on http://localhost:5173
→ Fast HMR for instant feedback
→ Source maps for debugging
→ Hot reload on file changes
```

### Production Build
```bash
npm run build
→ Vite builds optimized bundle to dist/
→ Code splitting (vendor chunks)
→ Minification and tree-shaking
→ Asset optimization
→ Source maps (optional)
```

### Build Output Structure
```
dist/
├── index.html (entry point)
├── assets/
│   ├── index-[hash].js (main bundle)
│   ├── swiper-[hash].js (vendor chunk)
│   ├── index-[hash].css (styles)
│   └── [various-assets]-[hash].[ext]
└── [public-files-copied]
```

## Deployment Strategy

### Current Setup (GitHub Pages)
- Deployed from `dist/` folder
- Base path: `/react-portfolio-template/`
- Automatic builds via GitHub Actions
- Static hosting (no server required)

### Alternative Deployments
- **Vercel/Netlify**: Zero-config deployment
- **AWS S3 + CloudFront**: Scalable static hosting
- **Custom VPS**: Nginx serving `dist/` folder

## Key Dependencies

### Production Dependencies
```
react + react-dom (18.3.1)
├── Core framework
└── Used in: All components

bootstrap (5.3.3)
├── CSS framework
└── Used in: Layout, grid, utilities

react-bootstrap (2.10.4)
├── React components for Bootstrap
└── Used in: Modals, containers, rows/cols

swiper (11.1.14)
├── Touch slider library
└── Used in: Mobile carousel, testimonials

smooth-scrollbar (8.8.4)
├── Custom scrollbar
└── Used in: Desktop content area

@emailjs/browser (4.4.1)
├── Email service integration
└── Used in: Contact form

@fortawesome/fontawesome-free (6.6.0)
├── Icon library
└── Used in: Throughout UI

primeicons (7.0.0)
├── Additional icons
└── Used in: Specific UI elements
```

### Development Dependencies
```
vite (6.3.5)
├── Build tool and dev server

@vitejs/plugin-react (4.3.1)
├── React support for Vite

eslint + plugins
├── Code linting

sass-embedded (1.78.0)
├── SCSS preprocessing
```

## Performance Characteristics

### Bundle Size (approximate)
- Main bundle: ~150 KB (gzipped)
- Swiper chunk: ~50 KB (gzipped)
- CSS: ~30 KB (gzipped)
- **Total**: ~230 KB (gzipped)

### Load Time (3G connection)
- First Contentful Paint: ~2s
- Time to Interactive: ~3.5s
- Fully Loaded: ~4s

### Optimization Techniques
1. Code splitting (Swiper separate chunk)
2. Lazy loading (React.lazy for heavy components)
3. Tree shaking (Vite automatically removes unused code)
4. Asset optimization (images, fonts)
5. Preloader while loading assets

## Common Use Cases

### 1. Portfolio Showcase
Display work samples with:
- ArticlePortfolio (grid with filters)
- ArticleCards (detailed project cards)
- Category filtering
- Modal galleries

### 2. Professional Profile
Present yourself with:
- Profile section (photo, bio, social links)
- ArticleTimeline (career history)
- ArticleSkills (technical skills)
- ArticleTestimonials (recommendations)

### 3. Contact & Networking
Enable communication via:
- ArticleContactForm (EmailJS integration)
- Social media links
- Resume download
- Professional information

### 4. Content Publishing
Share updates with:
- ArticleThread (blog-style posts)
- ArticleText (formatted content)
- Category organization
- Responsive layouts

## Extensibility Points

### Easy to Extend
- Add new JSON data sections
- Modify existing article data
- Change colors and themes (CSS variables)
- Add new languages to strings.json

### Moderate Effort
- Create new article types (following patterns)
- Add new navigation tools
- Customize animations
- Integrate new APIs

### Advanced Customization
- Modify core layout structure
- Add new capability HOCs
- Change routing system
- Implement new state management

## Known Limitations

### Technical Constraints
1. **No SSR**: Pure client-side rendering (SEO considerations)
2. **No routing**: Single-page app (no separate URLs per section)
3. **No CMS**: Content managed via JSON files (no admin panel)
4. **No backend**: Static site only (EmailJS for contact form)

### Design Constraints
1. **Fixed layout pattern**: Sidebar + content area (customization limited)
2. **Mobile navigation**: Bottom tabs only (no alternative patterns)
3. **Theme options**: Dark/Light only (no custom themes without SCSS changes)

## Development Workflow

### Typical Customization Flow
1. **Content changes**: Edit JSON files in `public/data/`
2. **Visual tweaks**: Modify SCSS variables and utility classes
3. **New sections**: Create JSON file + use existing article types
4. **New features**: Create custom article component
5. **Test**: Check responsiveness, themes, languages
6. **Build**: Generate production bundle
7. **Deploy**: Upload to hosting

### Debugging Workflow
1. Check browser console for errors
2. Use React DevTools for component inspection
3. Enable `debugMode: true` in settings.json for verbose logging
4. Test with `fakeEmailRequests: true` to avoid API calls
5. Use `stayOnThePreloaderScreen: true` to debug loading issues

## Integration Points

### EmailJS Integration
- Contact form sends emails without backend
- Requires EmailJS account and configuration
- Service ID, Template ID configured in component
- Can be disabled with `fakeEmailRequests: true`

### Font Awesome & PrimeIcons
- Loaded globally via CDN or npm packages
- Used throughout components
- Icons referenced by class names
- Both icon sets available

### Smooth Scrollbar
- Custom scrollbar for desktop
- Replaces native scrollbar
- Configured per scrollable container
- Disabled on mobile

### Swiper
- Touch-enabled carousels
- Used in mobile navigation
- Used in testimonials
- Configured per instance

## Future Considerations

### Potential Improvements
- Add TypeScript for type safety
- Implement SSR/SSG for better SEO
- Add CMS integration (Contentful, Strapi)
- Create admin panel for content management
- Add analytics integration
- Implement blog with routing
- Add more article types
- Create theme builder UI

### Migration Paths
- From React 18 → React 19 (when stable)
- From Vite 6 → Vite 7 (when released)
- From Bootstrap 5 → Bootstrap 6 (future)
- Add TypeScript incrementally

---

This context helps Claude Code agents understand not just *what* the code does, but *why* it was built this way and *how* to work with it effectively.
