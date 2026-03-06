# Project State

## Project Reference

See: .paul/PROJECT.md (updated 2026-03-06)

**Core value:** Rewriting and updating the Rowan's brand for the future — letting younger customers know that bowling and Rowan's is still really cool.
**Current focus:** Phase 4 — Stub Pages Build (about, karaoke, merch, contact)

## Current Position

Milestone: v1.0 Pixel-Perfect Launch
Phase: 4 of 5 (Stub Pages Build) — Not started
Plan: Not started
Status: Ready to plan
Last activity: 2026-03-06 — Phase 3 complete, transitioned to Phase 4

Progress:
- Milestone: [██████░░░░] 60%
- Phase 1: [██████████] 100%
- Phase 2: [██████████] 100%
- Phase 3: [██████████] 100%
- Phase 4: [░░░░░░░░░░] 0%

## Loop Position

Current loop state:
```
PLAN ──▶ APPLY ──▶ UNIFY
  ○        ○        ○     [Phase 4 — ready to plan]
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

### Pages Polished (1920px breakpoint added)
1. / (home), /whats-on, /radio, /policies, /groups, /kids
2. /corporate, /launch, /birthday-cakes, /drinks-menu, /merch

### Pages NOT polished (no Figma Desktop frame)
- /eats-drinks (hub), /organise, /yucatan, /pizza, /line-upsevents

### Stub Pages (Phase 4 targets)
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
Stopped at: Phase 3 complete, ready to plan Phase 4
Next action: /paul:plan for Phase 4
Resume file: .paul/ROADMAP.md

---
*STATE.md — Updated after every significant action*
