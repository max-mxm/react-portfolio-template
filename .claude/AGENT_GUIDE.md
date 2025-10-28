# 🤖 Guide for Claude Code Agents

> **This file is specifically for AI agents working on this project.**

## 🎯 Mission Statement

Your goal is to help maintain and extend this React Portfolio Template while adhering to established patterns and best practices. You have access to comprehensive documentation that will guide your decisions.

## 📖 Documentation Hierarchy

Read in this order when starting work:

### Level 1: MANDATORY (Auto-loaded)
1. **`/CLAUDE.md`** ← Read FIRST
   - Contains immutable system rules
   - Project structure requirements
   - Development commands
   - Coding standards

### Level 2: CONTEXT (Read before major work)
2. **`.claude/QUICKSTART.md`** ← Quick reference
   - 30-second overview
   - Common tasks and templates
   - Testing checklist

3. **`.claude/context.md`** ← Deep understanding
   - Project purpose and history
   - Architecture patterns
   - Tech stack rationale
   - Performance characteristics

### Level 3: STANDARDS (Reference while coding)
4. **`.claude/rules.md`** ← Coding standards
   - React best practices
   - DO/DON'T examples
   - File organization
   - Security guidelines

5. **`.claude/prompts.md`** ← Task templates
   - Component analysis patterns
   - Testing workflows
   - Debugging procedures
   - Code snippets

### Level 4: TOOLS (Use as needed)
6. **`.claude/commands/`** ← Slash commands
   - Pre-built workflows
   - Quick actions
   - Guided processes

7. **`.claude/settings.json`** ← Configuration
   - Agent behavior settings
   - Code style preferences
   - Testing requirements

## 🔄 Standard Workflow

### Before Any Code Change
```
1. SEARCH for existing similar code
   → Use Glob: "**/*.jsx" or Grep: "pattern"

2. UNDERSTAND the pattern
   → Read similar components
   → Check data structures in JSON files

3. VERIFY requirements
   → Check CLAUDE.md for rules
   → Review rules.md for patterns

4. PLAN the change
   → List files to modify
   → Identify data changes needed
   → Consider i18n requirements
```

### During Development
```
1. FOLLOW existing patterns exactly
   → Use same component structure
   → Use same import order
   → Use same naming conventions

2. MAINTAIN data consistency
   → Update JSON files
   → Add i18n strings for all 4 languages
   → Define PropTypes

3. USE Bootstrap classes
   → Don't write custom CSS
   → Use responsive utilities
   → Follow theme-aware patterns
```

### After Code Change
```
1. VALIDATE syntax
   → Check for errors
   → Verify imports
   → Test PropTypes

2. TEST thoroughly
   → Desktop (1920x1080)
   → Mobile (375x667)
   → Dark theme
   → Light theme
   → All 4 languages

3. REVIEW against rules
   → No hardcoded strings
   → No class components
   → No console.log
   → Proper PropTypes
```

## 🚨 Critical Rules (Never Break These!)

### Rule #1: ALWAYS Search First
```javascript
// WRONG: Creating without searching
// → Creates duplicate or inconsistent code

// RIGHT: Search for patterns
Glob: "**/Article*.jsx"
Grep: "useData" --output_mode content
// → Learn from existing code, then create
```

### Rule #2: NO Hardcoded Text
```javascript
// WRONG
<button>Click me</button>

// RIGHT
const {getString} = useLanguageProvider()
<button>{getString('button.click')}</button>

// Also add to strings.json:
{
  "button.click": {
    "en": "Click me",
    "es": "Haz clic",
    "fr": "Cliquez",
    "ko": "클릭"
  }
}
```

### Rule #3: Functional Components Only
```javascript
// WRONG - Class component
class MyComponent extends React.Component { }

// RIGHT - Functional component
const MyComponent = ({prop1, prop2}) => {
  return <div>...</div>
}

MyComponent.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number
}
```

### Rule #4: Always Define PropTypes
```javascript
// WRONG - No PropTypes
const MyComponent = ({title, items}) => { }
export default MyComponent

// RIGHT - With PropTypes
const MyComponent = ({title, items}) => { }

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object)
}

MyComponent.defaultProps = {
  items: []
}

export default MyComponent
```

### Rule #5: Bootstrap Classes Only
```javascript
// WRONG - Inline styles
<div style={{padding: '20px', display: 'flex'}}>

// RIGHT - Bootstrap utilities
<div className="p-4 d-flex justify-content-between">
```

## 🎨 Component Creation Checklist

When creating a new component:

- [ ] Searched for similar existing components
- [ ] Followed the exact pattern from similar components
- [ ] Used functional component with hooks
- [ ] Defined PropTypes with descriptions
- [ ] Added default props where appropriate
- [ ] Organized imports correctly (React → 3rd party → local)
- [ ] Used Bootstrap classes (no inline styles)
- [ ] Extracted all text to strings.json (all 4 languages)
- [ ] Made component responsive (tested mobile + desktop)
- [ ] Tested in both dark and light themes
- [ ] Handled loading states (useData pattern)
- [ ] Added appropriate error handling
- [ ] Documented complex logic with comments
- [ ] No console.log statements
- [ ] ESLint passes

## 📝 Data File Checklist

When modifying JSON files:

- [ ] Validated JSON syntax (no trailing commas!)
- [ ] Maintained consistent property naming (camelCase)
- [ ] Kept structure flat when possible
- [ ] Used unique IDs for list items
- [ ] Used boolean values (not "true"/"false" strings)
- [ ] Matched component PropTypes expectations
- [ ] Backed up file before major changes
- [ ] Tested with component after changes

## 🌍 i18n Checklist

When adding translatable content:

