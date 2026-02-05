# Figma Dev Mode + Anima Setup Guide

**Goal**: Export Figma designs to clean Vue/Nuxt + Tailwind code

---

## Part 1: Enable Dev Mode (After Pro Upgrade)

### Step 1: Access Dev Mode
1. Open your Figma design file: https://www.figma.com/design/P0kpMV8kbGuwNJmuoS3Xxy/rowans-design
2. Click the **Dev Mode toggle** in the top toolbar (or press `Shift+D`)
3. Interface will transform to show developer-friendly specs

### Step 2: Verify Access
- With Pro plan, you should have a **Full or Dev seat**
- If you see "Request Dev Mode access", click it and approve yourself as admin
- Dev Mode panel will show on the right side with specs, code, and assets

---

## Part 2: Install Anima Plugin

### Step 1: Install from Figma Community
1. Go to: https://www.figma.com/community/plugin/857346721138427857
2. Click **"Try it out"** or **"Install"**
3. Plugin will be added to your Figma account

### Step 2: Access Anima in Your File
1. In your design file, go to **Plugins** menu (or right-click → Plugins)
2. Find **"Anima - Figma to Code"**
3. Click to launch the plugin

### Alternative: Access from Dev Mode
1. Enable Dev Mode (`Shift+D`)
2. In the right panel, look for **Plugins** section
3. Anima should appear there for quick access

---

## Part 3: Prepare Your Figma File for Export

### Best Practices for Clean Code

#### 1. **Name Your Layers**
- Click on each layer/frame and give it a semantic name
- Good: "hero-section", "nav-menu", "cta-button"
- Bad: "Frame 4198", "Rectangle 23"
- **Why**: Better variable/component names in exported code

#### 2. **Use Auto Layout**
- Select frames that should be responsive
- Right-click → "Add Auto Layout" (or `Shift+A`)
- Set direction (horizontal/vertical), spacing, padding
- **Why**: Generates responsive flexbox code automatically

#### 3. **Clean Up Unused Elements**
- Delete hidden layers
- Remove unused components
- Delete unused styles and color variables
- **Why**: Cleaner exported code without clutter

#### 4. **Fix Text Properties**
- Select all text layers
- Set to **"Auto-width"** or **"Auto-height"** (not "Fixed")
- **Why**: Text will be responsive in exported code

#### 5. **Organize Components**
- Group related elements into components
- Create variants for button states, etc.
- **Why**: Anima can export as reusable Vue components

---

## Part 4: Export Code with Anima

### Step 1: Select What to Export
1. In Figma, click on the frame/component you want to export
   - Start with a small component (e.g., a button)
   - Then try larger sections (e.g., hero section)
   - Eventually export whole pages

### Step 2: Configure Anima Settings
1. Launch Anima plugin
2. In Anima settings, choose:
   - **Framework**: Vue (or HTML if Vue not available)
   - **Styling**: Tailwind CSS
   - **TypeScript**: Enable if available
3. Save settings

### Step 3: Generate Code
1. With your frame selected, Anima will show preview
2. Click **"Get Code"** or similar button
3. Code will appear in Anima panel

### Step 4: Copy or Download
- **Option A**: Click **"Copy Code"** button to copy snippets
- **Option B**: Click **"Download"** to get ZIP with all files
- **Option C**: Click **"Open in CodeSandbox"** to preview live

### Step 5: What You'll Get
- **HTML/Vue template** code
- **CSS/Tailwind** classes
- **Component structure**
- **Asset references**

---

## Part 5: Integrate into Nuxt Project

### For Individual Components

```bash
# Create component file
touch app/components/ui/HeroSection.vue
```

```vue
<template>
  <!-- Paste Anima's HTML/template code here -->
  <!-- Adjust for Vue/Nuxt syntax -->
</template>

<script setup lang="ts">
// Add any props, emits, or logic
interface Props {
  title?: string
  // ...
}

const props = withDefaults(defineProps<Props>(), {
  // defaults
})
</script>

<style scoped>
/* Paste Tailwind classes or custom CSS */
</style>
```

### For Design Tokens

