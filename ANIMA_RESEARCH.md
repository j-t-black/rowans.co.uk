# Anima Plugin & API Research

**Date**: 2026-02-05
**Purpose**: Determine best workflow for exporting Figma → Nuxt/Vue code

---

## Summary: YES, We Can Automate with API! 🎉

Anima has both a **plugin** (manual) and an **API/SDK** (automated) approach. We can use both!

---

## Two Approaches Available

### Approach 1: Manual Plugin (Good for testing)
- Use Anima Figma plugin directly in UI
- Select frames → Export code
- Good for: Testing, one-off exports, small components

### Approach 2: API/SDK (Best for automation)
- Use `@animaapp/anima-sdk` npm package
- Programmatically export entire pages/flows
- Good for: Batch export, automation, CI/CD

---

## Anima Plugin Capabilities

### What Can Be Exported

**✅ Whole Pages**: Yes! Multi-screen import feature
- Bring in entire user flows from Figma
- Generate responsive, linked pages with working navigation
- Must be connected using Figma's native prototype tool

**✅ Individual Components**: Yes!
- Export any frame or component
- Toggle between "Fast" and "High quality" code generation

**✅ Size/Limits**: Not specifically documented
- Works with any Figma file
- Better results with clean structure (Auto Layout, named layers)

### Framework Support

**Supported:**
- ✅ Vue
- ✅ Nuxt
- ✅ React / Next.js
- ✅ HTML/CSS
- ✅ Angular

**Styling:**
- ✅ Tailwind CSS (perfect for us!)
- ✅ CSS Modules
- ✅ Styled Components
- ✅ Plain CSS

**Settings for Nuxt:**
```
Framework: Vue
Styling: Tailwind CSS
TypeScript: Enable
```

### Best Practices

**For Best Code Quality:**

1. **Use Auto Layout**
   - Frames with Auto Layout → responsive flexbox code
   - Without it → fixed positioning

2. **Name Layers Properly**
   - "hero-section" → better variable names
   - "Frame 4198" → generic names

3. **Clean Up Design**
   - Remove hidden layers
   - Delete unused components
   - Mark assets for export appropriately

4. **Component Structure**
   - Enable "mark for export" for images
   - Live code: DON'T mark for export
   - Create components for reusable elements

---

## Anima API/SDK (Automation)

### Installation

```bash
npm install @animaapp/anima-sdk
```

For React/Nuxt projects:
```bash
npm install @animaapp/anima-sdk @animaapp/anima-sdk-react
```

### Basic Usage

```typescript
import { Anima } from "@animaapp/anima-sdk";

const anima = new Anima({
  auth: {
    token: "Your Anima Token",  // Get from Anima dashboard
    userId: "x"
  }
});

const { files } = await anima.generateCode({
  fileKey: "P0kpMV8kbGuwNJmuoS3Xxy",  // Our Figma file key
  figmaToken: "figd_...",              // Our Figma token
  nodesId: ["1:2", "1:3"],             // Frame IDs to export
  settings: {
    language: "typescript",
    framework: "vue",                  // or "react", "html"
    styling: "tailwind",
    // uiLibrary: "shadcn" // optional
  }
});

console.log(files); // Generated code files
```

### API Features

**Capabilities:**
- Convert Figma frames to code programmatically
- Batch export multiple frames at once
- Pixel-perfect, production-ready code
- Integrate into CI/CD pipelines

**Output:**
- Returns code files as JavaScript objects
- Can be written to disk automatically
- Includes HTML/JSX, CSS/Tailwind, and assets

### Security

**Important:**
- Use `anima-sdk` on **backend only** (keep token private)
- Don't expose Anima token in frontend code
- Store tokens in `.env` file

---

## Recommended Workflow for Our Project

### Phase 1: Setup & Test (Manual)

