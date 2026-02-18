# Claude Code Skills & Configuration

This directory contains custom skills and hooks for the Rowan's Website project.

## 🎯 Available Skills (Slash Commands)

### `/figma-text`
Extract exact text content from Figma published site.

**Usage:** `/figma-text`

Extracts all text from Figma site sorted by position. Use this to verify exact wording matches.

---

### `/figma-capture [section] [options]`
Capture high-resolution screenshots from Figma.

**Usage:**
- `/figma-capture welcome`
- `/figma-capture welcome --4k --zoom=2`

**Sections:** hero, welcome, party, eats, audio, visit, location, full-page

**Options:**
- `--4k` or `--high-res` - 4K resolution
- `--zoom=2` - 2x zoom for sharper text

---

### `/verify [section-name]`
Take screenshot of current implementation.

**Usage:** `/verify homepage-current`

Captures timestamped screenshot of your implementation for comparison.

---

### `/compare [section]`
Compare implementation with Figma side-by-side.

**Usage:** `/compare welcome`

Automatically captures both Figma reference and current implementation, then analyzes differences.

---

### `/context`
Display current context window usage and session information.

**Usage:** `/context`

Shows token usage, remaining capacity, loaded files, and session details. Helps monitor your 200k context window and know when to start a new session.

**Output includes:**
- Token usage estimate (current / 200k)
- Loaded CLAUDE.md files
- Memory files in context
- Git status and recent commits
- Health warnings if context is >75% full

---

## 🪝 Hooks

Hooks are automated commands that run on specific events.

**Location:** `.claude/hooks.json`

**Current Hooks:**
- `afterEdit` - Logs when files are edited
- `beforeCommit` - Runs linter before commits (disabled by default)

---

## 📝 Memory Files

- `MEMORY.md` - Project memory and learnings (in `~/.claude/projects/...`)
- `CLAUDE.md` - Project context (if created)

---

## 🔧 Troubleshooting

### Skills not working?

**In Opcode:**

Opcode may not support Claude Code's native skills system. You have two options:

1. **Use the scripts directly:**
   ```bash
   node scripts/extract-figma-text.js
   node scripts/capture-figma-reference.js welcome --4k
   ./scripts/verify-section.sh homepage
   ```

2. **Switch to official Claude Code CLI:**
   ```bash
   # Install Claude Code
   curl -fsSL https://claude.ai/install.sh | bash

   # Then skills will work natively
   cd /path/to/project
   claude
   /figma-text
   ```

**Check if skills are loaded:**

In a Claude Code session, try:
```
What skills are available?
```

If skills don't appear, check:
- Skills are in `.claude/skills/<skill-name>/SKILL.md`
- YAML frontmatter is valid
- File has proper permissions

### Hooks not triggering?

Hooks require Claude Code's native environment. They may not work in Opcode.

To test hooks:
```bash
# Trigger afterEdit hook manually
echo "test" > test.txt
```

---

## 📚 Documentation

- **Workflow Tools:** `docs/workflow-tools.md`
- **Opcode Commands:** `.claude/OPCODE-COMMANDS.md` (custom commands for Opcode)
- **Skills Guide:** https://code.claude.com/docs/en/skills
- **Hooks Guide:** https://code.claude.com/docs/en/hooks

---

## 🚀 Quick Start

**If using Claude Code CLI:**
```bash
cd /path/to/rowans-website-v2
claude

# Use skills
/figma-text
/figma-capture welcome --zoom=2
/verify homepage
/compare welcome
/context
```

**If using Opcode (skills may not work):**

Use the scripts directly or ask Claude to run them:
```
Extract text from Figma
Capture welcome section from Figma with high resolution
Verify homepage implementation
```

Claude will use the Bash tool to run the underlying scripts.