1. Anima will show color/spacing values
2. Create a Tailwind config or CSS variables file:

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        'rowans-primary': '#...',
        'rowans-secondary': '#...',
      },
      spacing: {
        // spacing from Figma
      },
      fontFamily: {
        // fonts from Figma
      }
    }
  }
}
```

### For Assets

1. In Dev Mode, click on images/icons
2. Use **"Export"** button to download at correct sizes
3. Place in `/public/images/` folder
4. Reference in components

---

## Part 6: Workflow Tips

### Start Small
1. **First**: Export a simple button component
2. **Second**: Export a card or section
3. **Third**: Export larger page sections
4. **Finally**: Export full pages

### Iterate and Refine
- Anima gives you a starting point
- You'll need to refine:
  - Add interactivity (clicks, hovers)
  - Add data binding
  - Adjust spacing/responsiveness
  - Make components truly reusable

### Use Dev Mode for Specs
Even if Anima doesn't generate perfect code:
- Dev Mode shows exact measurements
- Shows color values
- Shows spacing/padding
- Shows font sizes and weights
- **Use this as reference when refining**

---

## Part 7: Common Issues & Solutions

### Issue: "Auto Layout not working"
**Solution**:
- Select frame in Figma
- Right-click → Add Auto Layout
- Configure direction, spacing, padding

### Issue: "Generated code is messy"
**Solution**:
- Clean up Figma file (Part 3)
- Name layers properly
- Remove hidden elements
- Try exporting again

### Issue: "Vue option not available in Anima"
**Solution**:
- Export as HTML first
- Manually convert to Vue template syntax
- Or try alternative plugins: Builder.io, TeleportHQ

### Issue: "Colors don't match"
**Solution**:
- Use Dev Mode inspect panel
- Copy exact hex/rgb values
- Add to your Tailwind config

### Issue: "Assets not exporting"
**Solution**:
- Use Dev Mode "Export" feature directly
- Select image → Export → Choose format/size
- Download to `/public/images/`

---

## Part 8: Alternative Workflow (If Anima Doesn't Work Well)

### Use Dev Mode Directly
1. Enable Dev Mode (`Shift+D`)
2. Select any element
3. Right panel shows:
   - **CSS** tab: Copy CSS properties
   - **iOS/Android** tabs: Native code
   - **Inspect** panel: Measurements, colors, fonts

### Manual Translation
1. Look at design in Dev Mode
2. Copy measurements from Inspect panel
3. Write Vue components by hand using specs
4. More work, but gives you full control

---

## Part 9: Recommended Export Order

### Phase 1: Foundation
1. Extract design tokens (colors, fonts, spacing)
2. Set up Tailwind config
3. Create base CSS variables

### Phase 2: UI Components
1. Button component
2. Card component
3. Navigation/Header
4. Footer

### Phase 3: Sections
1. Hero sections
2. Content sections
3. Forms/CTAs

### Phase 4: Pages
1. Home page (combining sections)
2. Other pages

---

## Quick Reference Commands

### In Figma:
- `Shift+D` - Toggle Dev Mode
- `Shift+A` - Add Auto Layout
- `Cmd/Ctrl+G` - Group selection
- Right-click → Plugins → Anima

### In Dev Mode:
- Click element → See specs in right panel
- Export button → Download assets
- Code tab → See auto-generated code

---

## Expected Results

With Figma Pro + Dev Mode + Anima, you should be able to:
- ✅ Get 60-80% of the code generated automatically
- ✅ Extract all design tokens precisely
- ✅ Export assets at correct sizes
- ✅ See exact measurements for everything
- ✅ Get responsive flexbox layouts from Auto Layout
- ✅ Speed up development by 50%+

**Remaining 20-40% of work:**
- Adding interactivity (Vue logic)
- Data binding
- Routing
- API integration
- Refinement and polish

---

## Next Steps

1. ✅ **Upgrade to Figma Pro** (you're doing this now)
2. ⏭️ **Enable Dev Mode** in your design file
3. ⏭️ **Install Anima plugin**
4. ⏭️ **Clean up Figma file** (name layers, add Auto Layout)
5. ⏭️ **Test export** with one small component
6. ⏭️ **Share results** and we'll integrate into Nuxt

---

## Sources
- [Guide to Dev Mode – Figma Learn](https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode)
- [Anima - Figma to Code Plugin](https://www.figma.com/community/plugin/857346721138427857)
- [Figma Best Practices | Anima Help Center](https://support.animaapp.com/en/articles/6300035-figma-best-practices)
- [How to export Figma to Vue - Anima Blog](https://www.animaapp.com/blog/design-to-code/how-to-export-figma-to-vue/)
- [How to export Tailwind CSS from Figma - Anima Blog](https://www.animaapp.com/blog/design-to-code/how-to-export-tailwind-from-figma/)

---

*Created: 2026-02-05*
*Project: Rowan's Website*
