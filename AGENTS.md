# AGENTS.md

This file provides instructions for AI coding agents working on this React Portfolio Template project.

## Project Overview

**Type**: React 18 + Vite Portfolio Template
**Version**: 2.0.3
**Repository**: https://github.com/ryanbalieiro/react-portfolio-template
**Primary Language**: JavaScript (JSX)
**Framework**: React 18.3
**Build Tool**: Vite 6.0
**Styling**: Bootstrap 5 + SCSS
**Package Manager**: npm

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Structure

```
src/
├── components/          # React components organized by type
│   ├── articles/       # Article components (ArticlePortfolio, ArticleSkills, etc.)
│   ├── buttons/        # Button components
│   ├── capabilities/   # HOC wrappers (Swipeable, Scrollable, etc.)
│   ├── forms/          # Form components and fields
│   ├── generic/        # Reusable UI components
│   ├── layout/         # Layout components
│   ├── modals/         # Modal components
│   ├── nav/            # Navigation components
│   ├── sections/       # Section components
│   └── widgets/        # Small UI widgets
├── hooks/              # Custom React hooks and utilities
│   ├── models/         # Data wrapper classes
│   └── utils/          # Utility functions
└── main.jsx            # Application entry point

public/
├── data/               # JSON configuration files
│   ├── settings.json   # Global settings
│   ├── profile.json    # User profile data
│   ├── categories.json # Navigation categories
│   ├── sections.json   # Section definitions
│   ├── strings.json    # i18n translations (en, es, fr, ko)
│   └── sections/       # Individual section data files
├── images/             # Image assets
└── audio/              # Audio files
```

## Architecture & Design Patterns

### Component Architecture
- **Functional Components Only**: No class components
- **Hooks-based**: useState, useEffect, custom hooks
- **Composition Pattern**: HOCs for capabilities (Scrollable, Swipeable)
- **Data-driven**: Content comes from JSON files

### State Management
- Local state with `useState`
- Context API for global state (theme, language)
- No Redux or external state libraries

### Data Loading Pattern
```jsx
import { useData } from '../../hooks/api'

const MyComponent = () => {
    const data = useData('path/to/file.json')
    if (!data) return <Preloader />
    return <div>{/* Use data */}</div>
}
```

## Coding Standards

### File Naming Conventions
- **React Components**: PascalCase (e.g., `ArticlePortfolio.jsx`)
- **Hooks/Utils**: camelCase (e.g., `utils.js`, `api.js`)
- **JSON Data**: lowercase with hyphens (e.g., `settings.json`)
- **Private Utils**: Prefix with underscore (e.g., `_array-utils.js`)

### Component Structure
```jsx
// 1. Imports (libraries first, then local)
import React from 'react'
import { Container } from 'react-bootstrap'

// 2. Component definition
const MyComponent = ({prop1, prop2}) => {
    // 3. Hooks
    const [state, setState] = React.useState(null)

    // 4. Event handlers
    const handleClick = () => {}

    // 5. Render
    return <div>...</div>
}

// 6. PropTypes
MyComponent.propTypes = {...}

// 7. Export
export default MyComponent
```

### Import Organization
```jsx
// 1. React and React libraries
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// 2. Third-party libraries
import Scrollbar from 'smooth-scrollbar'

// 3. Local components (relative imports)
import Article from './base/Article'

// 4. Hooks and utilities
import { useData } from '../../hooks/api'

// 5. Styles (if any)
import './styles.scss'
```

### Styling Guidelines
- **Primary**: Bootstrap 5 utility classes
- **Custom**: SCSS modules in component folders
- **Theming**: CSS variables (defined in Bootstrap)
- **Responsive**: Mobile-first approach

## Testing Requirements

### Before Committing
1. Run `npm run dev` and test all modified features
2. Test both desktop and mobile views
3. Test theme switching (dark/light)
4. Test language switching (en, es, fr, ko)
5. Run `npm run lint` and fix all errors
6. Run `npm run build` to ensure production build works

### Mobile Testing
- Use browser DevTools responsive mode
- Test touch gestures (swipe, tap)
- Verify bottom navigation on mobile

## Internationalization (i18n)

### Translation Rules
1. **ALL user-facing strings** must be in `public/data/strings.json`
2. **NEVER** hardcode display text in components
3. **ALWAYS** provide translations for: `en`, `es`, `fr`, `ko`

