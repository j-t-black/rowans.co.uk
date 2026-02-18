---
name: figma-text
description: Extract exact text content from Figma published site for verification
disable-model-invocation: true
allowed-tools: Bash(node *)
---

# Extract Figma Text

Extract all text content from the Figma published site to see exact wording.

## Usage

Run the text extraction script:

```bash
node scripts/extract-figma-text.js
```

This outputs all text from the Figma site sorted by vertical position on the page. Use this to:
- Verify exact wording matches Figma
- Catch differences like "and" vs "+"
- See section headings and content hierarchy

## Output

The script displays text in markdown format with section breaks for large gaps, making it easy to compare against our implementation.
