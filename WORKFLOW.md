# Design-to-Code Workflow

## Current Workflow (Validated)

### 1. Download Figma References
```bash
npm run figma:download-references
```
- Downloads desktop + mobile frames as PNG references
- Saves to `tests/screenshots/references/`
- **Time:** ~3-5 seconds per page

### 2. Build/Update Page
- Code the page using Vue + inline styles (NuxtUI override workaround)
- Use existing section components where possible

### 3. Visual Verification
```bash
npm run test:visual
```
- Automated Playwright screenshot comparison
- Generates diff image highlighting differences in red
- **Time:** ~8.4 seconds per test cycle
- Output: `test-results/.../home-baseline-diff.png`

### 4. Iterate
- View diff image to see exact pixel differences
- Make targeted fixes
- Re-run test
- Repeat until acceptable match

## Workflow Metrics

- **Test cycle:** 8.4 seconds
- **Feedback:** Visual (can see exact diffs)
- **Accuracy:** Pixel-perfect comparison
- **Automation:** Fully automated screenshot + compare

## Potential Optimizations

### A. Faster Iteration
- [ ] Hot-reload with live diff preview
- [ ] Side-by-side browser view (Figma | Implementation)
- [ ] AI-powered diff analysis with suggested fixes

### B. Better Tooling
- [ ] Use NuxtUI properly instead of inline style hacks
- [ ] Component library from Figma design system
- [ ] Automated code generation improvements

### C. Multi-Page Scaling
- [ ] Parallel testing (test all pages at once)
- [ ] Visual regression suite
- [ ] CI/CD integration

### D. Image/Asset Optimization
- [ ] Use NuxtImg for automatic optimization
- [ ] Lazy loading for better performance
- [ ] Responsive images with multiple formats

## Next Steps for This Session

1. **Add missing sections to home page:**
   - Visit Us cards (2 side-by-side boxes)
   - Location section with map
   - Taco images in Eats+Drinks

2. **Fix NuxtUI styling:**
   - Replace inline styles with proper NuxtUI theme
   - Use NuxtImg for images
   - Proper responsive design

3. **Iterate to pixel-perfect:**
   - Run test → view diff → fix → repeat
   - Target: <1% pixel difference

4. **Document time taken:**
   - Track iteration cycles
   - Measure workflow efficiency
   - Identify bottlenecks

## Success Criteria

- Home page matches Figma desktop design
- Visual test passes (<100 pixel difference)
- Clean, maintainable code using NuxtUI properly
- Workflow is fast and repeatable for remaining pages