### Translation Structure
```json
{
  "key": {
    "en": "English text",
    "es": "Texto en español",
    "fr": "Texte en français",
    "ko": "한국어 텍스트"
  }
}
```

## Data Architecture

### JSON File Rules
1. **ALWAYS validate JSON syntax** before committing
2. **MAINTAIN consistency** between component props and JSON structure
3. **NEVER break** existing data contracts
4. **BACKUP** before major changes

### Creating New Article Types
1. Create component in `src/components/articles/ArticleXxx.jsx`
2. Create data file in `public/data/sections/xxx.json`
3. Register in `sections.json`
4. Follow existing article patterns (extend base Article)

## Git Workflow

### Commit Message Format
```
type(scope): description

Examples:
feat(articles): add new ArticleCustom component
fix(portfolio): resolve image loading issue
chore(deps): update dependencies
docs(readme): update installation steps
style(layout): improve responsive spacing
```

### Branch Strategy
- `main` - production-ready code
- `dev` - development branch
- `feature/*` - new features
- `fix/*` - bug fixes

## Critical Rules (MUST FOLLOW)

### Before Creating Files
**MANDATORY**: Before creating ANY new file:
1. Use Glob or Grep to search if similar files exist
2. Check the existing component structure
3. Follow the established patterns in the codebase

### File Operations
- **ALWAYS prefer editing** existing files over creating new ones
- **NEVER create** markdown files (.md) or READMEs unless explicitly required
- **ALWAYS read** a file before writing to it if it exists

### Code Quality
- **NO class components** - only functional components
- **NO hardcoded strings** - use i18n (strings.json)
- **NO inline styles** - use Bootstrap classes or SCSS
- **NO console.log** in production code
- **NO emojis** unless explicitly requested by user

### Data Integrity
- **ALWAYS validate** JSON before saving
- **NEVER remove** existing data without confirmation
- **ALWAYS backup** data files before major changes

## Performance Guidelines

### Build Optimization
- Keep bundle size minimal
- Use code splitting for large components
- Lazy load heavy dependencies
- Optimize images before adding

### Runtime Performance
- Minimize re-renders (use React.memo when appropriate)
- Debounce expensive operations
- Use `useMemo` and `useCallback` for optimization

## Security Considerations

### Environment Variables
- **NEVER** commit sensitive data (API keys, tokens)
- Use `.env` files (already in `.gitignore`)
- Document required environment variables

### User Input
- Sanitize all user input in forms
- Validate email addresses
- Prevent XSS attacks

## Special Features

### EmailJS Integration
- Service configured in `ArticleContactForm.jsx`
- Use `fakeEmailRequests: true` in settings.json for development
- Configure EmailJS credentials for production

### Article System
- Base `Article` component provides consistent layout
- Each article type extends base with `Article.Body`
- Data-driven rendering from JSON files

### Theme System
- Automatic dark/light theme support via Bootstrap
- Theme preference stored in localStorage
- CSS variables for custom theming

## Deployment

### Production Checklist
1. Update version in `package.json` and `settings.json`
2. Set `debugMode: false` in `settings.json`
3. Set `fakeEmailRequests: false` if using EmailJS
4. Configure `base` path in `vite.config.js` for deployment
5. Run `npm run build`
6. Test with `npm run preview`
7. Deploy `dist/` folder

### GitHub Pages
- Build command: `npm run build`
- Publish directory: `dist`
- Base path configured in `vite.config.js`

## Getting Help

### Documentation
- See `/CLAUDE.md` for comprehensive project guidelines
- Tutorial files in `docs/tutorials/`
- Component PropTypes for usage examples

### External Resources
- [React Documentation](https://react.dev)
- [Bootstrap 5 Documentation](https://getbootstrap.com)
- [Vite Documentation](https://vitejs.dev)

## Notes for AI Agents

1. **Read CLAUDE.md**: This file contains detailed, immutable project rules
2. **Validate changes**: Always test in both desktop and mobile views
3. **Preserve data**: Never delete existing portfolio content without confirmation
4. **Follow patterns**: Study existing components before creating new ones
5. **Ask before major changes**: Structural changes require user approval
6. **Maintain quality**: Code quality and consistency are paramount
7. **No assumptions**: If requirements are unclear, ask the user

---

**Last Updated**: 2025-10-28
**For questions or issues**: Consult CLAUDE.md or project documentation