- [ ] Identified all user-facing text
- [ ] Created descriptive keys in strings.json
- [ ] Added English translation
- [ ] Added Spanish translation
- [ ] Added French translation
- [ ] Added Korean translation
- [ ] Used getString() in component
- [ ] Tested language switching
- [ ] Verified translations make sense in context

## 🧪 Testing Protocol

### Required Test Matrix

| Viewport | Theme | Languages | Status |
|----------|-------|-----------|--------|
| 375x667 (Mobile) | Dark | en, es, fr, ko | ☐ |
| 375x667 (Mobile) | Light | en, es, fr, ko | ☐ |
| 768x1024 (Tablet) | Dark | en, es, fr, ko | ☐ |
| 768x1024 (Tablet) | Light | en, es, fr, ko | ☐ |
| 1920x1080 (Desktop) | Dark | en, es, fr, ko | ☐ |
| 1920x1080 (Desktop) | Light | en, es, fr, ko | ☐ |

### Quick Test Commands
```bash
# Development mode (with HMR)
npm run dev

# Lint check
npm run lint

# Production build check
npm run build && npm run preview
```

## 🔍 Debugging Protocol

When something doesn't work:

1. **Check Browser Console**
   - Look for JavaScript errors
   - Check for PropTypes warnings
   - Verify network requests succeeded

2. **Verify Data Loading**
   - useData() hook returning data?
   - JSON file path correct?
   - JSON syntax valid?

3. **Check Component Props**
   - PropTypes defined?
   - Required props passed?
   - Correct data types?

4. **Test Responsive Behavior**
   - Mobile viewport?
   - Desktop viewport?
   - useLayoutProvider() working?

5. **Verify Theme**
   - Bootstrap classes used?
   - CSS variables applied?
   - Both themes tested?

## 📚 Knowledge Base

### Component Patterns Reference

| Pattern | Where to Find | When to Use |
|---------|---------------|-------------|
| Data Loading | ArticlePortfolio.jsx | Loading JSON data |
| Responsive Layout | Layout.jsx | Mobile vs Desktop |
| i18n | NavProfileCard.jsx | Translatable text |
| Form Handling | ArticleContactForm.jsx | User input |
| Modal | GalleryModal.jsx | Popups/overlays |
| Filtering | ArticlePortfolio.jsx | Category filters |
| Timeline | ArticleTimeline.jsx | Chronological data |
| Cards Grid | ArticleCards.jsx | Grid layouts |

### Hook Patterns Reference

| Hook | Location | Purpose |
|------|----------|---------|
| useData | hooks/api.js | Fetch JSON data |
| useLayoutProvider | hooks/layout.js | Layout state |
| useLanguageProvider | hooks/layout.js | i18n support |
| useThemeProvider | hooks/layout.js | Theme state |

### Utility Functions Reference

| Function | Location | Purpose |
|----------|----------|---------|
| formatDate | hooks/utils.js | Date formatting |
| sanitizeInput | hooks/utils.js | Input cleaning |
| parseArticleData | hooks/parser.js | Data parsing |

## 🎓 Advanced Topics

### Creating Custom Article Types

1. Study ArticlePortfolio.jsx structure
2. Copy pattern to new ArticleXxx.jsx
3. Define unique PropTypes
4. Create JSON data file in public/data/sections/
5. Register in sections.json
6. Test thoroughly

### Extending HOCs (Capabilities)

Located in `src/components/capabilities/`:
- Scrollable - Custom scrollbar
- Swipeable - Touch gestures
- Collapsable - Expand/collapse
- Animable - Animations
- Transitionable - Page transitions

Use by wrapping components:
```javascript
export default Scrollable(MyComponent)
```

### Performance Optimization

When component renders too often:
```javascript
// Memoize expensive calculations
const result = React.useMemo(() => {
  return expensiveCalculation(data)
}, [data])

// Memoize callbacks
const handleClick = React.useCallback(() => {
  doSomething(id)
}, [id])

// Memoize entire component
export default React.memo(MyComponent)
```

## 🚀 Deployment Considerations

Before deployment:
- [ ] Set `debugMode: false` in settings.json
- [ ] Set `fakeEmailRequests: false` if using EmailJS
- [ ] Update version number in package.json and settings.json
- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`
- [ ] Verify base path in vite.config.js matches deployment
- [ ] Check all images are optimized
- [ ] Verify no console.log statements

## 📞 Quick Reference Links

- **Main rules**: `/CLAUDE.md`
- **Quick start**: `.claude/QUICKSTART.md`
- **Context**: `.claude/context.md`
- **Standards**: `.claude/rules.md`
- **Templates**: `.claude/prompts.md`
- **Settings**: `.claude/settings.json`

## 💬 Communication Guidelines

### When Explaining Changes
- State what you're doing and why
- Reference the pattern you're following
- Mention files you're modifying
- Describe testing performed

### When Asking for Clarification
- Quote specific requirements that are unclear
- Present multiple valid approaches
- Explain trade-offs
- Recommend a solution with rationale

### When Reporting Issues
- Describe what you expected
- Describe what actually happened
- Include relevant error messages
- List steps to reproduce
- Suggest potential fixes

## 🏁 Final Checklist

Before finishing any task:

- [ ] Code follows all rules in CLAUDE.md
- [ ] Matches patterns in existing codebase
- [ ] All text is in strings.json (all 4 languages)
- [ ] PropTypes defined for all components
- [ ] Tested on mobile and desktop
- [ ] Tested in dark and light themes
- [ ] Tested in all 4 languages
- [ ] No console errors or warnings
- [ ] ESLint passes
- [ ] Production build succeeds
- [ ] Changes documented in commit message

---

**Remember**: Your adherence to these guidelines ensures code quality and consistency. When in doubt, search existing code and follow established patterns. You're doing great! 🌟
