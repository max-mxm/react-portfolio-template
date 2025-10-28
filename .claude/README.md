# Claude Code Configuration Guide

This directory contains all configuration files for optimizing Claude Code agent behavior on this React Portfolio project.

## 📁 File Structure

```
.claude/
├── README.md              # This file - guide to the configuration
├── settings.json          # Structured project settings for agents
├── context.md             # Project context, architecture, and how it runs
├── rules.md               # Coding standards and best practices
├── prompts.md             # Reusable prompt snippets for common tasks
├── project_context.md     # Detailed project overview (legacy)
└── commands/              # Custom slash commands
    ├── analyze-component.md
    ├── check-i18n.md
    ├── create-article.md
    ├── optimize-build.md
    ├── review-article.md
    └── update-content.md
```

## 🎯 Purpose of Each File

### CLAUDE.md (Root Level)
**Location**: `/CLAUDE.md`
**Purpose**: Immutable system rules that Claude Code follows strictly
**Contains**:
- Development commands
- Project structure rules
- Coding standards
- Data architecture
- Testing workflow
- Common patterns

**When Claude reads this**: Automatically on project load
**Priority**: HIGHEST - treated as system-level instructions

### settings.json
**Location**: `.claude/settings.json`
**Purpose**: Structured configuration for agent behavior
**Contains**:
- Project metadata
- Agent behavior settings
- Code style preferences
- Testing requirements
- i18n configuration
- Custom rules

**Use case**: Define project-wide settings and constraints

### context.md
**Location**: `.claude/context.md`
**Purpose**: Deep project understanding
**Contains**:
- What the project is and why
- Architecture patterns
- Tech stack rationale
- How it runs (dev/build/deploy)
- Performance characteristics
- Known limitations

**Use case**: Help agents understand the "why" behind decisions

### rules.md
**Location**: `.claude/rules.md`
**Purpose**: Enforceable coding standards
**Contains**:
- React best practices
- Component patterns (✅ DO / ❌ DON'T)
- File organization
- Styling rules
- Data handling
- Performance rules
- Git commit standards

**Use case**: Ensure consistent code quality across all agent-generated code

### prompts.md
**Location**: `.claude/prompts.md`
**Purpose**: Reusable prompt templates
**Contains**:
- Component analysis prompts
- Testing checklists
- Debugging workflows
- Feature implementation guides
- Code review prompts
- Quick snippets

**Use case**: Copy-paste starting points for common tasks

### commands/ (Slash Commands)
**Location**: `.claude/commands/*.md`
**Purpose**: Custom slash commands for quick actions
**Available commands**:
- `/analyze-component` - Deep dive into a component
- `/check-i18n` - Verify translation completeness
- `/create-article` - Guide for new article types
- `/optimize-build` - Build optimization analysis
- `/review-article` - Examine article + data consistency
- `/update-content` - Help modify JSON content

**How to use**: Type `/` in Claude Code to see all commands

## 🚀 Quick Start for Agents

### First Time in This Project
1. Read `CLAUDE.md` (automatically loaded)
2. Scan `context.md` to understand the project
3. Review `rules.md` for coding standards
4. Familiarize with available slash commands

### Before Writing Code
1. ✅ Search for existing similar code (MANDATORY)
2. ✅ Check `rules.md` for relevant patterns
3. ✅ Verify i18n requirements if adding UI text
4. ✅ Follow component structure from `CLAUDE.md`

### Before Committing
1. ✅ Run ESLint: `npm run lint`
2. ✅ Check for console.log statements
3. ✅ Verify PropTypes are defined
4. ✅ Test on mobile and desktop
5. ✅ Test dark and light themes
6. ✅ Follow commit message format from `rules.md`

## 📚 Common Workflows

### Adding New Feature
```bash
# 1. Use slash command for guidance
/create-article

# 2. Or ask Claude with context
"Create a new article type for [feature], following the existing patterns in ArticlePortfolio"

# 3. Agent will:
#    - Search existing article components
#    - Follow patterns from CLAUDE.md
#    - Create component + JSON data
#    - Add i18n strings
#    - Test responsiveness
```

### Debugging Issue
```bash
# 1. Use debugging prompt from prompts.md
# 2. Or simply describe the issue
"The portfolio filter isn't working on mobile"

# Agent will:
#    - Check relevant components
#    - Use React DevTools approach
#    - Follow debugging workflow from context.md
#    - Propose fix following rules.md
```

### Reviewing Code
```bash
# 1. Use pre-commit review prompt
"Review my changes before committing"

# Agent will check:
#    - ESLint compliance
#    - PropTypes presence
#    - i18n usage
#    - Import order (rules.md)
#    - Best practices (rules.md)
```

## 🎨 Customization

### For Your Team
1. **Modify settings.json** to match your preferences
2. **Add team-specific rules** to rules.md
3. **Create custom slash commands** in commands/
4. **Update context.md** with team decisions

### For New Article Types
1. Document the pattern in `CLAUDE.md`
2. Add examples to `prompts.md`
3. Create a slash command if frequently used

### For New Dependencies
1. Update `context.md` with rationale
2. Add usage patterns to `rules.md`
3. Document in `CLAUDE.md` if core dependency

## 🔧 Settings Explained

### agentBehavior
- `alwaysSearchBeforeCreating`: Force search before creating files
- `preferExistingPatterns`: Reuse existing code patterns
- `enforceI18n`: Require translations for all strings
- `enforceAccessibility`: Check ARIA and semantic HTML

### codeStyle
- Defines component style (functional vs class)
- Import organization rules
- Formatting preferences

### testing
- Required viewports for testing
- Themes to test
- Languages to verify

### performance
- Bundle size limits
- Warning thresholds
- Optimization requirements

## 📖 Best Practices for Agents

### DO
✅ Always read CLAUDE.md rules before coding
✅ Search existing code before creating new files
✅ Follow the exact patterns in rules.md
✅ Add translations for all user-facing text
✅ Test responsiveness and themes
✅ Use prompts.md as templates

### DON'T
❌ Create files without searching first
❌ Hardcode strings (use i18n)
❌ Use class components (use functional)
❌ Skip PropTypes validation
❌ Ignore accessibility requirements
❌ Commit without testing

## 🆘 Troubleshooting

### "I can't find the right pattern"
→ Check `prompts.md` for similar use cases
→ Search existing components with similar functionality
→ Review `context.md` for architecture guidance

### "I'm not sure about the coding style"
→ Refer to `rules.md` DO/DON'T examples
→ Check `settings.json` for code style settings
→ Look at existing components for patterns

### "How do I test this properly?"
→ Check `testing` section in `settings.json`
→ Use testing prompts from `prompts.md`
→ Follow testing workflow in `CLAUDE.md`

## 📝 Maintenance

### Keeping Configuration Up-to-Date

**When to update**:
- New patterns emerge → Add to rules.md
- Architecture changes → Update context.md
- New tools added → Update CLAUDE.md
- Common tasks identified → Add slash command

**How to update**:
1. Modify the appropriate file
2. Test with Claude Code
3. Commit with description
4. Share with team

## 🔗 External Resources

- [Claude Code Documentation](https://docs.claude.com/en/docs/claude-code)
- [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)
- [React Portfolio Template Repo](https://github.com/ryanbalieiro/react-portfolio-template)

---

**Remember**: These files work together to create a comprehensive understanding of the project for all Claude Code agents. Keep them updated as the project evolves!
