# Project State

## Project Reference

See: .paul/PROJECT.md (updated 2026-03-03)

**Core value:** Rewriting and updating the Rowan's brand for the future — letting younger customers know that bowling and Rowan's is still really cool.
**Current focus:** Phase 3 — Content pages 1920px polish (10 of ~14 pages done)

## Current Position

Milestone: v1.0 Pixel-Perfect Launch
Phase: 3 of 5 (Content Pages Polish) — In Progress
Plan: 03-02 APPLY complete, awaiting human verification
Status: 03-01 expanded to 10 pages (needs UNIFY later). 03-02 regression fixes applied.
Last activity: 2026-03-06 — Applied 03-02 fixes (BurgerNav, eats overlap, radio buttons)

Progress:
- Milestone: [████░░░░░░] 40%
- Phase 1: [██████████] 100%
- Phase 2: [██████████] 100%
- Phase 3: [███████░░░] 70%

## Loop Position

Current loop state:
```
PLAN ──▶ APPLY ──▶ UNIFY
  ✓        ✓        ○     [03-02 Applied, awaiting human verification]
```

## Accumulated Context

### Decisions
- Desktop-first: fix 1920px first, then work down to mobile
- Figma breakpoints: 1920px (Desktop) + 407px (Mobile) only
- Correct published Figma site: https://design-upper-53886537.figma.site
- Figma design file key: P0kpMV8kbGuwNJmuoS3Xxy
- Plans must scope ALL visible files (layouts, components, not just page files)
- Use Figma MCP get_design_context for exact values before coding
- Phase 3 split into multiple plans: 2-3 pages per plan
- eats-drinks hub + organise have NO Figma Desktop frames — replaced with radio + policies
- All headings at 1920px are either 68px or 96px depending on page

### Pages Polished (1920px breakpoint added)
1. /whats-on — 68px heading, 36px text, bold red "here" link, 2x2 photo grid
2. /radio — 68px heading, 669px player, 235x148 buttons, 32px labels
3. /policies — 68px heading, 36px text, 367x119 buttons, opacity 0.35
4. /groups — 96px heading, 40px subtitle, 35px inputs/costs, styled submit
5. /kids — 96px heading, 36px info text, 35px inputs/costs, 36px footer
6. /corporate — 96px heading, 36px features, 595x178 contact box at 48px
7. /launch — 96px heading, 36px subtitle, styled CTA + contact box
8. /birthday-cakes — 96px heading, 36px text, sized supplier images
9. /drinks-menu — 96px heading, 1756px content with 82px margins
10. /merch — 68px heading, 0.35 logo opacity, wider container

### Pages NOT polished (no Figma Desktop frame)
- /eats-drinks (hub) — Figma section 9:1082 shows Yucatan Tacos, not hub
- /organise — only exists as home page section, no standalone Figma page
- /yucatan — Figma section labeled /eats-drinks contains this content
- /pizza — no dedicated Figma section found
- /line-upsevents — Figma frame is just a screenshot placeholder

### Deferred Issues
- Intermediate breakpoints (768-1919px) need tuning
- Mobile verification pass after all desktop work complete
- Pages without Figma frames need alternative reference (published site screenshots?)

### Blockers/Concerns
- None

## Session Continuity

Last session: 2026-03-06
Stopped at: 03-02 APPLY complete, checkpoint pending
Next action:
  1. Human verification of 4 fixes
  2. Run /paul:unify on 03-02
Resume file: .paul/phases/03-content-pages/03-02-PLAN.md

---
*STATE.md — Updated after every significant action*
