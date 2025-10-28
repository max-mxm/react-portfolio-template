# 🚀 Quick Start for Claude Code Agents

Welcome! This guide helps Claude Code agents quickly understand and work with this React Portfolio project.

## ⚡ 30-Second Overview

**What**: Modern React 18 portfolio template with Vite + Bootstrap 5
**Architecture**: Data-driven SPA with JSON configuration
**Key Feature**: Multi-language (4 langs) + Multi-theme (dark/light)
**Build Tool**: Vite 6 with optimized code splitting

## 🎯 Essential Rules (Read First!)

### 🔴 CRITICAL - Always Do This FIRST
```
Before creating ANY file:
1. Use Glob to search for similar files
2. Use Grep to find related code
3. Follow existing patterns exactly
```

### 🚫 Never Do This
- ❌ Use class components (use functional + hooks)
- ❌ Hardcode text (use i18n from strings.json)
- ❌ Skip PropTypes validation
- ❌ Use inline styles (use Bootstrap classes)
- ❌ Forget to test mobile + desktop

### ✅ Always Do This
- ✅ Search before creating
- ✅ Use functional components with hooks
- ✅ Add all text to strings.json (all 4 languages)
- ✅ Define PropTypes for all components
- ✅ Test responsiveness, themes, and languages

## 📂 Project Structure (Know This!)

```
src/
├── components/
│   ├── articles/          ← Portfolio content types
│   ├── generic/           ← Reusable UI components
│   ├── layout/            ← Layout structure
│   └── nav/               ← Navigation components
├── hooks/                 ← Custom hooks & utilities
└── main.jsx               ← App entry point

public/
└── data/                  ← JSON configuration
    ├── settings.json      ← Global settings
    ├── profile.json       ← User profile
    ├── strings.json       ← i18n translations
    └── sections/*.json    ← Section data
```

## 🛠️ Common Tasks

### 1️⃣ Analyze a Component
```bash
/analyze-component
# Then specify the component name
```

### 2️⃣ Add New Content
```bash
/update-content
# Opens the right JSON file for you
```

### 3️⃣ Create New Article Type
```bash
/create-article
# Guides you through the process
```

### 4️⃣ Check Translations
```bash
/check-i18n
# Verifies all languages are complete
```

### 5️⃣ Review Before Commit
```
Review my changes before committing
```

## 📋 Component Template

```jsx
import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'

const MyComponent = ({title, items}) => {
    const [state, setState] = React.useState(null)

    return (
        <Container>
            <h1>{title}</h1>
            {/* Your JSX here */}
        </Container>
    )
}

MyComponent.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array
}

MyComponent.defaultProps = {
    items: []
}

export default MyComponent
```

## 🎨 Styling Quick Reference

```jsx
{/* Responsive Grid */}
<Row className="g-4">
    <Col xs={12} md={6} lg={4}>
        {/* Full width mobile, half tablet, third desktop */}
    </Col>
</Row>

{/* Theme-Aware Colors */}
<div className="bg-primary text-white">
    {/* Automatically adapts to dark/light theme */}
</div>

{/* Spacing */}
<div className="p-4 mb-3">
    {/* p-4 = padding, mb-3 = margin-bottom */}
</div>

{/* Responsive Visibility */}
<div className="d-none d-md-block">
    {/* Hidden on mobile, visible on tablet+ */}
</div>
```

## 🌍 i18n Pattern

```jsx
// 1. In your component
import { useLanguageProvider } from '../../hooks/layout'

const MyComponent = () => {
    const {getString} = useLanguageProvider()
    return <h1>{getString('my.key')}</h1>
}

// 2. In public/data/strings.json
{
    "my.key": {
        "en": "Hello",
        "es": "Hola",
        "fr": "Bonjour",
        "ko": "안녕하세요"
    }
}
```

## 📱 Responsive Pattern

```jsx
import { useLayoutProvider } from '../../hooks/layout'

const MyComponent = () => {
    const {isMobileLayout} = useLayoutProvider()

    return isMobileLayout ? (
        <MobileVersion />
    ) : (
        <DesktopVersion />
    )
}
```

