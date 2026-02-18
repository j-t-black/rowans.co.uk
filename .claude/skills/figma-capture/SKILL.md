---
name: figma-capture
description: Capture high-resolution screenshot from Figma published site
disable-model-invocation: true
argument-hint: [section-name] [--4k] [--zoom=2]
allowed-tools: Bash(node *)
---

# Capture Figma Reference Screenshot

Capture screenshots from the Figma published site for visual comparison.

## Usage

Basic capture:
```bash
node scripts/capture-figma-reference.js $ARGUMENTS
```

## Available Sections

- `hero` - Hero section at top
- `welcome` - Welcome to Rowans section
- `party` - Organise your party section
- `eats` - Eats + Drinks section
- `audio` - Audio section
- `visit` - Visit Us section
- `location` - Location section
- `full-page` - Entire page (default)

## Options

- `--high-res` or `--4k` - Capture at 4K resolution for better quality
- `--zoom=2` - Capture at 2x zoom for sharper text (also: `--zoom=1.5`)

## Examples

```bash
# Standard capture of welcome section
node scripts/capture-figma-reference.js welcome

# High-res capture with zoom for text verification
node scripts/capture-figma-reference.js welcome --4k --zoom=2

# Full page capture
node scripts/capture-figma-reference.js full-page
```

## Output

Screenshots are saved to `tests/screenshots/figma-references/` with timestamped filenames to prevent cache issues.