1. **Install Anima Plugin** in Figma ✅ (you're doing now)
2. **Test with one component** (e.g., button or hero section)
3. **Configure settings:**
   - Framework: Vue
   - Styling: Tailwind
   - TypeScript: On
4. **Validate code quality**

### Phase 2: Batch Export (Automated)

Once we confirm Anima works well:

1. **Get Anima API token**
   - Sign up at https://www.animaapp.com/api
   - Get API token from dashboard

2. **Install SDK in project**
   ```bash
   npm install @animaapp/anima-sdk
   ```

3. **Create export script**
   ```bash
   # scripts/export-figma.ts
   ```

4. **Export all pages at once**
   - Home, Eats & Drinks, Groups, Corporate, etc.
   - Save to `app/components/` or temp folder

5. **Review and refine**
   - Anima gives ~70-80% of code
   - Add logic, props, data binding
   - Refine styling as needed

### Phase 3: Extract Node IDs

To use the API, we need Frame IDs. We can get them from:

**Option A: Figma API**
```bash
curl -H "X-Figma-Token: ..." \
  "https://api.figma.com/v1/files/P0kpMV8kbGuwNJmuoS3Xxy"
```
Parse JSON to get node IDs for each section.

**Option B: Figma URL**
- Right-click frame in Figma
- "Copy link to selection"
- URL contains node ID: `?node-id=2-149`

**Option C: Inspect in browser**
- Use Figma's inspect panel
- Node ID shown in properties

---

## Size Recommendations

### Component Size

**Ideal:**
- **Small components**: Buttons, cards, inputs
  - Fastest export
  - Easiest to refine
  - Most reusable

**Medium components**: Sections, headers, footers
  - Good balance
  - May need some refinement
  - Usually work well

**Large exports**: Full pages
  - Can work but may need more refinement
  - Better to split into sections
  - Easier to manage and update

### Our Strategy

**Start Small → Build Up:**

1. **Export small UI elements first:**
   - Buttons
   - Cards
   - Form inputs
   - Navigation items

2. **Then export sections:**
   - Hero section
   - Features section
   - Footer
   - Header/Nav

3. **Combine into pages:**
   - Import sections into page components
   - Add logic and data
   - Wire up routing

**Why this works:**
- Smaller exports = higher quality
- More reusable components
- Easier to debug and refine
- Matches component-based architecture

---

## Can We Export Whole Pages?

**YES, but with caveats:**

✅ **Technically possible:**
- Anima supports multi-screen exports
- Can export entire prototyped flows

⚠️ **Considerations:**
- Code quality may vary for very large frames
- More manual cleanup needed
- Less reusable

💡 **Recommendation:**
- Export sections separately
- Compose into pages manually
- Gives better control and reusability

---

## Integration with Nuxt 4

### Anima Output → Nuxt Structure

Anima exports Vue components. We'll adapt them:

```
Anima Output:
├── HeroSection.vue
├── FeaturesSection.vue
└── FooterSection.vue

↓ Adapt to:

app/components/
├── sections/
│   ├── HeroSection.vue
│   ├── FeaturesSection.vue
│   └── FooterSection.vue
└── ui/
    ├── Button.vue
    └── Card.vue

app/pages/
└── index.vue (imports sections)
```

### Adaptation Steps

1. **Copy Anima output** to appropriate folders
2. **Add TypeScript types** for props
3. **Extract design tokens** to Tailwind config
4. **Add interactivity** (clicks, navigation)
5. **Connect data** (replace hardcoded content)

---

## Next Steps

### Immediate (Today)

1. ✅ **Install Anima Plugin** (you're doing now)
2. ⏭️ **Test export one component** (start with button or hero)
3. ⏭️ **Evaluate code quality**
4. ⏭️ **Configure for Nuxt/Vue/Tailwind**

### Short Term (This Week)

5. ⏭️ **Sign up for Anima API** (if code quality good)
6. ⏭️ **Get API token**
7. ⏭️ **Install SDK in project**
8. ⏭️ **Extract node IDs for all pages**
9. ⏭️ **Create batch export script**

### Medium Term

10. ⏭️ **Export all sections programmatically**
11. ⏭️ **Adapt to Nuxt structure**
12. ⏭️ **Add logic and data binding**
13. ⏭️ **Build pages from sections**

---

## Cost & Access

### Plugin
- **Free tier**: Available
- **Pro features**: May require Anima subscription

### API
- **Pricing**: Check https://www.animaapp.com/api
- **Likely**: Paid service for API access
- **Worth it**: If it saves significant development time

---

## Resources

- [Anima Figma Plugin](https://www.figma.com/community/plugin/857346721138427857)
- [Anima API](https://www.animaapp.com/api)
- [Anima SDK GitHub](https://github.com/AnimaApp/anima-sdk)
- [Anima SDK NPM](https://www.npmjs.com/package/@animaapp/anima-sdk)
- [Figma Best Practices | Anima](https://support.animaapp.com/en/articles/6300035-figma-best-practices)
- [Anima Figma Plugin Guide](https://support.animaapp.com/en/articles/11721866-anima-figma-plugin-design-to-code-in-figma)

---

*Research completed: 2026-02-05*
*Ready to proceed with testing!*
