# Rowan's Website v2 - Project Context

## Project Overview

**What**: Rebuild of Rowan's bowling venue website in Finsbury Park, London
**Stack**: Nuxt 4, NuxtUI, TypeScript, Playwright
**Goal**: Pixel-perfect implementation from Figma designs
**Status**: Home page in progress, ~8 additional pages to build

## Tech Stack Details

### Framework & Tools
- **Nuxt 4** - Latest Vue meta-framework
- **NuxtUI** - Component library built on Radix Vue
- **TypeScript** - Strict mode enabled
- **Vite** - Build tool (via Nuxt)
- **Bun** - Package manager (prefer over npm/yarn)

### Testing
- **Playwright** - E2E and visual regression tests
- **Visual Testing**: Pixel-perfect comparison with Figma designs
- Screenshot directory: `tests/screenshots/`

### Styling
- **Tailwind CSS** - Utility-first via NuxtUI
- **Custom CSS** - Inline styles for exact pixel matching
- **Fonts**:
  - JetBrains Mono (monospace)
  - System fonts for body text
- **Colors**: Follow Figma design system

## Figma Workflow (CRITICAL)

### Source Design
- **Figma Site URL**: https://story-method-86424349.figma.site
- **JSON Data**: `/_json/754b164f-37ab-46e2-a87e-6f781b90e96a/_index.json`
- **Type**: Published Figma Site (not .fig file)

### MCP Tools Available
The Figma MCP server is configured and working:
- `mcp__figma__get_design_context` - Extract code from Figma nodes
- `mcp__figma__get_screenshot` - Capture design screenshots
- `mcp__figma__get_metadata` - Get node structure
- `mcp__figma__get_variable_defs` - Extract design tokens

**Note**: These work with Figma Design files. For our Figma Site, use custom scripts.

### Custom Scripts (Preferred for This Project)

**Extract Text Content:**
```bash
node scripts/extract-figma-text.js > figma-text.md
```

**Capture High-Res Screenshots:**
```bash
node scripts/capture-figma-reference.js [section] [options]
# Example: node scripts/capture-figma-reference.js welcome --4k --zoom=2
```

**Verify Implementation:**
```bash
./scripts/verify-section.sh section-name
```

**Available sections**: hero, welcome, party, eats, audio, visit, location, full-page

### Custom Skills
These slash commands are available:
- `/figma-text` - Extract text from Figma
- `/figma-capture [section]` - Capture Figma screenshots
- `/verify [section]` - Screenshot current implementation
- `/compare [section]` - Side-by-side comparison

## Implementation Guidelines

### Component Structure
```
app/
├── pages/
│   ├── index.vue          # Home page
│   ├── whats-on.vue       # Events
│   ├── groups.vue         # Group bookings
│   └── [page].vue         # Other pages
├── components/
│   └── (minimal - prefer inline)
└── assets/
    └── images/            # Optimized images
```

### Responsive Design Rules
- **Mobile**: 407px breakpoint
- **Desktop**: 1920px+
- Font sizes scale: Mobile 20px → Desktop 36px (hero)
- Use Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`

### Visual Verification Workflow

**ALWAYS follow this pattern for UI work:**

1. **Extract text** from Figma to verify exact wording
2. **Capture reference** screenshot from Figma
3. **Implement** the section in Vue
4. **Capture current** implementation screenshot
5. **Compare** side-by-side for pixel accuracy
6. **Iterate** until perfect match

**Verification Script Pattern:**
```bash
# Generate timestamped screenshot (no cache issues)
./scripts/verify-section.sh homepage-check
```

Screenshots are saved to `tests/screenshots/verify/` with timestamps.

## Pages & Status

### Home Page ✅ Complete
- Hero, Venue Features, Party, Eats+Drinks, Audio, Visit Us, Location, Footer

### Navigation ✅ Complete
- `app/components/BurgerNav.vue` - full-page overlay, 14 items, Figma-accurate
- Burger button wired in `index.vue`
- ⚠️ TODO: Make available on all pages via global layout

### Pages - Full Content ✅
- `/whats-on`, `/radio`, `/djs`, `/policies`, `/groups`, `/kids`, `/corporate`, `/launch`, `/birthday-cakes`, `/drinks-menu`, `/yucatan`, `/pizza`

### Pages - Stubs (need content) 🚧
- `/about`, `/karaoke`, `/merch`, `/contact`

### Pages - Missing ❌
- `/eats-drinks` (Figma has this as a hub page)

### Remaining Pages 📋
- What's On
- Groups
- Kids Parties
- Drinks Menu
- Yucatan (restaurant)
- Pizza
- Birthday Cakes
- DJs
- Policies
- Radio
- Launch
- Corporate

## Code Patterns

### Page Component Structure
```vue
<template>
  <div class="page-container">
    <!-- Sections here -->
  </div>
