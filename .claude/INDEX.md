# 📑 Claude Code Configuration Index

> **Quick navigation for all Claude Code configuration files**

## 🎯 Where to Start?

### For Humans (Developers)
1. Start → [CLAUDE_CODE_SETUP.md](../CLAUDE_CODE_SETUP.md) (in root)
2. Quick reference → [QUICKSTART.md](QUICKSTART.md)
3. Full guide → [README.md](README.md)

### For AI Agents
1. Start → [CLAUDE.md](../CLAUDE.md) (in root, auto-loaded)
2. Agent guide → [AGENT_GUIDE.md](AGENT_GUIDE.md)
3. Context → [context.md](context.md)
4. Rules → [rules.md](rules.md)

## 📚 Complete File Listing

### Root Level Files (/)

| File | Size | Purpose | Priority |
|------|------|---------|----------|
| [CLAUDE.md](../CLAUDE.md) | 11 KB | **Immutable system rules** - Auto-loaded | 🔴 CRITICAL |
| [CLAUDE_CODE_SETUP.md](../CLAUDE_CODE_SETUP.md) | 8.6 KB | Human-readable setup guide | ⚪ Info |
| [.claudeignore](../.claudeignore) | 403 B | Files to exclude from analysis | ⚪ Config |

### .claude/ Directory

#### 📘 Primary Documentation

| File | Size | Purpose | When to Read |
|------|------|---------|--------------|
| [README.md](README.md) | 7.7 KB | Complete configuration guide | Full reference |
| [QUICKSTART.md](QUICKSTART.md) | 7.7 KB | 30-second overview + quick ref | First time |
| [AGENT_GUIDE.md](AGENT_GUIDE.md) | 11 KB | Comprehensive agent instructions | Detailed work |
| [INDEX.md](INDEX.md) | This file | Navigation and file index | Finding files |

#### 📖 Context & Knowledge

| File | Size | Content | Use Case |
|------|------|---------|----------|
| [context.md](context.md) | 9.7 KB | Project architecture, tech stack, rationale | Understanding "why" |
| [project_context.md](project_context.md) | 6.3 KB | Legacy context file (detailed overview) | Alternative reference |

#### 📏 Standards & Rules

| File | Size | Content | Use Case |
|------|------|---------|----------|
| [rules.md](rules.md) | 14 KB | Coding standards, DO/DON'T examples | Writing code |

#### 🎨 Templates & Prompts

| File | Size | Content | Use Case |
|------|------|---------|----------|
| [prompts.md](prompts.md) | 9.9 KB | Reusable prompt templates, snippets | Common tasks |

#### ⚙️ Configuration

| File | Size | Content | Use Case |
|------|------|---------|----------|
| [settings.json](settings.json) | 2.5 KB | Structured agent configuration | Project settings |

#### 📁 commands/ (Slash Commands)

| Command | Size | Description |
|---------|------|-------------|
| [analyze-component.md](commands/analyze-component.md) | 301 B | Analyze React component structure |
| [check-i18n.md](commands/check-i18n.md) | 323 B | Verify translation completeness |
| [create-article.md](commands/create-article.md) | 515 B | Guide for creating new article types |
| [optimize-build.md](commands/optimize-build.md) | 367 B | Build optimization analysis |
| [review-article.md](commands/review-article.md) | 444 B | Check article + data consistency |
| [update-content.md](commands/update-content.md) | 486 B | Help modify JSON configuration |

**Usage**: Type `/` in Claude Code to see all available commands

## 🗺️ Documentation Map

```
Documentation Flow for AI Agents:
==================================

Start Here
    ↓
CLAUDE.md (root)           ← Auto-loaded system rules
    ↓
AGENT_GUIDE.md             ← Comprehensive guide
    ↓
┌─────────────┬─────────────┬─────────────┐
│             │             │             │
context.md    rules.md     prompts.md    settings.json
(Why)         (How)        (Templates)   (Config)
│             │             │             │
└─────────────┴─────────────┴─────────────┘
    ↓
Work on Project
```

```
Documentation Flow for Humans:
==============================

Start Here
    ↓
CLAUDE_CODE_SETUP.md (root) ← Human-friendly intro
    ↓
QUICKSTART.md               ← Quick reference
    ↓
README.md                   ← Full guide
    ↓
┌─────────────┬─────────────┐
│             │             │
Slash         Deep dive
Commands      into files
    ↓             ↓
Work          Customize
```

