---
phase: 02-home-1920
plan: 01
subsystem: ui
tags: [css, responsive, figma, 1920px]

requires:
  - phase: 01-css-foundation
    provides: CSS variables and design tokens
provides:
  - Home page pixel-perfect at 1920px viewport
  - Nav button sizing at 1920px
  - Figma 1920px measurements documented in memory
affects: [03-content-pages, intermediate-breakpoints]

tech-stack:
  added: []
  patterns: [desktop-first-breakpoint-workflow]

key-files:
  modified: [app/pages/index.vue, app/layouts/default.vue]

key-decisions:
  - "Scope must include all visible files (layouts, components), not just page files"
  - "Desktop-first: fix 1920px first, then work down to mobile"
  - "Logo opacity 0.8 from Figma (was missing)"

patterns-established:
  - "Use Figma MCP get_design_context to extract exact font-size/opacity before coding"
  - "Plans scope all visible elements including layout files"

duration: ~45min
completed: 2026-03-06
---

# Phase 2 Plan 01: Home Page 1920px Summary

**Home page sized to match Figma Desktop frame at 1920px — headings, buttons, logo, and nav all corrected from Figma MCP measurements.**

## Acceptance Criteria Results

| Criterion | Status | Notes |
|-----------|--------|-------|
| AC-1: Hero matches Figma | Pass | Logo 319px, opacity 0.8, heading 36px |
| AC-2: Welcome matches Figma | Pass | Heading 96px, body 24px |
| AC-3: Party buttons match | Pass | 219x216px buttons, heading 40px |
| AC-4: Eats+Drinks matches | Pass | 96px heading, 219x216px buttons |
| AC-5: Audio matches | Pass | 798px logo, 96px heading, 219x229px buttons |
| AC-6: Visit Us matches | Pass | 96px heading, 751px max-width cards |
| AC-7: No mobile regression | Pass | 375px screenshot unchanged |

## Files Modified

| File | Change | Purpose |
|------|--------|---------|
| `app/pages/index.vue` | Modified | All section sizes/fonts for 1920px media query |
| `app/layouts/default.vue` | Modified | Nav buttons 99x98px + 16px labels at 1920px |

## Deviations from Plan

| Type | Count | Impact |
|------|-------|--------|
| Scope additions | 1 | Essential — nav buttons were visible but excluded |
| Auto-fixed | 1 | Logo opacity 0.8 discovered via Figma MCP |

**default.vue added to scope** — plan originally excluded layout files. Nav buttons (burger/lane) were visibly wrong at 99x98px vs our 69x67px. Lesson: scope all visible elements.

**Logo opacity** — Figma node 2:18 has `opacity: 0.8`. Not in original plan but obvious when comparing screenshots side-by-side.

## Next Phase Readiness

**Ready:**
- Home page matches Figma at 1920px
- Figma measurements documented in memory for reuse
- Workflow lesson captured: scope all visible files

**Concerns:**
- Intermediate breakpoints (768-1919px) untested — may need adjustment
- Other pages still at old sizing (need same 1920px treatment)

**Blockers:** None

---
*Phase: 02-home-1920, Plan: 01*
*Completed: 2026-03-06*
