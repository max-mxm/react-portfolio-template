# Claude Code Project Configuration

## Project Overview
React Portfolio Template - A modern, responsive portfolio template built with React 18, Vite, and Bootstrap 5.

**Version**: 2.0.3
**Repository**: https://github.com/ryanbalieiro/react-portfolio-template

## Development Commands

### Essential Commands
```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Create new custom article
npm run resume:make:article

# Clear project (reset to defaults)
npm run resume:clear
```

## Project Structure Rules

### MANDATORY: Always Search Before Creating
**CRITICAL**: Before creating ANY new file, you MUST:
1. Use Glob or Grep to search if similar files exist
2. Check the existing component structure
3. Follow the established patterns in the codebase

### Directory Layout

```
src/
├── components/
│   ├── articles/              # Article components (ArticlePortfolio, ArticleSkills, etc.)
│   │   ├── base/              # Base Article component
│   │   └── partials/          # Shared article sub-components
│   ├── buttons/               # Button components
│   ├── capabilities/          # HOC wrappers (Swipeable, Scrollable, etc.)
│   ├── forms/                 # Form components and fields
│   ├── generic/               # Reusable UI components
│   ├── layout/                # Layout components (Layout, Navigation, etc.)
│   ├── modals/                # Modal components
│   ├── mouse/                 # Custom mouse effects
│   ├── nav/                   # Navigation components
│   ├── notifications/         # Notification system
│   ├── sections/              # Section components
│   └── widgets/               # Small UI widgets
├── hooks/                     # Custom React hooks and utilities
│   ├── models/                # Data wrapper classes
│   └── utils/                 # Utility functions
└── main.jsx                   # Application entry point

public/
├── data/                      # JSON configuration files
│   ├── settings.json          # Global settings
│   ├── profile.json           # User profile data
│   ├── categories.json        # Navigation categories
│   ├── sections.json          # Section definitions
│   ├── strings.json           # i18n translations
│   └── sections/              # Individual section data files
├── images/                    # Image assets
└── audio/                     # Audio files
```

### File Naming Conventions
- **React Components**: PascalCase (e.g., `ArticlePortfolio.jsx`)
- **Hooks/Utils**: camelCase (e.g., `utils.js`, `api.js`)
- **JSON Data**: lowercase with hyphens (e.g., `settings.json`)
- **Private Utils**: Prefix with underscore (e.g., `_array-utils.js`)

## Coding Standards

### React Component Standards

#### Component Structure
```jsx
// 1. Imports (libraries first, then local)
import React from 'react'
import { Container } from 'react-bootstrap'
import Scrollable from '../capabilities/Scrollable'

// 2. Component definition with PropTypes
const MyComponent = ({prop1, prop2}) => {
    // 3. Hooks (useState, useEffect, custom hooks)
    const [state, setState] = React.useState(null)

    // 4. Event handlers
    const handleClick = () => {}

    // 5. Render logic
    return (
        <div>...</div>
    )
}

// 6. PropTypes and default props
MyComponent.propTypes = {...}

// 7. Export
export default MyComponent
```

#### Component Best Practices
- **ALWAYS** use functional components with hooks
- **NEVER** use class components
- Use destructuring for props
- Keep components small and focused (Single Responsibility)
- Extract reusable logic into custom hooks
- Use PropTypes for type checking (not TypeScript in this project)

### Import Organization
```jsx
// 1. React and React libraries
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// 2. Third-party libraries
import Scrollbar from 'smooth-scrollbar'

// 3. Local components (relative imports)
import Article from './base/Article'
import CategoryFilter from '../generic/CategoryFilter'

// 4. Hooks and utilities
import { useData } from '../../hooks/api'

// 5. Styles (if any)
import './styles.scss'
```

### State Management
- Use `useState` for component-local state
- Use Context API for global state (theme, language, settings)
- Store user preferences in localStorage via utility functions
- **NO** Redux or external state management libraries

### Styling Standards
- **Primary**: Bootstrap 5 utility classes
- **Custom styles**: SCSS modules in component folders
- Use CSS variables for theming (defined in Bootstrap)
- Follow mobile-first responsive design
- Test on both desktop and mobile viewports

## Data Architecture

### JSON Data Files

#### Critical Rules for JSON Files
1. **ALWAYS validate JSON syntax** before committing
2. **MAINTAIN consistency** between component props and JSON structure
3. **NEVER break** existing data contracts
4. **BACKUP** before major changes

#### Data Flow
```
JSON files (public/data/)
  → Loaded via useData() hook
  → Passed as props to components
  → Rendered in UI
```

### Article System

