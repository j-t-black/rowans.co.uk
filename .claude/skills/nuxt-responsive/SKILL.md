---
name: nuxt-responsive
description: NuxtUI v4 responsive patterns and conventions for this project
user-invocable: false
---

# NuxtUI v4 Responsive Patterns

## CSS Architecture

### main.css Structure
```css
@import "tailwindcss";
@import "@nuxt/ui";

@theme {
  --font-mono: 'JetBrains Mono', monospace;
  --breakpoint-3xl: 1920px;
}
```

### Custom Properties (defined in main.css :root)
```css
--heading-xl: clamp(28px, 5vw, 64px);
--heading-lg: clamp(24px, 4vw, 48px);
--heading-md: clamp(20px, 3vw, 36px);
--text-base: clamp(14px, 2vw, 18px);
--section-padding: clamp(1rem, 3vw, 3rem);
```

## Tailwind v4 Responsive Utilities

### Breakpoint Prefixes (mobile-first)
- No prefix: 0px+ (mobile default)
- `sm:` 640px+
- `md:` 768px+
- `lg:` 1024px+
- `xl:` 1280px+
- `2xl:` 1536px+
- `3xl:` 1920px+ (custom)

### Common Patterns

**Responsive typography:**
```html
<h1 class="text-[20px] sm:text-[28px] lg:text-[36px] xl:text-[48px]">
```
Or use custom properties:
```html
<h1 style="font-size: var(--heading-xl)">
```

**Responsive spacing:**
```html
<section class="px-4 sm:px-8 lg:px-16" style="padding-block: var(--section-padding)">
```

**Responsive flex/grid:**
```html
<div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
```

**Full-width images:**
```html
<img class="w-full max-w-full h-auto object-cover" />
```

**Button grids:**
```html
<div class="flex flex-wrap justify-center gap-2 sm:gap-4">
```

**Input fields:**
```html
<input class="w-full max-w-[340px]" />
```

## Project-Specific Conventions

### This site is dark-only
- Background: #000000
- Text: #ffffff
- NuxtUI vars: `--ui-bg: #000`, `--ui-text: #fff`

### Font: JetBrains Mono
- Weights: 300 (light), 400 (regular), 700 (bold)
- Italic available for 300 weight
- Auto-loaded via `@nuxt/fonts` when defined in `@theme`

### Layout wrapper: `<UApp>`
- Required in app.vue for NuxtUI theming
- Provides color mode, toast, tooltip context

### Mobile target: 375px (iPhone 12/SE)
- Test at 320px for overflow safety
- Design breakpoint is NOT 407px — that was legacy

### Button sizing
- Fixed nav buttons: 52px mobile / 60px tablet / 69px desktop
- Circular action buttons: match Figma exactly per page

## Anti-Patterns to Avoid

- Don't use scoped `@media` queries when Tailwind responsive prefixes work
- Don't hardcode pixel widths without responsive fallback
- Don't use `vw` units for font-size without `clamp()` bounds
- Don't set `overflow: hidden` on body (breaks scroll)
- Don't nest media queries inside scoped styles when Tailwind can handle it

## Knowledge Base Reference
- NuxtUI theme docs: `/Users/jtblack/dev/knowledge-bases/nuxt-ecosystem/nuxt-ui/content/docs/1.getting-started/5.theme/`
- NuxtUI installation: `.../2.installation/1.nuxt.md`
- NuxtUI components: `.../2.components/`
