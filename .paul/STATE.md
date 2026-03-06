# Project State

## Project Reference

See: .paul/PROJECT.md (updated 2026-03-06)

**Core value:** Rewriting and updating the Rowan's brand for the future — letting younger customers know that bowling and Rowan's is still really cool.
**Current focus:** Phase 4 — Desktop Figma Verification (all polished pages vs Figma)

## Current Position

Milestone: v1.0 Pixel-Perfect Launch
Phase: 4 of 8 (Desktop Figma Verification) — In progress
Plan: 04-01 partially executed (verification found pages look good, minor fixes applied)
Status: Mid-APPLY, paused for session break
Last activity: 2026-03-06 — Fixed home eats text + restyled drinks-menu at 1920px

Progress:
- Milestone: [████░░░░░░] 42%
- Phase 1: [██████████] 100%
- Phase 2: [██████████] 100%
- Phase 3: [██████████] 100%
- Phase 4: [██░░░░░░░░] 20%

## Loop Position

Current loop state:
```
PLAN ──▶ APPLY ──▶ UNIFY
  ✓        ~        ○     [APPLY in progress, paused mid-session]
```

## Accumulated Context

### Decisions
- Desktop-first: fix 1920px first, then work down to mobile
- Figma breakpoints: 1920px (Desktop) + 407px (Mobile) only
- Correct published Figma site: https://design-upper-53886537.figma.site
- Figma design file key: P0kpMV8kbGuwNJmuoS3Xxy
- Plans must scope ALL visible files (layouts, components, not just page files)
- Use Figma MCP get_design_context for exact values before coding
- Two heading tiers: 68px (whats-on, radio, policies, merch) and 96px (groups, kids, etc.)
- mix-blend-mode:screen for hero logo knockout
- BurgerNav: flex-start + scroll for overflow safety at 1920px
- Sub-agents cannot use Figma MCP — capture screenshots from main context
- CSS vars (--section-heading-size, etc.) for cross-page heading consistency
- Playwright fullPage screenshots are UNRELIABLE for visual comparison (video bg, absolute pos issues)
- Drinks-menu Figma is 3 stacked images; we chose HTML approach restyled to match look
- User's real browser is ground truth — don't over-report discrepancies from headless screenshots

### Pages Polished (1920px breakpoint added)
1. / (home), /whats-on, /radio, /policies, /groups, /kids
2. /corporate, /launch, /birthday-cakes, /drinks-menu, /merch

### Pages NOT polished (no Figma Desktop frame)
- /eats-drinks (hub), /organise, /yucatan, /pizza, /line-upsevents

### Stub Pages (deferred to Phase 7)
- /about, /karaoke, /merch (content TBD), /contact

### Git State
Last commit: b930aaa
Branch: main
Feature branches merged: none

### Deferred Issues
- Intermediate breakpoints (768-1919px) need tuning
- Mobile verification pass after all desktop work complete
- Pages without Figma frames need alternative reference
- Figma reference PNGs not captured (node IDs in README)

### Blockers/Concerns
- None

## Session Continuity

Last session: 2026-03-06
Stopped at: Phase 4 APPLY mid-execution. Fixed home eats text + drinks-menu restyle. Uncommitted changes.
Next action: /paul:resume — review drinks-menu in browser, commit fixes, continue verifying remaining pages (batch 2: corporate, launch, birthday-cakes, merch)
Resume file: .paul/phases/04-desktop-figma-verification/04-01-PLAN.md
Uncommitted files: app/pages/index.vue (eats max-width fix), app/pages/drinks-menu.vue (1920px restyle)

---
*STATE.md — Updated after every significant action*
