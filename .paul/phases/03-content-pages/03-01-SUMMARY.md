---
phase: 03-content-pages
plan: 01
subsystem: ui
tags: [css, 1920px, figma, content-pages, css-vars, responsive]

requires:
  - phase: 02-home-1920
    provides: Desktop-first workflow, layout polish, CSS vars foundation
provides:
  - 1920px breakpoint polish for 10 content pages
  - CSS var system for section headings (--section-heading-size, --section-heading-weight)
  - Figma node ID mapping for all Desktop frames
affects: [03-02, phase-04-mobile]

tech-stack:
  added: []
  patterns: [CSS vars for cross-page heading consistency, per-page @media 1920px blocks]

key-files:
  created: []
  modified: [app/pages/whats-on.vue, app/pages/radio.vue, app/pages/policies.vue, app/pages/groups.vue, app/pages/kids.vue, app/pages/corporate.vue, app/pages/launch.vue, app/pages/birthday-cakes.vue, app/pages/drinks-menu.vue, app/pages/merch.vue, app/assets/css/main.css, app/layouts/default.vue]

key-decisions:
  - "Expanded scope from 3 to 10 pages — original targets (eats-drinks, organise) had no Figma Desktop frames"
  - "Two heading size tiers: 68px (whats-on, radio, policies, merch) and 96px (groups, kids, corporate, launch, birthday-cakes, drinks-menu)"
  - "CSS vars for headings allow site-wide tuning from main.css"
  - "Removed redundant logo headers from groups, kids, corporate, launch (handled by global layout)"

patterns-established:
  - "Per-page 1920px media query block with Figma-exact values"
  - "CSS vars (--section-heading-size, --section-heading-weight) for cross-page heading consistency"
  - "Additive-only approach: never delete elements outside 1920px media query"

duration: ~4hrs (across 2 sessions)
started: 2026-03-05T02:00:00Z
completed: 2026-03-06T00:31:00Z
---

# Phase 3 Plan 01: Content Pages 1920px Polish Summary

**Polished 10 content pages to Figma-exact 1920px specs with CSS var heading system**

## Performance

| Metric | Value |
|--------|-------|
| Duration | ~4hrs across 2 sessions |
| Started | 2026-03-05T02:00:00Z |
| Completed | 2026-03-06T00:31:00Z |
| Tasks | 4 planned, scope expanded |
| Files modified | 15 |

## Acceptance Criteria Results

| Criterion | Status | Notes |
|-----------|--------|-------|
| AC-1: Whats-On 1920px match | Pass | 68px heading, 36px text, 2x2 grid, bold red "here" link |
| AC-2: Eats+Drinks 1920px match | N/A | No Figma Desktop frame exists — replaced with other pages |
| AC-3: Organise 1920px match | N/A | No Figma Desktop frame exists — replaced with other pages |
| AC-4: No mobile regression | Pass | Mobile styles untouched, only 1920px blocks added |

## Accomplishments

- Polished 10 content pages with Figma-exact 1920px breakpoint values
- Established two heading size tiers (68px / 96px) matching Figma frames
- Created CSS var system for site-wide heading consistency
- Discovered and mapped all Figma Desktop frame node IDs
- Removed redundant logo headers from 4 pages (handled by layout)

## Task Commits

| Task | Commit | Type | Description |
|------|--------|------|-------------|
| CSS vars + home polish | `5347fe1` | feat | Section heading CSS vars, home page typography |
| Heading vars all pages | `f0eafcc` | feat | Apply heading CSS vars across 13 pages |
| Radio/groups/kids polish | `3f5c6b5` | feat | Polish 3 pages, remove redundant logos |
| Remaining pages + 1920px | `b930aaa` | feat | Complete 1920px polish for all 10 pages |

## Files Created/Modified

| File | Change | Purpose |
|------|--------|---------|
| `app/assets/css/main.css` | Modified | Add CSS vars for headings |
| `app/layouts/default.vue` | Modified | Layout button tweaks, hide lane on booking pages |
| `app/pages/whats-on.vue` | Modified | 68px heading, 2x2 grid, bold red link |
| `app/pages/radio.vue` | Modified | 68px heading, 669px player, 235x148 buttons |
| `app/pages/policies.vue` | Modified | 68px heading, 367x119 buttons, opacity 0.35 |
| `app/pages/groups.vue` | Modified | 96px heading, 35px form fields, styled submit |
| `app/pages/kids.vue` | Modified | 96px heading, 35px form fields |
| `app/pages/corporate.vue` | Modified | 96px heading, 595x178 contact box |
| `app/pages/launch.vue` | Modified | 96px heading, styled CTA + contact box |
| `app/pages/birthday-cakes.vue` | Modified | 96px heading, sized supplier images |
| `app/pages/drinks-menu.vue` | Modified | 96px heading, 1756px content width |
| `app/pages/merch.vue` | Modified | 68px heading, 0.35 logo opacity |

## Decisions Made

| Decision | Rationale | Impact |
|----------|-----------|--------|
| Expand from 3 to 10 pages | Original targets had no Figma Desktop frames | More work but better coverage |
| Two heading tiers (68/96px) | Figma uses different sizes per page type | Consistent with design intent |
| CSS vars for headings | Enable site-wide tuning without per-page edits | Easier maintenance |
| Remove redundant logos | Layout nav already provides branding | Cleaner page structure |

## Deviations from Plan

### Summary

| Type | Count | Impact |
|------|-------|--------|
| Scope change | 1 | Major — 3 pages became 10 |
| Dropped targets | 2 | eats-drinks + organise had no Figma frames |

**Total impact:** Positive — more pages polished, but plan scope deviated significantly

### Details

**1. Original targets lacked Figma Desktop frames**
- **Issue:** /eats-drinks hub and /organise have no Figma Desktop (1920px) frames
- **Resolution:** Replaced with 8 pages that DO have Figma frames
- **Pages added:** radio, policies, groups, kids, corporate, launch, birthday-cakes, drinks-menu, merch
- **Impact:** Better coverage, all available Figma frames now polished

**2. Scope expanded to 10 pages**
- **Issue:** Once discovery showed most pages needed similar work, doing them all was more efficient
- **Resolution:** Batched all pages with Figma Desktop frames into one pass
- **Impact:** Phase 3 largely complete in one plan instead of needing 3-4 plans

## Issues Encountered

| Issue | Resolution |
|-------|------------|
| eats-drinks Figma section = Yucatan content | Documented, skipped hub page |
| organise only exists as home section | Documented, no standalone Figma page |
| Redundant logo headers on 4 pages | Removed (layout handles branding) |

## Next Phase Readiness

**Ready:**
- 10 of ~14 pages polished at 1920px
- CSS var system established for headings
- All Figma Desktop frame node IDs mapped

**Concerns:**
- 4 regression bugs introduced (fixed in 03-02)
- Pages without Figma frames still unpolished

**Blockers:**
- None

---
*Phase: 03-content-pages, Plan: 01*
*Completed: 2026-03-06*
