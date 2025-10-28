# Coding Standards and Rules

## General Principles

### Code Quality Guardrails
1. **DRY (Don't Repeat Yourself)**: Extract repeated logic into reusable functions/components
2. **KISS (Keep It Simple)**: Prefer simple solutions over complex ones
3. **YAGNI (You Aren't Gonna Need It)**: Don't add functionality until it's needed
4. **Single Responsibility**: Each component/function should do one thing well

### Code Review Checklist
Before considering any code complete:
- [ ] Code is readable and self-documenting
- [ ] No console.log() statements in production code
- [ ] PropTypes are defined for all components
- [ ] No unused imports or variables
- [ ] No hardcoded strings (use i18n)
- [ ] Responsive design tested
- [ ] ESLint passes without warnings

## React-Specific Rules

### Component Rules

#### ✅ DO
```jsx
// Use functional components with hooks
const MyComponent = ({title, onClick}) => {
    const [isActive, setIsActive] = React.useState(false)

    return (
        <button onClick={onClick}>
            {title}
        </button>
    )
}

MyComponent.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default MyComponent
```

#### ❌ DON'T
```jsx
// Don't use class components
class MyComponent extends React.Component { ... }

// Don't hardcode text
<button>Click me</button>

// Don't forget PropTypes
const MyComponent = ({title}) => <div>{title}</div>
export default MyComponent // Missing PropTypes!

// Don't use inline styles (use Bootstrap classes)
<div style={{marginTop: '20px'}}>...</div>
```

### Hooks Rules

#### ✅ DO
```jsx
// Follow hooks rules
const useCustomHook = (initialValue) => {
    const [value, setValue] = React.useState(initialValue)

    React.useEffect(() => {
        // Side effects here
        return () => {
            // Cleanup
        }
    }, [value])

    return [value, setValue]
}

// Use dependency arrays correctly
React.useEffect(() => {
    fetchData(id)
}, [id]) // Include all dependencies
```

#### ❌ DON'T
```jsx
// Don't call hooks conditionally
if (condition) {
    const [state, setState] = React.useState() // WRONG!
}

// Don't omit dependencies
React.useEffect(() => {
    fetchData(id)
}, []) // WRONG - missing 'id' dependency
```

### State Management Rules

#### ✅ DO
```jsx
// Lift state up when shared between components
const Parent = () => {
    const [sharedState, setSharedState] = React.useState()
    return (
        <>
            <ChildA state={sharedState} setState={setSharedState} />
            <ChildB state={sharedState} />
        </>
    )
}

// Use functional updates for state that depends on previous state
setCount(prevCount => prevCount + 1)

// Use Context for deeply nested or global state
const ThemeContext = React.createContext()
```

#### ❌ DON'T
```jsx
// Don't mutate state directly
state.push(newItem) // WRONG!
setState(state) // WRONG!

// Correct way:
setState([...state, newItem])

// Don't create unnecessary state
const doubled = count * 2 // Just calculate, no need for state
```

## File Organization Rules

### Import Order (MANDATORY)
```jsx
// 1. React core
import React from 'react'

// 2. React ecosystem (hooks, etc.)
import { useState, useEffect } from 'react'

// 3. Third-party UI libraries
import { Container, Row, Col } from 'react-bootstrap'

// 4. Third-party utilities
import Scrollbar from 'smooth-scrollbar'

// 5. Local components (closest to farthest)
import Article from './base/Article'
import CategoryFilter from '../generic/CategoryFilter'
import Layout from '../../layout/Layout'

// 6. Hooks and utilities
import { useData } from '../../../hooks/api'
import { formatDate } from '../../../hooks/utils'

// 7. PropTypes
import PropTypes from 'prop-types'

// 8. Styles
import './MyComponent.scss'
```

### Export Rules

#### ✅ DO
```jsx
// Default export for components
export default MyComponent

// Named exports for utilities
export const formatDate = (date) => { ... }
export const parseData = (data) => { ... }
```

#### ❌ DON'T
```jsx
// Don't mix default and named exports in components
export const MyComponent = () => { ... }
export default MyComponent // Confusing!

// Don't export everything as default from utils
export default { formatDate, parseData } // Use named exports!
```

## Styling Rules

### Bootstrap Usage (MANDATORY)

#### ✅ DO
```jsx
// Use Bootstrap utility classes
<div className="container">
    <div className="row g-3">
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="card-title mb-3">Title</h5>
                    <p className="text-muted">Description</p>
                </div>
            </div>
        </div>
    </div>
</div>

// Combine classes logically
<button className="btn btn-primary btn-lg shadow">
    Click me
</button>
```

#### ❌ DON'T
```jsx
// Don't use inline styles
<div style={{padding: '20px', margin: '10px'}}>...</div>

// Don't reinvent Bootstrap components
<div className="custom-button">...</div> // Use btn classes!

// Don't ignore responsive utilities
<div className="col-6">...</div> // Add breakpoints: col-12 col-md-6
```

### SCSS Rules

#### ✅ DO
```scss
// Use nesting sparingly
.article-portfolio {
    padding: 2rem;

    .portfolio-item {
        margin-bottom: 1rem;
    }
}

// Use CSS variables for theming
.custom-element {
    background-color: var(--bs-primary);
    color: var(--bs-light);
}

// Mobile-first media queries
.element {
    font-size: 14px;

    @media (min-width: 768px) {
        font-size: 16px;
    }
}
```

#### ❌ DON'T
```scss
// Don't nest too deeply (max 3 levels)
.a {
    .b {
        .c {
            .d {  // Too deep!
                .e { ... }
            }
        }
    }
}

// Don't use !important (except rare cases)
.element {
    color: red !important; // Avoid!
}

// Don't use absolute units (use rem, em, %, vh/vw)
.element {
    width: 500px; // Use rem or %
}
```

## Data Handling Rules

### JSON Data Files

#### ✅ DO
```json
{
    "items": [
        {
            "id": "unique-id-1",
            "title": "Item Title",
            "description": "Item description",
            "active": true,
            "metadata": {
                "category": "example",
                "tags": ["tag1", "tag2"]
            }
        }
    ]
}
```

**Rules:**
- Use consistent property names (camelCase)
- Include unique IDs for list items
- Keep structure flat when possible
- Use boolean values (not "true"/"false" strings)
- Validate JSON before committing (use JSON linter)

#### ❌ DON'T
```json
{
    "Items": [  // Don't use PascalCase
        {
            // Don't omit IDs
            "Title": "Item",  // Don't use PascalCase
            "is_active": "yes",  // Don't use snake_case or string booleans
            "deep": {
                "nesting": {
                    "is": {
                        "bad": true  // Avoid deep nesting
                    }
                }
            }
        }
    ],
    // Don't add trailing commas
}
```

### Data Loading Pattern

#### ✅ DO
```jsx
const MyComponent = () => {
    const data = useData('sections/portfolio.json')

    if (!data) {
        return <Preloader />
    }

    if (!data.items || data.items.length === 0) {
        return <MessageCard message="No items to display" />
    }

    return (
        <div>
            {data.items.map(item => (
                <ItemComponent key={item.id} {...item} />
            ))}
        </div>
    )
}
```

#### ❌ DON'T
```jsx
const MyComponent = () => {
    const data = useData('sections/portfolio.json')

    // Don't access data without checking
    return (
        <div>
            {data.items.map(item => ...)} // Crashes if data is null!
        </div>
    )
}
```

## Performance Rules

### Optimization Best Practices

#### ✅ DO
```jsx
// Memoize expensive calculations
const expensiveValue = React.useMemo(() => {
    return complexCalculation(data)
}, [data])

// Memoize callbacks passed to children
const handleClick = React.useCallback(() => {
    doSomething(id)
}, [id])

// Memoize components that render frequently
const MemoizedComponent = React.memo(ExpensiveComponent)

// Lazy load heavy components
const HeavyComponent = React.lazy(() => import('./HeavyComponent'))
```

#### ❌ DON'T
```jsx
// Don't create functions in render
<button onClick={() => handleClick(id)}>  // Creates new function every render

// Don't use inline objects as props
<Component style={{margin: 10}} />  // Creates new object every render

// Don't put everything in useMemo
const simple = React.useMemo(() => a + b, [a, b])  // Overkill for simple calc
```

## Accessibility Rules

### ARIA and Semantic HTML

#### ✅ DO
```jsx
// Use semantic HTML
<nav>
    <ul>
        <li><a href="#home">Home</a></li>
    </ul>
</nav>

// Add ARIA labels when needed
<button aria-label="Close modal" onClick={onClose}>
    <i className="fa fa-times" aria-hidden="true" />
</button>

// Ensure keyboard navigation
<div
    role="button"
    tabIndex={0}
    onClick={handleClick}
    onKeyPress={(e) => e.key === 'Enter' && handleClick()}
>
    Clickable div
</div>
```

#### ❌ DON'T
```jsx
// Don't use divs for everything
<div onClick={...}>Click me</div>  // Use <button>

// Don't forget alt text
<img src="photo.jpg" />  // Add alt attribute!

// Don't ignore keyboard users
<div onClick={...}>Click</div>  // No keyboard support!
```

## i18n Rules

### Translation Standards

#### ✅ DO
```jsx
// Use translation keys from strings.json
const MyComponent = () => {
    const {getString} = useLanguageProvider()

    return (
        <h1>{getString('section.title')}</h1>
    )
}

// In strings.json - provide ALL languages
{
    "section.title": {
        "en": "Welcome",
        "es": "Bienvenido",
        "fr": "Bienvenue",
        "ko": "환영합니다"
    }
}
```

#### ❌ DON'T
```jsx
// Don't hardcode text
<h1>Welcome</h1>  // Use getString()!

// Don't provide partial translations
{
    "section.title": {
        "en": "Welcome",
        "es": "Bienvenido"
        // Missing fr and ko!
    }
}

// Don't use language-specific logic
if (language === 'en') return "Welcome"  // Use strings.json!
```

## Error Handling Rules

### Error Boundaries and Validation

#### ✅ DO
```jsx
// Validate props
MyComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })).isRequired,
    onSelect: PropTypes.func
}

// Provide default props
MyComponent.defaultProps = {
    onSelect: () => {}
}

// Handle errors gracefully
try {
    const result = riskyOperation()
    return <SuccessView result={result} />
} catch (error) {
    console.error('Operation failed:', error)
    return <ErrorView message="Something went wrong" />
}
```

#### ❌ DON'T
```jsx
// Don't skip PropTypes validation
const MyComponent = ({items, onSelect}) => { ... }
// Missing PropTypes!

// Don't let errors crash the app
const result = riskyOperation()  // No try/catch!

// Don't ignore error states
if (data) return <Content />
return null  // Show error message instead!
```

## Git Commit Rules

### Commit Message Format (MANDATORY)
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks (dependencies, build config, etc.)

**Examples:**
```
feat(articles): add ArticleGallery component

Add a new article type for displaying image galleries with lightbox functionality.
Includes support for categorization and responsive grid layout.

Closes #123

---

fix(portfolio): resolve image loading race condition

Images were sometimes not loading due to async timing issues.
Added proper loading states and error handling.

---

chore(deps): update react to 18.3.1

Update React and React-DOM to latest patch version for security fixes.
```

### Commit Best Practices
- Commit often, commit atomic changes
- Write descriptive messages (not "fix bug" or "update")
- Reference issue numbers when applicable
- Keep commits focused (one logical change per commit)

## Testing Rules

### Manual Testing Checklist

Before pushing code:
- [ ] Test in development mode (`npm run dev`)
- [ ] Test production build (`npm run build && npm run preview`)
- [ ] Test on desktop (1920x1080, 1366x768)
- [ ] Test on mobile (375x667 iPhone, 360x740 Android)
- [ ] Test all theme variants (dark and light)
- [ ] Test all language variants (en, es, fr, ko)
- [ ] Check browser console for errors/warnings
- [ ] Run ESLint and fix all issues

### Component Testing
```jsx
// When creating/modifying components, test:
// 1. With typical data
// 2. With empty data
// 3. With missing/null data
// 4. With extreme data (very long text, many items)
// 5. Different screen sizes
// 6. Different themes
// 7. Different languages
```

## Security Rules

### Input Sanitization

#### ✅ DO
```jsx
// Sanitize user input in forms
const sanitizeInput = (input) => {
    return input.trim().replace(/[<>]/g, '')
}

// Validate email addresses
const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Use environment variables for sensitive data
const API_KEY = import.meta.env.VITE_API_KEY
```

#### ❌ DON'T
```jsx
// Don't trust user input
<div dangerouslySetInnerHTML={{__html: userInput}} />  // XSS risk!

// Don't commit sensitive data
const API_KEY = "sk-1234567890abcdef"  // Never hardcode!

// Don't expose sensitive info in client
console.log('API Key:', apiKey)  // Don't log secrets!
```

---

**Note**: These rules are enforced by Claude Code agents. All code must comply before being committed.
