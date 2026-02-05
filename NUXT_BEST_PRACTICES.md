# Nuxt 4 + NuxtUI Best Practices

**Purpose**: Refined workflow for building Rowan's website following modern best practices

---

## Key Principles from Knowledge Base

### Nuxt 4 Structure

**The `app/` Directory** (new in Nuxt 4):
```
app/
├── components/     # Auto-imported Vue components
├── composables/    # Auto-imported composables
├── layouts/        # Page layouts
├── middleware/     # Route middleware
├── pages/          # File-based routing
├── plugins/        # Nuxt plugins
├── utils/          # Auto-imported utilities
└── app.vue         # Root component
```

**File-Based Routing**:
- `app/pages/index.vue` → `/`
- `app/pages/eats-drinks.vue` → `/eats-drinks`
- `app/pages/groups.vue` → `/groups`

**Pages Must Have Single Root Element**:
```vue
<!-- ✅ CORRECT -->
<template>
  <div>
    Page content here
  </div>
</template>

<!-- ❌ WRONG - Multiple roots break client-side transitions -->
<template>
  <div>First root</div>
  <div>Second root</div>
</template>
```

### Component Auto-Import

**Nested Directory Structure** = Component Names:
```
app/components/
├── sections/
│   ├── HeroSection.vue      → <SectionsHeroSection />
│   └── FeaturesSection.vue  → <SectionsFeaturesSection />
└── ui/
    ├── Button.vue           → <UiButton />
    └── Card.vue             → <UiCard />
```

**Or use path-based naming** (clearer):
```
app/components/
├── SectionsHero.vue         → <SectionsHero />
├── SectionsFeatures.vue     → <SectionsFeatures />
├── UiButton.vue             → <UiButton />
└── UiCard.vue               → <UiCard />
```

### NuxtUI v4 Principles

**125+ Production-Ready Components**:
- Built on Reka UI (WAI-ARIA compliant)
- Tailwind CSS (5x faster builds)
- Fully accessible
- TypeScript support

**Common Components**:
```vue
<UButton>Click me</UButton>
<UCard>Content</UCard>
<UContainer>Centered content</UContainer>
<UInput v-model="value" />
<UModal v-model="isOpen">Modal content</UModal>
```

---

## Refined Workflow for Rowan's Website

### Phase 1: Proper App Structure

```
app/
├── layouts/
│   └── default.vue              # Main layout with header/footer
├── components/
│   ├── AppHeader.vue            # Global header
│   ├── AppFooter.vue            # Global footer
│   ├── sections/
│   │   ├── HeroSection.vue      # Reusable hero
│   │   ├── AudioSection.vue     # Audio/music section
│   │   ├── EatsSection.vue      # Food & drinks
│   │   └── BookingSection.vue   # Booking CTAs
│   └── ui/
│       ├── HeroImage.vue        # Hero with background image
│       └── ContentCard.vue      # Content cards
├── pages/
│   ├── index.vue                # Home
│   ├── eats-drinks.vue
│   ├── groups.vue
│   ├── corporate.vue
│   ├── policies.vue
│   ├── radio.vue
│   └── book-karaoke.vue
└── app.vue                      # Root (includes <NuxtPage />)
```

### Phase 2: Component Composition Pattern

**Build pages from reusable sections**:

```vue
<!-- app/pages/index.vue -->
<template>
  <div>
    <SectionsHero
      image="/design-assets/HERO 1.4 CLEAN LINES - NEW 16.png"
      title="Iconic Venue in London's Finsbury Park"
      subtitle="Welcome to Rowans"
    />

    <SectionsAudio />

    <SectionsEats />

    <SectionsBooking />
  </div>
</template>
```

**Sections are composed of NuxtUI components**:

```vue
<!-- app/components/sections/Hero.vue -->
<template>
  <section class="relative h-screen">
    <UiHeroImage :src="image" :alt="title" />

    <UContainer class="relative z-10 h-full flex items-center">
      <div>
        <h1 class="text-6xl font-bold text-white mb-4">
          {{ title }}
        </h1>
        <p class="text-xl text-white">
          {{ subtitle }}
        </p>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface Props {
  image: string
  title: string
  subtitle?: string
}

const props = defineProps<Props>()
</script>
```

### Phase 3: Leverage NuxtUI

**Use built-in components instead of recreating**:

```vue
<!-- ✅ GOOD - Use NuxtUI -->
<UButton to="/book-karaoke" size="lg" color="primary">
  Book Karaoke
</UButton>

<UCard>
  <template #header>
    <h3>Large Groups</h3>
  </template>
  <p>Perfect for parties of 10+</p>
</UCard>

<!-- ❌ AVOID - Don't recreate what NuxtUI provides -->
<button class="px-4 py-2 bg-primary rounded">
  Book Karaoke
</button>
```

