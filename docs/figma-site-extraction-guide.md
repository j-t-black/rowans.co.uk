# Figma Site Extraction Guide

## 🎉 SUCCESS! We Found the Solution

Figma Sites publish as **real HTML/CSS/JS with a complete JSON data structure** that we can extract and use!

## Published Site Details

**URL:** https://story-method-86424349.figma.site
**Title:** MAIN SITE WIP 2026.3 (Copy)
**Design:** Rowans Bowling Venue - Finsbury Park, London

## What We Extracted

### 1. Complete JSON Data Structure
**Location:** `https://story-method-86424349.figma.site/_json/754b164f-37ab-46e2-a87e-6f781b90e96a/_index.json`

This JSON contains:
- **125 nodes** - All design elements with complete properties
- **Node hierarchy** - Parent-child relationships
- **Text content** - All copy with formatting
- **Layout data** - Positions, sizes, transforms
- **Styles** - Colors, fonts, effects, shadows
- **Assets** - Images with URLs and dimensions
- **Interactions** - Links and navigation
- **Breakpoints** - Mobile (407px) and Desktop (1920px+)

### 2. Design Specifications

**Typography:**
- Font: JetBrains Mono (Bold 700, Regular 400)
- Sizes: 8px to 96px
- Format: WOFF2 with unicode-range optimization

**Colors:**
- Background: Black (#000)
- Text: White (#fff)
- Accent: Red (#f00)
- Opacity layers: 0.5-0.9 for hierarchy

**Layout:**
- Single-page scrollable design (~7,300px height on desktop)
- Responsive: Mobile (407px) and Desktop (1920px+)
- Layout mode: Vertical scrolling
- Positioning: Mix of absolute and relative

### 3. Content Sections

**Main Sections Identified:**
1. Hero - "Iconic Venue in London's Finsbury Park"
2. Venue Features - 2 levels, 24 bowling lanes, 14 pool tables, 6 karaoke booths, 4 bars, garden, arcade
3. Party Organization - Large Groups, Kids, Corporate, Launch Parties
4. Audio/Music - Sound systems (Void Acoustics, Funktion One), Resident DJs
5. Food & Beverage - Frozen cocktails, Yucatan Tacos, Yard Sale Pizza
6. What's On - Events and line-ups
7. Visit Us - Location and contact

**Interactive Elements:**
- Navigation buttons: "menu", "book a lane"
- Internal links: /whats-on, /radio, /drinks-menu, /birthday-cake, /kids, /corporate, /merch

### 4. Image Assets

**Asset Format:** PNG images served from Figma's CDN
**Base URL:** `https://story-method-86424349.figma.site/`
**Example URLs:**
- `472352f56d314c2eebb826971af8163f2eea8c78.png` (85x84px)
- `030246a30cb8c670e3595aa0e85c5c7ce218b937.png` (1324x1309px)

All assets include:
- Exact dimensions
- Offset values
- Format specification

## Extraction Commands

### Download Full HTML Source
```bash
curl -s "https://story-method-86424349.figma.site" > figma-site-source.html
```

### Download JSON Data Structure
```bash
curl -s "https://story-method-86424349.figma.site/_json/754b164f-37ab-46e2-a87e-6f781b90e96a/_index.json" > figma-site-data.json
```

### Extract Text Content
```bash
jq '.nodeById | to_entries[] | select(.value.type == "TEXT") | {id: .key, name: .value.name, text: .value.characters}' figma-site-data.json
```

### Extract Assets
```bash
jq '.assets | to_entries[]' figma-site-data.json
```

### Extract Navigation Links
```bash
jq '.guidToUrl | to_entries[]' figma-site-data.json
```

### Get Node Count
```bash
jq '.nodeById | keys | length' figma-site-data.json
# Returns: 125 nodes
```

### Get Fonts
```bash
jq '.fonts' figma-site-data.json
```

### Get Site Settings
```bash
jq '.siteSettings' figma-site-data.json
```

## Implementation Strategy for Nuxt

### Phase 1: Structure
1. Parse JSON node hierarchy
2. Map Figma frames to Vue components
3. Create page layout structure

### Phase 2: Content
1. Extract all text nodes
2. Download and optimize images
3. Map content to components

### Phase 3: Styling
1. Convert Figma styles to Tailwind/CSS
2. Implement responsive breakpoints
3. Add typography system (JetBrains Mono)

### Phase 4: Interactivity
1. Implement navigation
2. Add scroll animations
3. Connect internal links
4. Add booking/menu functionality

## Key Insights

✅ **Figma Sites are fully extractable** - Complete design data in JSON
✅ **Pixel-perfect accuracy** - Exact positions, sizes, colors, typography
✅ **All assets accessible** - Direct URLs to images
✅ **Content is structured** - Easy to parse and implement
✅ **Responsive data included** - Multiple breakpoints defined

## Next Steps

1. ✅ Extract and save JSON data
2. ⏳ Parse JSON and create component structure
3. ⏳ Build Nuxt pages matching the design
4. ⏳ Implement responsive layouts
5. ⏳ Add interactions and animations
6. ⏳ Connect to backend/booking system

## Files Saved

- `/tmp/figma-site-source.html` - Full HTML source (64 lines, heavily minified)
- `/tmp/figma-site-data.json` - Complete JSON structure with all design data
