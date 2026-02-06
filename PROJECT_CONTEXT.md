# Rowan's Website Project Context

## Project Overview
Website for Rowan's - a bowling alley and nightclub in London
Domain: rowans.co.uk

## Tech Stack
- **Framework**: Nuxt 4 (latest)
- **UI Library**: NuxtUI (latest)
- **Language**: TypeScript
- **Deployment**: Vercel
- **Design Source**: Figma API
- **Best Practices**: Reusable components, DRY code

## Current Status
- Project initialized: 2026-02-05
- Git repo created and pushed to GitHub
- Nuxt 4 + NuxtUI + TypeScript fully configured
- Figma API connected and working
- **Automated Figma→Nuxt Pipeline COMPLETE** (3-stage system)
- Home page fully built with all sections
- Layout system complete (header, footer, default layout)
- Reusable section components built (Hero, Features, CtaGrid, ContentImage)
- 14 page templates auto-generated from Figma data
- Design tokens extracted and integrated into Tailwind config
- Knowledge base system set up for offline docs

## Pages to Build
1. **Home** - Main landing page
2. **Eats & Drinks** - Food and beverage menu/info
3. **Groups** - Group booking information
4. **Corporate** - Corporate events
5. **Policies** - Venue policies
6. **Rowan's Radio** - Radio/music feature
7. **Book Karaoke** - Karaoke booking (to be built)
8. **Book Bowling Lane** - External link to booking system

## Design Assets
- Figma Design File: https://www.figma.com/design/P0kpMV8kbGuwNJmuoS3Xxy/rowans-design
- Figma File Key: P0kpMV8kbGuwNJmuoS3Xxy
- Design includes Desktop and Mobile layouts
- Assets in /design-assets folder (hero images, logos, videos, etc.)

## Future Integration
- Later: Pull data from APIs for schedule/events web apps
- Ongoing: Site will be maintained and features added after deployment

## Important Decisions
- Using Figma API to sync design (regular Design file, not Site file)
- Need to reconcile page names with menu names
- Book Bowling Lane is external link only

## Completed Work

### Figma→Nuxt Automated Pipeline
**3-Stage System** (`npm run figma:extract`, `figma:match-assets`, `figma:generate-code`):
1. **extract-figma-data.js** - Extracts design tokens, component structure, text content, and image references from Figma API
2. **match-assets.js** - Maps Figma image IDs to local design-asset files using fuzzy matching
3. **generate-code.js** - Generates Vue component templates and Tailwind config from extracted data

**Output**:
- `figma-data/` - 5 JSON files with extracted design data (design-tokens.json, component-structure.json, text-content.json, image-references.json, asset-matches.json)
- `tailwind.config.generated.js` - Auto-generated Tailwind config with design tokens
- `generated-components/` - 14 auto-generated page templates (skeleton code)

### Built Components & Pages

**Pages** (in `app/pages/`):
- ✅ **index.vue** - Complete home page with all sections

**Layout Components** (in `app/components/`):
- ✅ **AppHeader.vue** - Fixed navigation with logo, desktop menu, mobile hamburger
- ✅ **AppFooter.vue** - Location, hours, quick links, copyright
- ✅ **layouts/default.vue** - Header + main + footer wrapper

**Section Components** (in `app/components/sections/`):
- ✅ **Hero.vue** - Full-height hero with background image + overlay text
- ✅ **Features.vue** - 4-column grid for venue features (dark background)
- ✅ **CtaGrid.vue** - 4-column call-to-action button grid
- ✅ **ContentImage.vue** - Text + image section with alternating layout

### Design System
- **Colors**: Black (#000000), Dark BG (#17181a), Primary Red (#ff0000), White (#ffffff)
- **Typography**: JetBrains Mono font family
- **Spacing**: 3px → 20px (8 values)
- **Font Sizes**: 8px → 96px (16 variants)

## Next Steps
1. Build remaining 13 pages from auto-generated templates in `generated-components/`
2. Move completed pages to `app/pages/` directory
3. Refine auto-generated templates with proper layouts and section components
4. Test responsive design on mobile
5. Set up deployment to Vercel

## Auto-Generated Templates (Need Refinement)
Located in `generated-components/`:
- eats-drinks.vue
- corporate-office.vue
- kids.vue
- large-group-bookings.vue
- launch-parties.vue
- radio.vue
- policies.vue
- whats-on.vue
- birthday-cake.vue
- drinks-menu.vue
- merch.vue
- burger-nav.vue
- line-upsevents.vue

## Active Work
Building out remaining pages from generated templates and refining the automated pipeline