### Phase 4: Design Tokens via Tailwind

**Use generated config + extend**:

```js
// tailwind.config.ts
import generatedConfig from './tailwind.config.generated.js'

export default {
  ...generatedConfig,
  theme: {
    extend: {
      ...generatedConfig.theme.extend,
      // Add custom values
      container: {
        center: true,
        padding: '2rem'
      }
    }
  }
}
```

### Phase 5: Responsive Design

**Mobile-first with Tailwind**:

```vue
<template>
  <section class="
    px-4 py-8              <!-- Mobile -->
    md:px-8 md:py-16       <!-- Tablet -->
    lg:px-16 lg:py-24      <!-- Desktop -->
  ">
    <h1 class="
      text-4xl               <!-- Mobile -->
      md:text-5xl            <!-- Tablet -->
      lg:text-6xl            <!-- Desktop -->
    ">
      {{ title }}
    </h1>
  </section>
</template>
```

---

## Updated Code Generation Strategy

### What to Generate Automatically

1. **Design Tokens** ✅
   - Colors, fonts, spacing → Tailwind config
   - Keep auto-generated

2. **Page Structure** ✅
   - Create page files in `app/pages/`
   - Single root element
   - Import section components

3. **Section Components** ✅
   - Create in `app/components/sections/`
   - Reusable across pages
   - Props for customization

### What to Build Manually

1. **Layout Components**
   - `app/layouts/default.vue`
   - `app/components/AppHeader.vue`
   - `app/components/AppFooter.vue`

2. **UI Components** (if not in NuxtUI)
   - Only create if NuxtUI doesn't have it
   - Keep minimal and focused

3. **Logic & Interactivity**
   - Navigation
   - Modals/overlays
   - Form handling
   - API integration

---

## Refined Generator Output

### Before (Current):
```
generated-components/
├── home.vue                 # Flat pages with inline content
├── eats-drinks.vue
└── ...
```

### After (Improved):
```
app/
├── pages/
│   ├── index.vue            # Imports sections
│   ├── eats-drinks.vue
│   └── ...
├── components/
│   └── sections/
│       ├── Hero.vue         # Reusable section with props
│       ├── Audio.vue
│       ├── Eats.vue
│       └── ...
└── layouts/
    └── default.vue          # Shared layout
```

### Page Template (Improved):
```vue
<template>
  <div>
    <SectionsHero v-bind="heroData" />
    <SectionsAudio />
    <SectionsEats />
  </div>
</template>

<script setup lang="ts">
const heroData = {
  image: '/design-assets/HERO 1.4 CLEAN LINES - NEW 16.png',
  title: 'Iconic Venue',
  subtitle: 'Welcome to Rowans'
}
</script>
```

### Section Template (Improved):
```vue
<template>
  <section class="py-16">
    <UContainer>
      <h2 class="text-4xl font-bold mb-8">{{ title }}</h2>
      <p class="text-lg">{{ description }}</p>

      <UButton
        v-if="ctaText"
        :to="ctaLink"
        size="lg"
        color="primary"
        class="mt-8"
      >
        {{ ctaText }}
      </UButton>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  ctaText?: string
  ctaLink?: string
}

const props = defineProps<Props>()
</script>
```

---

## Implementation Steps

### Step 1: Set Up Structure
```bash
# Create directories
mkdir -p app/{layouts,components/{sections,ui}}

# Create base files
touch app/layouts/default.vue
touch app/components/AppHeader.vue
touch app/components/AppFooter.vue
touch app/app.vue
```

### Step 2: Build Layout
- Create `app.vue` with `<NuxtPage />`
- Create `default.vue` layout with header/footer
- Build AppHeader and AppFooter components

### Step 3: Generate Improved Components
- Update generator to create:
  - Pages in `app/pages/`
  - Sections in `app/components/sections/`
  - Proper component composition

### Step 4: Refine & Test
- Test one page (Home) end-to-end
- Verify routing works
- Check responsive design
- Add interactivity

### Step 5: Scale
- Apply pattern to remaining pages
- Ensure consistency
- Add page-specific customizations

---

## Next Actions

1. ✅ Document best practices (this file)
2. ⏭️ Update code generator with improved patterns
3. ⏭️ Create base layout structure
4. ⏭️ Generate refined components
5. ⏭️ Build and test Home page
6. ⏭️ Scale to remaining pages

---

*Based on Nuxt 4 and NuxtUI v4 official documentation*
*Last Updated: 2026-02-05*
