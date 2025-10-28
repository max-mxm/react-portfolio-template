# Reusable Prompt Snippets

This file contains common prompt patterns and snippets for working with this React Portfolio project.

## Component Analysis Prompts

### Analyze Component Structure
```
Analyze the [ComponentName] component:
1. List all props and their types
2. Identify all hooks used (useState, useEffect, custom hooks)
3. Map out component dependencies (imports)
4. Describe the rendering logic
5. Check for PropTypes validation
6. Identify potential optimizations (React.memo, useCallback, useMemo)
```

### Review Component Performance
```
Review [ComponentName] for performance issues:
1. Check for unnecessary re-renders
2. Identify expensive calculations that should be memoized
3. Look for inline function definitions in render
4. Check for missing dependency arrays in useEffect
5. Suggest React.memo, useCallback, or useMemo where appropriate
```

### Component Accessibility Audit
```
Audit [ComponentName] for accessibility:
1. Check for semantic HTML usage
2. Verify ARIA labels where needed
3. Test keyboard navigation support
4. Check color contrast (if applicable)
5. Verify alt text on images
6. Ensure focus management
```

## Data & JSON Prompts

### Validate JSON Structure
```
Validate the structure of [filename.json]:
1. Check JSON syntax is valid
2. Verify all required fields are present
3. Check data types are correct
4. Identify any inconsistencies
5. Compare with component expectations
6. Suggest improvements
```

### Sync Component and Data
```
Verify that [ComponentName] and [data.json] are synchronized:
1. List all data fields the component expects
2. List all fields present in the JSON file
3. Identify missing or extra fields
4. Check for type mismatches
5. Suggest fixes for any issues
```

### i18n Translation Check
```
Check strings.json for translation completeness:
1. List all translation keys
2. Verify all 4 languages (en, es, fr, ko) are present for each key
3. Identify missing translations
4. Check for inconsistent key naming
5. Suggest new keys for any hardcoded strings found in components
```

## Refactoring Prompts

### Extract Reusable Logic
```
Identify reusable logic in [ComponentName] that should be extracted:
1. Look for repeated logic across components
2. Identify logic suitable for custom hooks
3. Find utility functions that could be moved to hooks/utils/
4. Suggest component composition opportunities
5. Recommend HOC usage where appropriate
```

### Simplify Component
```
Simplify [ComponentName] by:
1. Breaking it into smaller sub-components
2. Extracting complex logic into custom hooks
3. Removing unnecessary state
4. Simplifying conditional rendering
5. Reducing prop drilling (suggest Context if needed)
```

### Improve Code Organization
```
Improve the organization of [directory/]:
1. Review file naming consistency
2. Suggest better directory structure
3. Identify misplaced files
4. Recommend grouping related components
5. Suggest index.js barrel exports if beneficial
```

## Testing Prompts

### Component Test Checklist
```
Test [ComponentName] with the following scenarios:
1. Renders correctly with typical props
2. Handles empty/null/undefined data gracefully
3. Works on mobile viewport (375x667)
4. Works on desktop viewport (1920x1080)
5. Functions in dark theme
6. Functions in light theme
7. Displays correctly in all 4 languages
8. Handles edge cases (very long text, many items, etc.)
```

### Cross-Browser Testing
```
Test [feature] across browsers:
1. Chrome (latest)
2. Firefox (latest)
3. Safari (latest)
4. Mobile Safari (iOS)
5. Chrome Mobile (Android)
Check for: Layout issues, JavaScript errors, performance problems
```

## Debugging Prompts

### Debug Issue
```
Debug the following issue: [describe issue]
1. Reproduce the problem
2. Check browser console for errors
3. Inspect component props with React DevTools
4. Verify data is loading correctly
5. Check for state update issues
6. Test in different environments (dev/build)
7. Propose a fix
```

### Performance Debugging
```
Debug performance issue in [ComponentName]:
1. Use React DevTools Profiler
2. Identify components that re-render frequently
3. Check for expensive operations in render
4. Look for memory leaks (useEffect cleanup)
5. Analyze bundle size impact
6. Suggest optimizations
```

## Feature Implementation Prompts

### Add New Article Type
```
Create a new article type called Article[Name]:
1. Examine existing article components for patterns
2. Create component in src/components/articles/
3. Define PropTypes based on data structure
4. Create JSON data file in public/data/sections/
5. Update sections.json to include new article
6. Test with sample data
7. Verify responsiveness and themes
```

### Add New Feature
```
Implement [feature description]:
1. Search codebase for similar existing features
2. Plan component structure
3. Identify required data changes (JSON files)
4. Create necessary components following project patterns
5. Add translations to strings.json (all 4 languages)
6. Test in dev mode
7. Test production build
8. Verify accessibility
```

