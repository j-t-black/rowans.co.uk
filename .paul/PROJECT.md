# Project: rowans-website-v2

## What This Is

A pixel-perfect rebuild of the Rowan's bowling venue website (rowans.co.uk) from Figma designs, built with Nuxt 4, NuxtUI, and TypeScript. The site covers 14+ pages including home, events, group bookings, food/drinks, radio, and policies.

## Core Value

Rewriting and updating the Rowan's brand for the future — letting younger customers know that bowling and Rowan's is still really cool.

## Current State

| Attribute | Value |
|-----------|-------|
| Version | 0.3.0 |
| Status | Beta |
| Last Updated | 2026-03-06 |

**Production URLs:**
- rowans.co.uk: Live site (Vercel deployment)
- Figma design file: P0kpMV8kbGuwNJmuoS3Xxy
- Published Figma site: https://story-method-86424349.figma.site

## Requirements

### Validated (Shipped)
- [x] Home page with all sections (hero, welcome, party, eats, audio, visit, location)
- [x] Burger navigation overlay (14 items, Figma-accurate)
- [x] 12+ sub-pages with content (whats-on, radio, djs, policies, groups, kids, corporate, launch, birthday-cakes, drinks-menu, yucatan, pizza)
- [x] Mobile responsiveness pass across all pages
- [x] Vercel deployment pipeline
- [x] Root-level CSS foundation (CSS variables for headings, colors, spacing) — Phase 1
- [x] Home page pixel-perfect 1920px match — Phase 2
- [x] 10 content pages pixel-perfect 1920px match — Phase 3
- [x] BurgerNav overflow fix at 1920px — Phase 3

### Active (In Progress)
- [ ] Stub pages need real content (about, karaoke, merch, contact)
- [ ] Intermediate breakpoints (768-1919px) tuning
- [ ] Mobile verification pass (post-desktop work)

### Planned (Next)
- [ ] Missing eats-drinks hub page
- [ ] Pages without Figma frames need polish (yucatan, pizza, organise)

### Out of Scope
- Booking system backend — external provider handles this
- CMS integration — content is static for now

## Target Users

**Primary:** Young adults (18-35) in North London
- Looking for social activities, nightlife, and group events
- Discover venues via social media and search
- Expect modern, visually striking web presence

**Secondary:** Event organisers
- Corporate bookings, launch parties, kids parties
- Need clear pricing and booking information

## Context

**Business Context:**
Rowan's is an established bowling venue in Finsbury Park, London. The brand refresh targets a younger demographic while maintaining the venue's identity. The stakeholder requires exact visual match to the Figma designs.

**Technical Context:**
- Stack: Nuxt 4, NuxtUI, TypeScript, Tailwind CSS
- Hosting: Vercel (serverless)
- Design source: Figma (MCP-connected, file key P0kpMV8kbGuwNJmuoS3Xxy)
- Testing: Playwright for visual regression
- 14 pages in Figma, each with Desktop (1920px) and Mobile (375-407px) frames

## Constraints

### Technical Constraints
- Must use Nuxt 4 / NuxtUI framework
- Deployed on Vercel serverless
- Figma designs are the single source of truth for all visual decisions

### Business Constraints
- Pixel-perfect match to Figma — stakeholder requirement, non-negotiable
- Content must match Figma text exactly

## Tech Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Framework | Nuxt 4 | Vue meta-framework |
| UI Library | NuxtUI | Built on Radix Vue |
| Language | TypeScript | Strict mode |
| Styling | Tailwind CSS | Via NuxtUI, currently underutilised |
| Fonts | JetBrains Mono | Monospace throughout |
| Hosting | Vercel | Serverless deployment |
| Testing | Playwright | Visual regression |
| Design | Figma MCP | Direct design file access |

## Links

| Resource | URL |
|----------|-----|
| Repository | /Users/jtblack/dev/rowans-website-v2 |
| Production | rowans.co.uk |
| Figma Site | https://story-method-86424349.figma.site |

## Key Decisions

| Decision | Phase | Rationale |
|----------|-------|-----------|
| Desktop-first (1920px then mobile) | 2 | Figma has Desktop + Mobile frames; start with larger |
| CSS vars for headings | 1-3 | Site-wide tuning from main.css |
| Two heading tiers (68px/96px) | 3 | Matches Figma per-page intent |
| mix-blend-mode:screen for hero logo | 3 | Knocks out black bg, better than opacity |
| flex-start+scroll for BurgerNav | 3 | Prevents overflow clipping at large viewports |

---
*Created: 2026-03-03*
*Updated: 2026-03-06 after Phase 3*
