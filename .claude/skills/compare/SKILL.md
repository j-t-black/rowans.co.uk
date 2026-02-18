---
name: compare
description: Compare implementation with Figma by capturing and reading both screenshots
disable-model-invocation: false
argument-hint: [section-name]
allowed-tools: Bash(node *, ./scripts/*)
---

# Compare Implementation with Figma

Capture screenshots of both Figma reference and current implementation, then display them for side-by-side comparison.

## Workflow

When invoked with a section name (e.g., `/compare welcome`):

1. **Capture Figma reference:**
   ```bash
   node scripts/capture-figma-reference.js $ARGUMENTS
   ```

2. **Capture current implementation:**
   ```bash
   ./scripts/verify-section.sh $ARGUMENTS-check
   ```

3. **Read both screenshots** to compare visually

4. **Analyze differences:**
   - Text content matches
   - Spacing and layout
   - Colors and styling
   - Typography

5. **Report findings** with specific differences noted

## Example Usage

```
/compare welcome
```

This will:
- Capture the welcome section from Figma
- Capture the current implementation
- Display both for comparison
- List any differences found