### Integrate Third-Party Library
```
Integrate [library-name] into the project:
1. Check if library is already in dependencies
2. Install if needed: npm install [library-name]
3. Research usage in React context
4. Create wrapper component if necessary
5. Test for conflicts with existing libraries
6. Check bundle size impact
7. Document usage in comments
```

## Optimization Prompts

### Optimize Bundle Size
```
Analyze and optimize bundle size:
1. Run: npm run build
2. Check dist/ folder sizes
3. Identify large dependencies
4. Look for duplicate code
5. Check for unused imports
6. Suggest code splitting opportunities
7. Recommend lazy loading for heavy components
```

### Optimize Images
```
Optimize images in [directory]:
1. List all images and their sizes
2. Identify images >100KB
3. Suggest compression techniques
4. Recommend responsive image strategies
5. Check for unused images
6. Suggest WebP format where appropriate
```

### Optimize Load Time
```
Optimize initial load time:
1. Analyze current load performance
2. Check for render-blocking resources
3. Identify critical CSS
4. Suggest font loading strategies
5. Review preloader implementation
6. Recommend async/defer for scripts
7. Check for unnecessary network requests
```

## Code Review Prompts

### Pre-Commit Review
```
Review my changes before committing:
1. Run ESLint and report issues
2. Check for console.log statements
3. Verify PropTypes are defined
4. Check for hardcoded strings (should be in i18n)
5. Verify imports are organized correctly
6. Check for unused variables/imports
7. Suggest improvements
```

### Security Review
```
Review for security issues:
1. Check for XSS vulnerabilities (dangerouslySetInnerHTML)
2. Verify input sanitization
3. Check for exposed secrets/API keys
4. Review environment variable usage
5. Check for insecure dependencies (npm audit)
6. Verify HTTPS usage for external resources
```

### Accessibility Review
```
Review accessibility compliance:
1. Check semantic HTML usage
2. Verify keyboard navigation
3. Test screen reader compatibility (ARIA labels)
4. Check color contrast ratios
5. Verify focus indicators
6. Test with reduced motion preferences
```

## Documentation Prompts

### Generate Component Documentation
```
Document [ComponentName]:
1. Write a brief description of the component's purpose
2. List and describe all props (with types and defaults)
3. Provide usage examples
4. Describe any side effects (API calls, localStorage)
5. Note any important dependencies
6. Add JSDoc comments to the component
```

### Update README
```
Update project README with information about [feature]:
1. Add feature description
2. Include usage instructions
3. Provide code examples
4. Note any configuration requirements
5. Add troubleshooting tips if applicable
```

## Maintenance Prompts

### Dependency Update
```
Update project dependencies:
1. Check for outdated packages: npm outdated
2. Read changelogs for major version updates
3. Update package.json
4. Run npm install
5. Test critical functionality
6. Check for breaking changes
7. Update documentation if needed
```

### Technical Debt Review
```
Review technical debt in [directory/]:
1. Identify deprecated patterns
2. Find TODO/FIXME comments
3. Look for code that needs refactoring
4. Check for outdated dependencies
5. Suggest modernization opportunities
6. Prioritize improvements
```

## Quick Snippets

### Bootstrap Grid
```jsx
<Container>
    <Row className="g-4">
        <Col xs={12} md={6} lg={4}>
            {/* Content */}
        </Col>
    </Row>
</Container>
```

### Data Loading Pattern
```jsx
const MyComponent = () => {
    const data = useData('path/to/data.json')
    if (!data) return <Preloader />
    return <div>{/* Use data */}</div>
}
```

### Translation Pattern
```jsx
const MyComponent = () => {
    const {getString} = useLanguageProvider()
    return <h1>{getString('my.translation.key')}</h1>
}
```

### Theme-Aware Styling
```jsx
<div className="bg-primary text-white rounded shadow">
    {/* Automatically adapts to theme */}
</div>
```

### Responsive Component
```jsx
const MyComponent = () => {
    const {isMobileLayout} = useLayoutProvider()
    return isMobileLayout ? <MobileView /> : <DesktopView />
}
```

### Form Field
```jsx
<Input
    type="text"
    id="field-name"
    label={getString('form.label')}
    value={value}
    onChange={(e) => setValue(e.target.value)}
    required
/>
```

### Modal Pattern
```jsx
<ModalWrapper show={show} onHide={handleClose}>
    <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        {children}
    </Modal.Body>
</ModalWrapper>
```

## How to Use These Prompts

1. **Copy the entire prompt** from the relevant section
2. **Replace placeholders** (e.g., [ComponentName], [filename.json])
3. **Paste into Claude Code** chat
4. **Provide additional context** if needed
5. **Review the response** and iterate

These prompts are designed to be comprehensive starting points. Customize them based on your specific needs.