</template>

<script setup lang="ts">
// Minimal logic, composition API
</script>

<style scoped>
/* Only when Tailwind can't achieve pixel-perfect match */
</style>
```

### Button Pattern (Circular)
- Use actual image assets from `public/` directory
- Fixed size (match Figma exactly)
- Clickable with cursor pointer
- Links to appropriate pages/actions

### Responsive Font Sizing
```vue
<h1 class="text-[20px] md:text-[36px]">
  Heading Text
</h1>
```

### Background Images
```vue
<div
  class="h-screen bg-cover bg-center"
  :style="{ backgroundImage: 'url(/images/hero-bg.jpg)' }"
>
```

## Testing Commands

### Run Dev Server
```bash
bun run dev
```

### Run Visual Tests
```bash
bun run test:visual
```

### Run All Tests
```bash
bun run test
```

### View Test Report
```bash
bunx playwright show-report
```

## Git Workflow

### Commit Strategy
- Commit after each complete section
- Message format: "Build [section-name] section with [key features]"
- Example: "Build hero section with responsive layout and circular buttons"

### What NOT to Commit
- `node_modules/`
- `.nuxt/`
- `playwright-report/`
- `test-results/`
- Temporary screenshots in `tests/screenshots/verify/`

### Branch Strategy
- `main` - production-ready code
- Feature branches for experimental work (if needed)

## Common Tasks

### Add New Page
1. Create `app/pages/[page-name].vue`
2. Extract design from Figma
3. Implement with visual verification workflow
4. Add navigation link
5. Test responsive behavior

### Fix Visual Mismatch
1. Capture fresh Figma reference
2. Capture current implementation
3. Compare side-by-side
4. Identify specific differences
5. Adjust CSS/layout
6. Re-verify

### Debug Responsive Issues
1. Test in browser DevTools
2. Check breakpoint values
3. Verify Tailwind classes
4. Use `verify-section.sh` at different viewport sizes

## Key Files

### Documentation
- `docs/figma-site-extraction-guide.md` - Figma JSON extraction
- `docs/workflow-tools.md` - Custom scripts documentation
- `.claude/README.md` - Skills and hooks documentation

### Scripts
- `scripts/extract-figma-text.js` - Text extraction
- `scripts/capture-figma-reference.js` - Screenshot capture
- `scripts/verify-section.sh` - Implementation screenshots

### Configuration
- `nuxt.config.ts` - Nuxt configuration
- `tailwind.config.ts` - Tailwind customization
- `playwright.config.ts` - Test configuration
- `.claude/hooks.json` - Build hooks

### Memory
- `~/.claude/projects/.../memory/MEMORY.md` - Project learnings
- `~/.claude/projects/.../memory/next-session.md` - TODOs

## Important Notes

### DO
- ✅ Use visual verification for every UI change
- ✅ Match Figma designs pixel-perfectly
- ✅ Test responsive behavior (407px and 1920px+)
- ✅ Use exact text from Figma extraction
- ✅ Optimize images before committing
- ✅ Run tests before claiming completion

### DON'T
- ❌ Guess layouts - always reference Figma
- ❌ Use cached screenshots - generate fresh ones
- ❌ Skip responsive testing
- ❌ Add features not in designs
- ❌ Create unnecessary components
- ❌ Over-engineer solutions

## Priority for Next Session

**Current Focus**: Complete home page sections before moving to other pages

**Workflow Automation Goal**: Explore creating automated Figma → Nuxt conversion process using:
- Claude Code agents/skills
- Figma MCP tools
- Custom scripts
- AI-assisted code generation

This could dramatically speed up the remaining 12 pages.

---

**Last Updated**: February 2026
**Project Phase**: Home page implementation
**Next Milestone**: Complete all home page sections with pixel-perfect accuracy
