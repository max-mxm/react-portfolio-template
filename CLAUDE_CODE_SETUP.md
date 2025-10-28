# 🤖 Claude Code Integration

This project is fully configured for optimal use with **Claude Code** AI agents. All necessary configuration files are in place to ensure consistent, high-quality code generation and assistance.

## 📁 Configuration Overview

The project includes comprehensive Claude Code configuration files:

### Core Configuration Files

| File | Purpose | Location |
|------|---------|----------|
| **CLAUDE.md** | Immutable project rules (auto-loaded) | `/CLAUDE.md` |
| **.claudeignore** | Files to exclude from analysis | `/.claudeignore` |

### .claude/ Directory

| File | Purpose | Size |
|------|---------|------|
| **README.md** | Complete configuration guide | 7.7 KB |
| **QUICKSTART.md** | Quick reference for agents | 7.7 KB |
| **AGENT_GUIDE.md** | Comprehensive agent instructions | 11 KB |
| **context.md** | Project architecture & rationale | 9.7 KB |
| **rules.md** | Coding standards & best practices | 14 KB |
| **prompts.md** | Reusable prompt templates | 9.9 KB |
| **settings.json** | Structured agent configuration | 2.5 KB |
| **commands/** | Custom slash commands | 6 files |

### Custom Slash Commands

Available commands (type `/` in Claude Code):

- `/analyze-component` - Deep analysis of a React component
- `/check-i18n` - Verify translation completeness
- `/create-article` - Guide for creating new article types
- `/optimize-build` - Build optimization suggestions
- `/review-article` - Check article + data consistency
- `/update-content` - Help modify JSON configuration

## 🚀 Quick Start with Claude Code

### For Developers

1. **Open the project in Claude Code**
   ```bash
   code .
   ```

2. **Start using slash commands**
   ```
   Type / to see available commands
   Example: /check-i18n
   ```

3. **Ask Claude for help**
   ```
   Example: "Help me create a new portfolio section"
   Claude will follow the project's established patterns
   ```

### For AI Agents

1. **Read CLAUDE.md first** (auto-loaded)
2. **Check .claude/QUICKSTART.md** for quick reference
3. **Follow patterns** in .claude/rules.md
4. **Use templates** from .claude/prompts.md

## ✨ What Makes This Setup Special

### 🎯 Enforced Best Practices

All Claude Code agents working on this project will:
- ✅ Search for existing patterns before creating new code
- ✅ Use functional React components with hooks
- ✅ Follow strict i18n requirements (4 languages)
- ✅ Define PropTypes for all components
- ✅ Use Bootstrap classes (no inline styles)
- ✅ Test responsiveness and themes
- ✅ Follow consistent commit message format

### 📚 Comprehensive Documentation

Agents have access to:
- **Architecture context**: Why the code is structured this way
- **Coding standards**: DO/DON'T examples for common scenarios
- **Prompt templates**: Pre-written prompts for common tasks
- **Testing protocols**: Complete testing checklist
- **Component patterns**: Reference implementations

### 🔄 Consistent Code Quality

Configuration ensures:
- **Pattern consistency**: All code follows established patterns
- **i18n compliance**: No hardcoded strings
- **Accessibility**: ARIA labels and semantic HTML
- **Performance**: Proper memoization and optimization
- **Security**: Input sanitization and validation

## 📖 Documentation Hierarchy

### For Humans

1. **Start here**: `README.md` (this file's parent)
2. **Quick start**: `.claude/QUICKSTART.md`
3. **Full guide**: `.claude/README.md`

### For AI Agents

1. **Core rules**: `/CLAUDE.md` (auto-loaded)
2. **Quick ref**: `.claude/AGENT_GUIDE.md`
3. **Context**: `.claude/context.md`
4. **Standards**: `.claude/rules.md`
5. **Templates**: `.claude/prompts.md`

## 🛠️ Common Use Cases

### Analyzing Components
```
Prompt: /analyze-component
Then specify: ArticlePortfolio
```

### Creating New Features
```
Prompt: Create a new article type for displaying a timeline of events
Claude will:
1. Search for similar components (ArticleTimeline)
2. Follow the established pattern
3. Create component + JSON data
4. Add i18n strings
5. Test thoroughly
```

### Reviewing Code
```
Prompt: Review my changes before committing
Claude will check:
- ESLint compliance
- PropTypes presence
- i18n usage
- Import order
- Best practices
```

### Debugging Issues
```
Prompt: The portfolio filter isn't working on mobile
Claude will:
1. Check relevant components
2. Verify data loading
3. Test responsive behavior
4. Propose fix following project patterns
```

## 🎨 Component Patterns

Claude Code knows these patterns:

### Data Loading
```jsx
const MyComponent = () => {
    const data = useData('sections/mydata.json')
    if (!data) return <Preloader />
    return <div>{/* Use data */}</div>
}
```

### i18n (Internationalization)
```jsx
const {getString} = useLanguageProvider()
return <h1>{getString('my.translation.key')}</h1>
```

### Responsive Design
```jsx
const {isMobileLayout} = useLayoutProvider()
return isMobileLayout ? <MobileView /> : <DesktopView />
```

### Bootstrap Styling
```jsx
<Row className="g-4">
    <Col xs={12} md={6} lg={4}>
        <Card className="shadow-sm">
            {/* Content */}
        </Card>
    </Col>
