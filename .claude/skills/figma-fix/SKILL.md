---
name: figma-fix
description: "Fix visual discrepancies between Figma designs and Nuxt/Vue implementation. Use this skill whenever the user says things like 'fix this page', 'make it match the design', 'this doesn't look right', 'tweak this to match Figma', or provides a reference screenshot and asks you to match it. Also trigger when the user pastes a design image and says 'make it look like this', or when comparing implementation to a reference and differences are found. This is for CSS/layout/structural fixes in a Nuxt 4 + NuxtUI + TypeScript + Tailwind stack — pixel-perfect corrections, not full page builds."
---

# Figma Fix — Pixel-Perfect Visual Correction

You are fixing visual discrepancies between a Figma design reference and a live Nuxt 4 / NuxtUI / TypeScript implementation. Your job is surgical precision — change only what's wrong, preserve everything that's right.

## Core Principle: Zero Hallucination

The single most important rule: **never guess visual values**. Every number you write in code (font size, spacing, color, width, column count) must come from one of these sources:

1. A reference image the user provided — study it carefully
2. A Figma MCP screenshot (`get_design_context` or `get_screenshot`)
3. The existing code (if you're preserving a value)
4. Explicit instruction from the user

If you cannot determine a value from these sources, ask. Do not estimate, approximate, or "make it look nice." Wrong values that look plausible are worse than asking a question.

## Workflow

### Step 1: Study the Reference

Before touching any code:

1. **Read the reference image carefully.** Spend time on this. Identify:
   - Layout structure (columns, rows, grid behavior)
   - Which elements are present and their order top-to-bottom, left-to-right
   - Relative sizing and spacing between elements
   - Typography (relative sizes, weights, colors — red headings? white body?)
   - Alignment patterns (centered? left-aligned? justified to a grid?)
   - Any decorative elements (logos peeking in, background images, borders)

2. **List what you observe** before coding. Write a brief inventory like:
   - "3-column layout, rows 1-2 use only right 2 columns"
   - "Logo half-visible from left edge"
   - "Red section headings, no underlines"

   This prevents the common failure mode of diving into code and missing structural issues.

3. **If a Figma node ID is known**, use MCP to get exact values:
   ```
   get_design_context(fileKey: "P0kpMV8kbGuwNJmuoS3Xxy", nodeId: "<id>")
   ```
   But note: not all pages have useful Figma frames. Screenshots are often more reliable than Figma extraction for this project.

### Step 2: Read the Current Code

Always read the full page file before editing. Understand:

- The template structure (what elements exist, their nesting)
- The `<style scoped>` section — especially media queries
- Any existing `@media (min-width: 1920px)` block if working on desktop
- CSS custom properties from `app/assets/css/main.css` (`:root` vars, `@theme` tokens)

Pay attention to the **scope of your fix**. If the issue is at 1920px, only modify the 1920px media query. If it's a base style issue, fix the base. Never scatter changes across breakpoints unless the problem exists at multiple breakpoints.

### Step 3: Identify Specific Differences

Compare reference to current code and list concrete differences:

- "Heading is 56px in reference, currently 96px in code"
- "Content uses 3-column grid, code has 2-column"
- "Logo should be half-clipped at left edge, currently fully visible and centered"
- "Section headings have no underline border in reference, code has `border-bottom: 1px solid #2a2a2a`"

Be specific. "Layout looks different" is not actionable. "Rows 1-2 should occupy columns 2-3 of a 3-column grid, leaving column 1 empty for the logo" is actionable.

### Step 3.5: Trace the CSS Cascade

This step exists because of a real failure: correct observations were made from a reference image, but the CSS written did the exact opposite of what was intended. The heading was supposed to be centered but ended up left-aligned; the logo was supposed to be left-aligned but ended up centered. The cause was not tracing through how base styles, intermediate breakpoints, and the target breakpoint interact.

Before writing any CSS, for each element you plan to change:

1. **List the full cascade** — every rule that affects this element, from base styles through each breakpoint up to your target. For example:
   - Base: `.page { align-items: center }` + `.page-header { align-self: flex-start }`
   - 640px: `.heading { font-size: 32px }`
   - 1280px: `.image-wrap { max-width: 800px }`
   - 1920px: (your changes go here)

2. **State your intent in plain English** for each change:
   - "I need the heading centered across the full viewport width"
   - "I need the logo left-aligned, spanning ~60% width, with its left edge clipped by the viewport"

3. **Verify each override will produce the intended result** by tracing the cascade:
   - "Base has `align-self: flex-start` on the header. My 1920px override sets `align-self: auto`. The parent has `align-items: center` in base... wait, that means `auto` inherits `center`, not `stretch`. I need to explicitly set `align-self: stretch` or change the parent."
   - If you find yourself unsure whether an override will win, write a simpler/more explicit rule. `width: 65vw; margin-left: 0; margin-right: auto;` is clearer than relying on flex alignment inheritance.

4. **Prefer explicit over clever.** If you want something left-aligned, use `margin-right: auto` or `text-align: left` or `justify-self: start` — not indirect inheritance from flex parent alignment. Direct properties are easier to reason about and less likely to produce the opposite of what you intended.

### Step 4: Make Targeted Fixes

Rules for editing:

- **Additive at breakpoints**: When fixing a specific breakpoint (e.g., 1920px), add/modify rules inside that media query. Do not delete base styles or rules from other breakpoints.
- **Preserve what works**: If the mobile layout is fine and you're fixing desktop, don't touch mobile styles.
- **One concept per edit**: Fix the grid structure, then fix the typography, then fix the spacing. Don't try to do everything in one massive edit.
- **Match the existing pattern**: If the page uses scoped `<style>` with media queries, keep using that. If it uses Tailwind classes, keep using those. Don't mix paradigms within a page.
- **Prefer explicit over indirect**: Use direct CSS properties rather than relying on inherited flex/grid alignment. If you want centered text, use `text-align: center` on the element itself with `width: 100%`, not `align-items` on a parent. If you want a left-positioned image, use `margin-right: auto` or absolute positioning, not flex justify tricks.

### Step 5: Suggest Verification

After making changes, tell the user:
- What you changed and why
- Suggest they check the dev server at the relevant viewport width
- If there are multiple breakpoints affected, mention which ones to check

Do NOT use Playwright fullPage screenshots for visual verification — they render incorrectly for pages with video backgrounds, scroll-based positioning, and absolute elements. Trust the user's real browser as ground truth.

## Project-Specific Knowledge

### Stack
- **Nuxt 4** + **NuxtUI** (Radix Vue)
- **Tailwind CSS** via NuxtUI
- **TypeScript** with `<script setup>`
- **JetBrains Mono** font throughout
- **Dark theme only**: bg #000, text #fff, headings #e8000d / #ff0000

### CSS Architecture
- Global tokens in `app/assets/css/main.css` (`@theme` block + `:root` vars)
- Per-page scoped styles with breakpoint media queries
- 1920px desktop: `@media (min-width: 1920px)` blocks in each page
- Mobile-first, Tailwind breakpoints: sm(640) md(768) lg(1024) xl(1280) 2xl(1536) 3xl(1920)

### Common Heading Sizes at 1920px
- **68px**: whats-on, radio, policies, merch
- **96px**: groups, kids, corporate, launch, birthday-cakes, drinks-menu

### Layout Patterns
- Pages use `max-width` containers centered with `margin: 0 auto`
- Grid layouts via CSS Grid (not flexbox) for multi-column sections
- Circular button images from `public/` directory with fixed sizes
- Background images via `:style="{ backgroundImage: ... }"`

### Figma Reference
- Design file key: `P0kpMV8kbGuwNJmuoS3Xxy`
- Known node IDs are documented in project memory
- Some pages have no Figma frame — use reference screenshots instead
- The drinks-menu Figma frame (8:1042) contains stacked images, not useful for extraction

### What the `/nuxt-responsive` Skill Knows
That skill has the full CSS architecture, breakpoints, font info, and anti-patterns. If you need responsive pattern guidance, consult it.

## Anti-Hallucination Checklist

Before submitting your fix, verify:

- [ ] Every pixel value in my code came from the reference, Figma, or existing code
- [ ] I did not invent any colors, font sizes, or spacing values
- [ ] I did not add elements that aren't in the reference
- [ ] I did not remove elements that ARE in the reference (even if they're not in Figma — they may be intentional additions)
- [ ] My changes are scoped to the correct breakpoint
- [ ] I preserved the mobile/tablet layout if I only fixed desktop

## Common Mistakes to Avoid

- **Guessing content width**: The reference image shows how wide the content area should be relative to the viewport. Don't pick a number that "seems right" — look at how many columns fit, how much whitespace surrounds them.
- **Ignoring element order**: If the reference shows Draught | Guest Cans left-to-right, don't render them reversed or stacked.
- **Over-reporting issues**: If something looks 95% right and you're not sure about the last 5%, say so. Don't fabricate discrepancies.
- **Fixing symptoms not causes**: If text overflows, the root cause might be a parent container width, not the text size. Check the box model upward before tweaking leaf elements.
- **Breaking other breakpoints**: Always check that your 1920px fix didn't break 768px. Scope your media queries tightly.
- **Relying on flex inheritance for alignment**: The most common cascade failure is writing `align-self: auto` expecting it to inherit a value you set on the parent — but the parent's value comes from a base rule you forgot about. Always trace the full chain. When in doubt, set alignment explicitly on the element itself.
- **Writing the opposite of your intent**: If your observations say "logo should be left-aligned" but your code produces a centered logo, you skipped Step 3.5. Go back and trace the cascade before trying again.
