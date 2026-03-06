# Roadmap: rowans-website-v2

## Overview

Take the existing Nuxt 4 site from "built but rough" to pixel-perfect Figma match across all 14+ pages. Fix the CSS foundation first, then systematically correct each page against Figma reference screenshots, and fill in stub page content.

## Current Milestone

**v1.0 Pixel-Perfect Launch** (v1.0.0)
Status: In progress
Phases: 3 of 5 complete

## Phases

| Phase | Name | Plans | Status | Completed |
|-------|------|-------|--------|-----------|
| 1 | CSS Foundation | 1/1 | Complete | 2026-03-03 |
| 2 | Home Page Polish | 1/1 | Complete | 2026-03-05 |
| 3 | Content Pages Polish | 2/2 | Complete | 2026-03-06 |
| 4 | Stub Pages Build | TBD | Not started | - |
| 5 | Final QA & Launch | TBD | Not started | - |

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
**Goal**: Pixel-perfect match of all existing content pages to Figma. Likely multiple plans (2-3 pages per plan).
**Scope**: All content pages with real content (whats-on, radio, djs, policies, groups, kids, corporate, launch, birthday-cakes, drinks-menu, yucatan, pizza, eats-drinks, organise, line-upsevents).
**Dependencies**: Phase 1 (CSS variables). Phase 2 informs patterns.

### Phase 4: Stub Pages Build
**Goal**: Build out stub pages (about, karaoke, merch, contact) with real content from Figma designs.
**Scope**: 4 stub pages that currently show "Coming soon".
**Dependencies**: Phase 1 (CSS variables). Phase 2/3 establish patterns.

### Phase 5: Final QA & Launch
**Goal**: Cross-page visual regression testing, responsive verification at all breakpoints, production deployment.
**Scope**: Full site testing and verification. No new feature work.
**Dependencies**: Phases 1-4 complete.

---
*Roadmap created: 2026-03-03*
*Updated: 2026-03-06 — Phase 3 complete*