#### Creating New Articles
1. Create component in `src/components/articles/ArticleXxx.jsx`
2. Create data file in `public/data/sections/xxx.json`
3. Register in sections.json
4. Follow existing article patterns (extend base Article)

#### Article Component Pattern
```jsx
const ArticleCustom = ({content}) => {
    return (
        <Article>
            <Article.Body>
                {/* Your content here */}
            </Article.Body>
        </Article>
    )
}
```

## Internationalization (i18n)

### Translation Rules
1. **ALL user-facing strings** must be in `public/data/strings.json`
2. **NEVER** hardcode display text in components
3. **ALWAYS** provide translations for all supported languages: `en`, `es`, `fr`, `ko`
4. Use the translation hook pattern from existing components

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

## Performance Requirements

### Build Optimization
- Keep bundle size under control (check with `npm run build`)
- Use code splitting for large components
- Lazy load heavy dependencies (already configured for Swiper)
- Optimize images before adding to `public/images/`

### Runtime Performance
- Minimize re-renders (use React.memo when appropriate)
- Debounce expensive operations
- Use `useMemo` and `useCallback` for optimization
- Test smooth scrolling performance

## Testing Workflow

### Before Committing
1. Run `npm run dev` and test all modified features
2. Check both desktop and mobile views
3. Test theme switching (dark/light)
4. Test language switching (all 4 languages)
5. Run `npm run lint` and fix all errors
6. Run `npm run build` to ensure production build works

### Mobile Testing
- Use browser DevTools responsive mode
- Test touch gestures (swipe, tap)
- Verify bottom navigation on mobile
- Check that all content is accessible

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

## EmailJS Integration

### Configuration
- Service configured in `ArticleContactForm.jsx`
- **MUST** configure EmailJS credentials in production
- Use `fakeEmailRequests: true` in `settings.json` for development
- Test email sending before deployment

## Deployment

### Production Checklist
1. Update version in `package.json` and `settings.json`
2. Set `debugMode: false` in `settings.json`
3. Set `fakeEmailRequests: false` if using EmailJS
4. Configure `base` path in `vite.config.js` for deployment
5. Run `npm run build`
6. Test the preview with `npm run preview`
7. Deploy `dist/` folder to hosting

### GitHub Pages Deployment
- Build command: `npm run build`
- Publish directory: `dist`
- Base path already configured in `vite.config.js`

## Common Patterns

### Loading Data Pattern
```jsx
import { useData } from '../../hooks/api'

const MyComponent = () => {
    const data = useData('path/to/file.json')
    if (!data) return <Preloader />
    return <div>{/* Use data */}</div>
}
```

### Responsive Components Pattern
```jsx
import { useLayoutProvider } from '../../hooks/layout'

const MyComponent = () => {
    const {isMobileLayout} = useLayoutProvider()
    return isMobileLayout ? <MobileView /> : <DesktopView />
}
```

### Theme-Aware Pattern
```jsx
// Use Bootstrap classes that automatically adapt to theme
<div className="bg-primary text-white">
    Theme-aware content
</div>
```

## Error Handling

### Data Validation
- Always check if data exists before rendering
- Provide fallback UI for missing data
- Log errors to console in development mode
- Never let the app crash due to missing data

### User Feedback
- Use notification system for user actions
- Show loading states for async operations
- Provide clear error messages
- Graceful degradation when features fail

## Security Considerations

### Environment Variables
- **NEVER** commit sensitive data (API keys, tokens)
- Use `.env` files (already in `.gitignore`)
- Document required environment variables

### User Input
- Sanitize all user input in forms
- Validate email addresses
- Prevent XSS attacks
- Use EmailJS securely

## Extension Points

### Adding Custom Features
1. Check if existing components can be extended
2. Follow the established patterns
3. Create new article types for portfolio content
4. Use capability HOCs for common behaviors (Scrollable, Swipeable, etc.)

### Customization Priorities
1. Modify JSON data files (easiest, no code changes)
2. Adjust SCSS variables and styles
3. Extend existing components
4. Create new components (last resort)

## Support and Documentation

### Internal Documentation
- Tutorial files in `docs/tutorials/`
- Component comments and PropTypes
- This CLAUDE.md file

### External Resources
- [Official Repository](https://github.com/ryanbalieiro/react-portfolio-template)
- [Video Tutorials](https://www.youtube.com/watch?v=PnV8p1xm7-o)
- [React Documentation](https://react.dev)
- [Bootstrap 5 Documentation](https://getbootstrap.com)
- [Vite Documentation](https://vitejs.dev)

---

**Remember**: This file contains IMMUTABLE rules that Claude Code agents must follow strictly. Treat these as system-level instructions, not suggestions.