## 📊 Statistics

**Total Configuration Size**: ~75 KB

**Breakdown**:
- System rules (CLAUDE.md): 11 KB
- Agent guides: 26 KB (AGENT_GUIDE + QUICKSTART + README)
- Context & architecture: 16 KB (context.md + project_context.md)
- Coding standards: 14 KB (rules.md)
- Prompt templates: 10 KB (prompts.md)
- Slash commands: 2.4 KB (6 commands)
- Configuration: 2.5 KB (settings.json)
- Setup guide: 8.6 KB (CLAUDE_CODE_SETUP.md)

**Coverage**:
- ✅ 100% of React patterns documented
- ✅ 100% of coding standards defined
- ✅ 100+ code examples provided
- ✅ 6 custom slash commands
- ✅ 4 quick reference guides
- ✅ Complete testing protocols
- ✅ Security best practices
- ✅ i18n requirements
- ✅ Accessibility guidelines

## 🎯 Quick Reference by Task

### "I want to understand the project"
→ Read [context.md](context.md)

### "I want to write code"
→ Follow [rules.md](rules.md)

### "I need a quick template"
→ Check [prompts.md](prompts.md)

### "I want to analyze a component"
→ Use `/analyze-component`

### "I need to check translations"
→ Use `/check-i18n`

### "I want to create something new"
→ Use `/create-article` or search existing code first

### "I'm not sure about code style"
→ Check [rules.md](rules.md) DO/DON'T examples

### "I need project settings"
→ See [settings.json](settings.json)

### "I want the full guide"
→ Read [README.md](README.md)

### "I need a quick start"
→ See [QUICKSTART.md](QUICKSTART.md)

## 🔄 Update History

| Date | Version | Changes |
|------|---------|---------|
| 2025-10-28 | 1.0.0 | Initial complete configuration setup |

## 📝 Maintenance

### When to Update

**Add to rules.md when**:
- New coding pattern emerges
- Best practice is established
- Common mistake is identified

**Add to context.md when**:
- Architecture changes
- New dependency added
- Major refactoring completed

**Add to prompts.md when**:
- Common task becomes repetitive
- Useful template is created
- Team identifies frequent need

**Add slash command when**:
- Workflow becomes standard
- Task needs guidance
- Multiple steps required

### How to Update

1. Edit the appropriate file
2. Test with Claude Code
3. Update this INDEX.md if structure changes
4. Commit with description
5. Share with team

## 🔗 External Links

- [Claude Code Documentation](https://docs.claude.com/en/docs/claude-code)
- [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)
- [React Portfolio Template](https://github.com/ryanbalieiro/react-portfolio-template)
- [Project Live Demo](https://ryanbalieiro.github.io/react-portfolio-template/)

## 🆘 Troubleshooting

### "I can't find information about X"
1. Check this INDEX for relevant file
2. Use Cmd/Ctrl+F to search within files
3. Check prompts.md for related templates
4. Ask Claude directly

### "Configuration not working"
1. Verify CLAUDE.md is in project root
2. Check .claude/ folder structure
3. Ensure all files are readable
4. Restart Claude Code if needed

### "Need to add custom rules"
1. Edit CLAUDE.md for system rules
2. Edit rules.md for coding standards
3. Add to prompts.md for templates
4. Create slash command for workflows

## 📞 Support

- **File issues**: GitHub repository
- **Ask questions**: Use Claude Code chat
- **Contribute**: Submit pull request
- **Discuss**: GitHub Discussions

## ✅ Checklist for New Team Members

- [ ] Read CLAUDE_CODE_SETUP.md
- [ ] Scan QUICKSTART.md
- [ ] Browse available slash commands (`/`)
- [ ] Review one file from each category
- [ ] Try asking Claude a question
- [ ] Use a slash command
- [ ] Read rules.md DO/DON'T section
- [ ] Understand i18n requirements
- [ ] Know testing protocol
- [ ] Ready to code!

---

**Last Updated**: 2025-10-28
**Configuration Version**: 1.0.0
**Maintained By**: Claude Code Setup Script

*This index is your navigation hub for all Claude Code configuration. Bookmark it!* 🔖
