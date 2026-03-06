# Fix Regressions + Improve Figma Verification Workflow

**Date**: 2026-03-06
**Status**: Approved

## Problem Statement

The Figma polish workflow (Phase 3) introduced regressions: oversized headings overlapping content, clipped nav items, missing bottom padding on buttons. The root cause is applying Figma values without verifying the result in context, and without a rule to preserve non-Figma additions.

## Workflow Rules (New)

These rules apply to ALL future Figma polish work:

1. **Additive only** - Figma polish adds/modifies `@media (min-width: 1920px)` styles. Never delete existing elements, sections, or CSS rules that exist outside the 1920px block.
2. **Preserve additions** - Anything not in Figma is an intentional user addition. Leave it alone.
3. **Figma reference first** - Before any code changes, capture Figma MCP screenshots for all target pages and save to `design-references/desktop-1920/` for human comparison.
4. **Verify after every page** - After applying Figma values to a page, take a Playwright screenshot at 1920x1080 and visually compare before moving on.
5. **Delegate to sub-agents** - Each page fix gets its own agent to preserve orchestrator context.

## Bugs to Fix

| Bug | Location | Root Cause | Fix |
|-----|----------|-----------|-----|
| Hero logo too opaque | `app/pages/index.vue` | `opacity: 0.8` doesn't match Figma's softer look | Check Figma exact opacity, apply correctly |
| Eats+Drinks heading overlaps subtitle | `app/pages/index.vue` | `eats-heading` at 96px with no margin-bottom at 1920px | Add spacing; verify correct heading size from Figma |
| Radio buttons clipped at bottom | `app/pages/radio.vue` | `bottom: 4rem` insufficient for 148px-tall buttons at 1920px | Increase bottom offset in 1920px media query |
| BurgerNav "Home" not visible at 1920px | `app/components/BurgerNav.vue` | 14 items at 68px + `justify-content: center` clips top overflow | Fix centering to not clip overflow content |

## Implementation Approach

### Phase 1: Setup (orchestrator)
- Capture Figma MCP screenshots for all pages with Desktop frames
- Save to `design-references/desktop-1920/`
- Fix BurgerNav clipping (small shared component, do directly)

### Phase 2: Fix regressions (sub-agents)
- Agent 1: Fix home page hero opacity + eats+drinks overlap
- Agent 2: Fix radio page button padding
- Each agent: read page file, check Figma values, edit CSS, take Playwright screenshot, report back

### Phase 3: Verify all pages (sub-agents)
- One agent per page: screenshot at 1920x1080, compare against saved Figma reference
- Report discrepancies back to orchestrator
- User reviews `design-references/` folder for final approval

## Agent Delegation Pattern

| Task | Who | Why |
|------|-----|-----|
| Capture Figma reference screenshots | Sub-agent | MCP calls + image data stays in its context |
| Fix a single page's CSS | Sub-agent | Self-contained: read, check Figma, edit, screenshot |
| Verify page against reference | Sub-agent | Reads images, compares, returns short summary |
| Orchestrate, track progress, user comms | Orchestrator | Lightweight coordination only |

## Success Criteria

- All 4 bugs fixed (logo opacity, eats overlap, radio buttons, burger nav)
- Figma reference screenshots saved for all pages with Desktop frames
- No regressions on other pages
- User can browse `design-references/desktop-1920/` to verify visually
