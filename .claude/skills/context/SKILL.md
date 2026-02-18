---
name: context
description: Display current context window usage and session information
disable-model-invocation: false
allowed-tools: Bash(ls, wc, du, find, jq), Read, Grep
---

# Context Window Monitor

Display current context usage, remaining buffer, and session details.

## What This Command Does

Shows:
- **Token usage**: Current tokens used out of 200k window
- **Remaining capacity**: How much space left before auto-compact
- **Session info**: Current session ID and project
- **Loaded files**: What context is currently loaded
- **Memory usage**: CLAUDE.md files, memory files, and auto-loaded context

## Workflow

When invoked with `/context`:

1. **Check current session details**
   - Project directory
   - Session ID (if available from `.claude/` metadata)

2. **Estimate context usage**
   - Count loaded CLAUDE.md files (global + project)
   - Count memory files loaded
   - Estimate from recent conversation history

3. **Show loaded context**
   - Global CLAUDE.md (`~/.claude/CLAUDE.md`)
   - Project CLAUDE.md (`./CLAUDE.md`)
   - Memory files (`~/.claude/projects/.../memory/`)
   - Git status
   - Recent commits

4. **Display warnings**
   - If context is >150k tokens (75% full)
   - If approaching auto-compact threshold
   - Suggest starting new session if needed

## Example Output

```
📊 Context Window Status
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tokens Used:      ~45,000 / 200,000 (22.5%)
Remaining:        ~155,000 tokens
Status:           ✅ Healthy

📁 Project Context
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Working Dir:      /Users/jtblack/dev/rowans-website-v2
Session:          Active

📚 Loaded Files
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Global CLAUDE.md       (~3k tokens)
✓ Project CLAUDE.md      (~6k tokens)
✓ Memory/MEMORY.md       (~2k tokens)
✓ Git status             (~1k tokens)
✓ Recent commits         (~500 tokens)

💡 Tips
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Context is healthy - plenty of room
• Consider starting new session at ~150k tokens
• Use /clear to reset if needed
```

## Implementation Notes

Since Opcode may not have access to internal token counters, this skill:
- **Estimates** token usage based on file sizes
- Uses rough approximation: ~4 chars = 1 token
- Counts loaded CLAUDE.md and memory files
- Shows what context is currently active

## Usage

```
/context
```

No arguments needed - displays current status immediately.
