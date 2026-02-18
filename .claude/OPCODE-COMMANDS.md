# Opcode Custom Commands

This file documents the custom commands added to Opcode for the Rowan's Website project.

## 📊 Available Commands

### 1. Context Monitor
**Icon:** 📊
**Model:** Haiku (fast & cheap)
**Purpose:** Display context window usage and session information

**What it does:**
- Shows token usage (current / 200k)
- Lists loaded CLAUDE.md files
- Displays memory files and git context
- Warns when context >75% full

**When to use:** Check context status periodically to avoid hitting limits

---

### 2. Figma Text Extract
**Icon:** 📝
**Model:** Haiku (fast & cheap)
**Purpose:** Extract exact text from Figma published site

**What it does:**
- Runs `node scripts/extract-figma-text.js`
- Parses JSON output
- Displays all text content sorted by position
- Helps verify exact wording matches

**When to use:** Before implementing any section to get exact copy

---

### 3. Visual Compare
**Icon:** 🔍
**Model:** Sonnet (better for visual analysis)
**Purpose:** Compare Figma design with implementation

**What it does:**
1. Captures Figma reference screenshot
2. Captures current implementation screenshot
3. Reads both images
4. Lists specific differences:
   - Layout & spacing
   - Colors & styling
   - Typography
   - Element positioning

**When to use:** After implementing a section to verify pixel-perfect match

---

### 4. Section Builder
**Icon:** 🏗️
**Model:** Sonnet (complex task)
**Purpose:** Build complete section from Figma design

**What it does:**
1. Extracts text from Figma
2. Captures Figma screenshot
3. Implements section in Vue/Nuxt
4. Uses Tailwind + custom styles
5. Verifies with screenshot comparison
6. Ensures responsive (mobile 407px, desktop 1920px+)

**When to use:** When building a new section from scratch

---

### 5. Quick Fix
**Icon:** ⚡
**Model:** Haiku (fast fixes)
**Purpose:** Make minimal, focused changes

**What it does:**
- Reads relevant files
- Makes precise edits
- Tests if applicable
- No over-engineering
- No unnecessary refactoring

**When to use:** Bug fixes, small tweaks, minor adjustments

---

## 🔧 How to Use

### In Opcode UI:
1. Click the command button in the sidebar
2. Or use the command palette
3. Select the appropriate custom command
4. The agent will execute with the pre-configured prompt

### Via Database:
Custom commands are stored in:
```
~/Library/Application Support/opcode.asterisk.so/agents.db
```

### Adding New Commands:
Use SQL to insert into the `agents` table:
```sql
INSERT INTO agents (name, icon, system_prompt, default_task, model, enable_file_read, enable_file_write, enable_network)
VALUES ('Name', '🎯', 'System prompt...', 'Default task', 'sonnet', 1, 1, 0);
```

---

## 📋 Command Settings

### Permissions:
- **File Read**: All commands enabled
- **File Write**: Only Section Builder, Visual Compare, Quick Fix
- **Network**: All disabled (not needed for this project)

### Models:
- **Haiku**: Fast, cheap - for simple tasks (Context, Text Extract, Quick Fix)
- **Sonnet**: Powerful - for complex tasks (Visual Compare, Section Builder)
- **Opus**: Not used (too expensive for these tasks)

---

## 🎯 Recommended Workflow

### For New Sections:
1. **Figma Text Extract** → Get exact copy
2. **Section Builder** → Implement the section
3. **Visual Compare** → Verify pixel-perfect match
4. Iterate until perfect

### For Bug Fixes:
1. **Quick Fix** → Fast, focused changes
2. Test manually
3. Done!

### For Monitoring:
1. **Context Monitor** → Check periodically
2. Start new session if >75% full

---

## 🚀 Future Commands to Add

Ideas for additional custom commands:
- **Page Builder** - Build entire page from Figma
- **Component Extractor** - Extract reusable components
- **Asset Optimizer** - Optimize images/assets
- **Test Runner** - Run visual regression tests
- **Deploy Helper** - Build and deploy workflow

---

**Last Updated**: February 2026
**Total Commands**: 5
**Location**: `~/Library/Application Support/opcode.asterisk.so/agents.db`
