# Workflow Tools Documentation

## 🎯 Purpose

Tools to extract exact content from Figma and verify implementation accuracy.

---

## 📝 Text Extraction Tool

Extract all text content from the Figma published site to see exact wording.

### Usage:
```bash
node scripts/extract-figma-text.js > figma-content.md
```

### Output:
- Markdown formatted text content
- Sorted by vertical position on page
- Includes all headings, paragraphs, and button text

### Example:
```bash
node scripts/extract-figma-text.js > /tmp/figma-text.md
cat /tmp/figma-text.md
```

---

## 📸 Reference Screenshot Capture Tool

Capture screenshots from Figma published site for visual comparison.

### Basic Usage:
```bash
# Full page capture
node scripts/capture-figma-reference.js full-page

# Section-specific capture
node scripts/capture-figma-reference.js welcome
node scripts/capture-figma-reference.js hero
node scripts/capture-figma-reference.js eats
```

### Available Sections:
- `hero` - Hero section at top
- `welcome` - Welcome to Rowans section
- `party` - Organise your party section
- `eats` - Eats + Drinks section
- `audio` - Audio section
- `visit` - Visit Us section
- `location` - Location section
- `full-page` - Entire page

### Advanced Options:

**High Resolution (4K):**
```bash
node scripts/capture-figma-reference.js welcome --high-res
# or
node scripts/capture-figma-reference.js welcome --4k
```

**Zoom for Sharper Text:**
```bash
node scripts/capture-figma-reference.js welcome --zoom=2
node scripts/capture-figma-reference.js audio --zoom=1.5
```

**Combined:**
```bash
node scripts/capture-figma-reference.js eats --high-res --zoom=2
```

### Output Location:
`tests/screenshots/figma-references/`

### Filename Format:
`figma-{section}-{resolution}-{zoom}-{timestamp}.png`

Example: `figma-welcome-4k-2x-1771283722.png`

---

## 🔄 Typical Workflow

### 1. Extract Text Content
```bash
node scripts/extract-figma-text.js > /tmp/figma-text.md
```
Review the text to see exact wording from Figma.

### 2. Capture Reference Screenshots
```bash
# Capture the section you're working on
node scripts/capture-figma-reference.js welcome

# For detailed text comparison, use high-res + zoom
node scripts/capture-figma-reference.js welcome --high-res --zoom=2
```

### 3. Implement in Code
Update your Vue components with the exact text and styling.

### 4. Verify Your Implementation
```bash
./scripts/verify-section.sh section-name
```

### 5. Compare
- Read your screenshot: `tests/screenshots/verify/section-name-{timestamp}.png`
- Read Figma reference: `tests/screenshots/figma-references/figma-section-{timestamp}.png`
- Compare visually

---

## 💡 Tips

- **Always extract text first** - It's faster than trying to read from screenshots
- **Use high-res + zoom** when text is hard to read in standard captures
- **Capture sections individually** when working on specific areas
- **Timestamps prevent caching** - Always get fresh captures
- All tools output to timestamped files so you never read stale data

---

## 🚀 Quick Commands

```bash
# Get exact text from Figma
node scripts/extract-figma-text.js > figma-text.md

# Capture specific section with readable text
node scripts/capture-figma-reference.js welcome --zoom=2

# Verify your implementation
./scripts/verify-section.sh welcome-section

# Compare (read both screenshots)
```

---

## 📂 File Locations

- **Scripts:** `scripts/`
  - `extract-figma-text.js` - Text extraction
  - `capture-figma-reference.js` - Screenshot capture
  - `verify-section.sh` - Implementation verification

- **Output:**
  - Figma references: `tests/screenshots/figma-references/`
  - Your implementation: `tests/screenshots/verify/`

---

## ✅ Success Example

**Problem:** Text doesn't match Figma

**Solution:**
1. Run `node scripts/extract-figma-text.js > /tmp/text.md`
2. See exact text: "Intelligent Lighting and video" (not "+")
3. Update code to match exactly
4. Verify with `./scripts/verify-section.sh`
5. ✅ Perfect match!
