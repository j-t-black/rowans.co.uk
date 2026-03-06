# Roadmap: rowans-website-v2

## Overview

Take the existing Nuxt 4 site from "built but rough" to pixel-perfect Figma match across all pages. Fix the CSS foundation first, then systematically correct each page against Figma, tune breakpoints, polish mobile, and handle deferred items before final QA.

## Current Milestone

**v1.0 Pixel-Perfect Launch** (v1.0.0)
Status: In progress
Phases: 3 of 8 complete

## Phases

| Phase | Name | Plans | Status | Completed |
|-------|------|-------|--------|-----------|
| 1 | CSS Foundation | 1/1 | Complete | 2026-03-03 |
| 2 | Home Page Polish | 1/1 | Complete | 2026-03-05 |
| 3 | Content Pages Polish | 2/2 | Complete | 2026-03-06 |
| 4 | Desktop Figma Verification | 1/2 | Planning | - |
| 5 | Intermediate Breakpoints | TBD | Not started | - |
| 6 | Mobile Polish | TBD | Not started | - |
| 7 | Deferred Items | TBD | Not started | - |
| 8 | Final QA & Launch | TBD | Not started | - |

## Phase Details

### Phase 1: CSS Foundation
**Goal**: Define comprehensive CSS variable system covering all design tokens (colors, typography, spacing, breakpoints). Single source of truth before page-by-page work.
**Scope**: main.css only. No page file changes.
**Key output**: Expanded `app/assets/css/main.css` with organised CSS variables.

### Phase 2: Home Page Polish
**Goal**: Pixel-perfect match of all home page sections (hero, welcome, party, eats, audio, visit, location) to Figma designs.
**Scope**: `app/pages/index.vue` and home page components. Desktop + mobile.
**Dependencies**: Phase 1 (CSS variables available for use).

### Phase 3: Content Pages Polish
**Goal**: Pixel-perfect match of all existing content pages to Figma at 1920px.
**Scope**: 10 content pages polished, 4 regressions fixed.
**Dependencies**: Phase 1 (CSS variables). Phase 2 informs patterns.

### Phase 4: Desktop Figma Verification
**Goal**: Systematic verification that all polished pages actually match their Figma Desktop (1920px) frames. Side-by-side comparison, fix any discrepancies found.
**Scope**: All 11 polished pages (home + 10 content). Screenshot comparison against Figma MCP references.
**Dependencies**: Phase 3 complete.

### Phase 5: Intermediate Breakpoints
**Goal**: Tune layouts for viewports between mobile and desktop (768px-1919px). Ensure content looks good at tablet and laptop sizes.
**Scope**: All polished pages. Focus on 768px, 1024px, 1280px breakpoints.
**Dependencies**: Phase 4 (desktop verified first).

### Phase 6: Mobile Polish
**Goal**: Verify and polish mobile layouts (375-407px) across all pages against Figma Mobile frames.
**Scope**: All pages with Figma Mobile frames. Fix any regressions from desktop/breakpoint work.
**Dependencies**: Phase 5 (breakpoints tuned).

### Phase 7: Deferred Items
**Goal**: Reappraise and address accumulated deferred issues — pages without Figma frames, stub pages, missing hub pages, Figma reference library, etc.
**Scope**: TBD after reappraisal. May include: eats-drinks hub, yucatan, pizza, organise, stub pages (about, karaoke, contact), global nav.
**Dependencies**: Phase 6 (core site polished).

### Phase 8: Final QA & Launch
**Goal**: Cross-page visual regression testing, final responsive verification, production deployment.
**Scope**: Full site testing and verification. No new feature work.
**Dependencies**: Phases 1-7 complete.

---
*Roadmap created: 2026-03-03*
*Updated: 2026-03-06 — Restructured: dropped stub pages phase, added verification + breakpoints + mobile + deferred items phases*
