# Rowan's Website Architecture

## Project Structure (Nuxt 4)

```
rowans-website-v2/
├── app/                          # Main application directory (Nuxt 4)
│   ├── components/              # Reusable Vue components
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.vue
│   │   │   ├── Footer.vue
│   │   │   └── Navigation.vue
│   │   ├── hero/               # Hero section components
│   │   │   ├── HeroImage.vue
│   │   │   └── HeroVideo.vue
│   │   ├── ui/                 # UI elements
│   │   │   ├── Button.vue
│   │   │   └── Card.vue
│   │   └── sections/           # Page sections
│   │       ├── AudioSection.vue
│   │       ├── EatsSection.vue
│   │       └── EventsSection.vue
│   ├── pages/                   # Route pages (auto-routing)
│   │   ├── index.vue           # Home page
│   │   ├── eats-drinks.vue     # Eats & Drinks
│   │   ├── groups.vue          # Groups
│   │   ├── corporate.vue       # Corporate
│   │   ├── policies.vue        # Policies
│   │   ├── rowans-radio.vue    # Rowan's Radio
│   │   ├── book-karaoke.vue    # Book Karaoke
│   │   └── book-bowling.vue    # Book Bowling (redirect)
│   ├── layouts/                 # Page layouts
│   │   └── default.vue         # Default layout with header/footer
│   ├── composables/             # Reusable composition functions
│   │   ├── useFigma.ts         # Figma API integration
│   │   └── useAssets.ts        # Asset management
│   ├── assets/                  # Styles and fonts
│   │   └── css/
│   │       └── main.css
│   └── app.vue                  # Root component
├── public/                      # Static assets
│   ├── images/                 # Optimized images from Figma
│   ├── videos/                 # Video assets
│   └── favicon.ico
├── server/                      # Server-side code (if needed)
│   └── api/                    # API routes
├── design-assets/              # Original design assets (not for prod)
└── nuxt.config.ts              # Nuxt configuration
```

## Component Architecture

### Design Principles
1. **Atomic Design**: Small, reusable components that compose into larger features
2. **Props over State**: Pass data down via props when possible
3. **TypeScript**: Full type safety for props, emits, and data
4. **Mobile-First**: Responsive design from mobile up to desktop
5. **NuxtUI Integration**: Use NuxtUI components as foundation

### Component Categories

#### 1. Layout Components
- **Header**: Logo, navigation, mobile menu
- **Footer**: Contact info, links, social media
- **Navigation**: Main menu with mobile hamburger

#### 2. Hero Components
- **HeroImage**: Static hero images with overlay text
- **HeroVideo**: Video backgrounds with controls
- Support both desktop and mobile variants

#### 3. Section Components
- **AudioSection**: Audio/music features
- **EatsSection**: Food & drinks showcase
- **EventsSection**: Schedule and events
- **LocationSection**: Map, hours, contact

#### 4. UI Components
- **Button**: CTA buttons with variants (primary, secondary, etc.)
- **Card**: Content cards for events, menu items
- **Modal**: Overlay modals for booking, details

## Routing Strategy

Using Nuxt's file-based routing:
- `/` → Home page
- `/eats-drinks` → Eats & Drinks
- `/groups` → Groups
- `/corporate` → Corporate
- `/policies` → Policies
- `/rowans-radio` → Rowan's Radio
- `/book-karaoke` → Book Karaoke
- `/book-bowling` → Redirect to external booking system

## State Management

**No global state initially** - keep it simple:
- Use props for component communication
- Use composables for shared logic
- Add Pinia later only if needed for complex state

## Styling Approach

1. **NuxtUI/Tailwind CSS**: Primary styling system
2. **CSS Variables**: Brand colors, spacing from Figma
3. **Responsive Utilities**: Mobile-first breakpoints
4. **Custom CSS**: Only when Tailwind isn't sufficient

## Asset Management

### Images
- Store optimized images in `/public/images/`
- Use Nuxt Image for optimization
- Lazy load below-the-fold images

### Videos
- Store in `/public/videos/`
- Provide fallback images
- Consider lazy loading for performance

### Figma Assets
- Extract via Figma API initially
- Cache locally in public folder
- Create composable for Figma asset fetching

## Performance Considerations

1. **Code Splitting**: Automatic via Nuxt
2. **Image Optimization**: Use Nuxt Image module
3. **Lazy Loading**: Images and videos
4. **Minimal JS**: Leverage SSR where possible
5. **Font Optimization**: Preload critical fonts

## TypeScript Structure

```typescript
// Component Props Interface
interface HeroProps {
  imageUrl: string
  title: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
}

// Figma Asset Interface
interface FigmaAsset {
  id: string
  name: string
  type: 'IMAGE' | 'VIDEO'
  url: string
}
```

## Development Workflow

1. **Phase 1**: Set up base layout (Header, Footer, Navigation)
2. **Phase 2**: Build Home page with all sections
3. **Phase 3**: Build remaining pages reusing components
4. **Phase 4**: Polish and optimize
5. **Phase 5**: Deploy to Vercel

## Next Steps

1. Reconcile page names with menu names
2. Create base layout components
3. Set up Figma asset extraction
4. Build Home page
5. Iterate on remaining pages

---
*Created: 2026-02-05*
*Last Updated: 2026-02-05*