## 💾 Data Loading Pattern

```jsx
import { useData } from '../../hooks/api'
import Preloader from '../loaders/Preloader'

const MyComponent = () => {
    const data = useData('sections/mydata.json')

    // Always check if data is loaded
    if (!data) {
        return <Preloader />
    }

    return (
        <div>
            {data.items.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    )
}
```

## 🧪 Testing Checklist

Before saying "done":
- [ ] Works on mobile (375x667)
- [ ] Works on desktop (1920x1080)
- [ ] Dark theme looks good
- [ ] Light theme looks good
- [ ] English works
- [ ] Spanish works
- [ ] French works
- [ ] Korean works
- [ ] No console errors
- [ ] ESLint passes

```bash
# Run these commands
npm run dev      # Visual testing
npm run lint     # Code quality
npm run build    # Production check
```

## 🚨 Troubleshooting

### "Can't find a pattern for X"
1. Search components: `/analyze-component`
2. Check `prompts.md` for similar tasks
3. Review `context.md` for architecture

### "Not sure about code style"
1. Check `rules.md` for DO/DON'T examples
2. Look at existing similar components
3. Follow the template above

### "Component not working"
1. Check browser console
2. Verify data is loading (useData hook)
3. Check PropTypes warnings
4. Test in both themes
5. Test in all viewports

## 📚 File Reference

Quick guide to configuration files:

| File | Purpose | When to Read |
|------|---------|--------------|
| `CLAUDE.md` (root) | **Immutable rules** | First! Auto-loaded |
| `.claude/context.md` | Project architecture | Understanding "why" |
| `.claude/rules.md` | Coding standards | Before writing code |
| `.claude/prompts.md` | Reusable templates | When stuck |
| `.claude/settings.json` | Agent configuration | Project settings |
| `.claude/README.md` | Full guide | Comprehensive reference |

## 🎓 Learning Path

### Day 1 - Understand
1. Read this QUICKSTART.md
2. Scan `CLAUDE.md` (root)
3. Browse one existing component
4. Understand the data flow

### Day 2 - Practice
1. Try `/analyze-component` on ArticlePortfolio
2. Modify JSON data in a section
3. Add a translation to strings.json
4. Test theme switching

### Day 3 - Build
1. Create a simple component following patterns
2. Connect it to JSON data
3. Add i18n support
4. Test thoroughly

## 💡 Pro Tips

### Tip #1: Search First, Always
```bash
# Before creating MyNewComponent.jsx:
Glob: "**/Article*.jsx"
Grep: "ArticlePortfolio" --output_mode content
# Learn from existing patterns!
```

### Tip #2: Use Slash Commands
```bash
# Fast access to common tasks
/analyze-component
/check-i18n
/update-content
```

### Tip #3: Copy Existing Patterns
```bash
# Don't reinvent the wheel
# ArticlePortfolio is a great reference
# ArticleSkills shows data mapping well
# ArticleContactForm demonstrates forms
```

### Tip #4: Bootstrap First
```jsx
// Don't write custom CSS if Bootstrap has it
<div className="d-flex justify-content-between align-items-center">
  {/* Much better than custom styles */}
</div>
```

### Tip #5: Test Early, Test Often
```bash
# Keep dev server running
npm run dev

# Test immediately after changes
# Don't wait until the end
```

## 🔗 External Links

- [Project Repo](https://github.com/ryanbalieiro/react-portfolio-template)
- [React Docs](https://react.dev)
- [Bootstrap 5 Docs](https://getbootstrap.com)
- [Vite Docs](https://vitejs.dev)

## 📞 Next Steps

1. ✅ Read this QUICKSTART.md
2. ✅ Review `CLAUDE.md` in the root
3. ✅ Try a slash command: `/analyze-component`
4. ✅ Browse `rules.md` for patterns
5. ✅ Start coding!

---

**Remember**: When in doubt, search existing code first. This project has excellent patterns to follow!

Happy coding! 🎉