</Row>
```

## 🧪 Testing Protocol

Claude Code will test:

| Aspect | Requirements |
|--------|-------------|
| **Viewports** | Mobile (375x667), Tablet (768x1024), Desktop (1920x1080) |
| **Themes** | Dark mode, Light mode |
| **Languages** | English, Spanish, French, Korean |
| **Browsers** | Chrome, Firefox, Safari |
| **Accessibility** | ARIA labels, semantic HTML, keyboard navigation |

## 📝 Commit Standards

Claude Code follows this commit format:

```
type(scope): description

Examples:
feat(articles): add ArticleGallery component
fix(portfolio): resolve image loading issue
docs(readme): update setup instructions
style(layout): improve responsive spacing
```

## 🔒 Security Practices

Claude Code enforces:
- ✅ Input sanitization
- ✅ Email validation
- ✅ No hardcoded secrets
- ✅ Environment variable usage
- ✅ XSS prevention
- ✅ Secure EmailJS integration

## 🎓 Learning Resources

### For Team Members

1. **Watch tutorials**: [YouTube playlist](https://www.youtube.com/watch?v=PnV8p1xm7-o)
2. **Read docs**: Check `/docs/tutorials/` directory
3. **Ask Claude**: Use slash commands for guidance

### For AI Agents

1. **Core patterns**: `.claude/rules.md`
2. **Architecture**: `.claude/context.md`
3. **Templates**: `.claude/prompts.md`
4. **Examples**: Existing components in `src/components/`

## 🔧 Customization

### Adding Your Own Commands

Create a new file in `.claude/commands/`:

```markdown
---
description: Brief description of the command
---

Your command instructions here.
You can use $ARGUMENTS to accept parameters.
```

### Modifying Agent Behavior

Edit `.claude/settings.json`:

```json
{
  "agentBehavior": {
    "alwaysSearchBeforeCreating": true,
    "preferExistingPatterns": true,
    "enforceI18n": true
  }
}
```

### Adding Project Rules

Edit `/CLAUDE.md` or `.claude/rules.md`:
- CLAUDE.md: Immutable system rules
- rules.md: Coding standards and patterns

## 📊 Statistics

Current configuration includes:

- **8 configuration files** in `.claude/`
- **6 custom slash commands**
- **14 KB of coding standards**
- **10 KB of prompt templates**
- **10 KB of architecture context**
- **100+ code examples and patterns**

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-portfolio-template
   cd react-portfolio-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Open in Claude Code**
   ```bash
   code .
   ```

4. **Start developing**
   ```bash
   npm run dev
   ```

5. **Try a slash command**
   ```
   Type: /check-i18n
   ```

## 📞 Support

- **Issues**: Report bugs or request features on GitHub
- **Documentation**: Check `.claude/README.md` for detailed info
- **Quick help**: Use `/` commands in Claude Code
- **Community**: Join discussions on GitHub

## 🎉 Benefits

Using Claude Code with this configuration provides:

- ⚡ **Faster development**: Pre-configured patterns and commands
- 🎯 **Consistent quality**: Enforced best practices
- 📚 **Better documentation**: Comprehensive guides
- 🔄 **Easy onboarding**: New developers/agents learn patterns quickly
- 🛡️ **Fewer bugs**: Automated checks and validations
- 🌍 **i18n by default**: Never forget translations
- ♿ **Accessible**: Built-in accessibility checks
- 🎨 **Professional**: Industry-standard code quality

## 📜 License

This configuration setup is part of the React Portfolio Template and is released under the MIT License, just like the main project.

---

**Ready to build amazing portfolios with AI assistance!** 🚀

For more information, see the main [README.md](README.md) or explore the `.claude/` directory.
