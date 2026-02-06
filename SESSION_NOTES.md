# Session Notes - Figma MCP Setup

## Date: 2026-02-06

## Current Status

### ✅ COMPLETED TODAY
1. **Visual Verification System** - Playwright-based pixel comparison (7.4s cycle)
2. **Figma Frame Separation** - Desktop (2:3) + Mobile (2:76) exports working
3. **Figma MCP Installation** - Server added to config at `/Users/jtblack/.claude.json`
4. **Home Page ~90% Built** - All sections present, minor refinements needed
5. **Workflow Validated** - Fast iteration cycle proven effective

### ⚠️ BLOCKED
**Figma MCP Authentication Not Working**
- MCP server installed successfully: `claude mcp add --transport http figma https://mcp.figma.com/mcp`
- Shows in `claude mcp list` as "Needs authentication"
- `/mcp` command in Claude Code chat not responding
- Need to authenticate to unlock direct Figma reading

## Next Steps

### Option A: Restart This Session
1. Update PROJECT_CONTEXT.md with comprehensive breadcrumbs
2. Commit all progress
3. Restart Claude Code
4. Try `/mcp` command in fresh session

### Option B: New Claude Instance
1. Open new terminal window
2. `cd /Users/jtblack/dev/rowans-website-v2`
3. Start new Claude Code instance
4. Try `/mcp` command there
5. Compare behavior

### Option C: Figma Desktop MCP (Fallback)
If remote MCP auth continues to fail:
1. Open Figma desktop app
2. Open design file: https://www.figma.com/design/P0kpMV8kbGuwNJmuoS3Xxy/rowans-design
3. Press `Shift + D` for Dev Mode
4. Click "Enable desktop MCP server" in inspect panel
5. Select frames directly in Figma to generate code

## What MCP Will Enable

Once authenticated:
- **Direct Figma Reading** - Claude can query Figma files without API calls
- **Component Extraction** - Get properties, variants, tokens automatically
- **Code Generation** - Generate Vue components from selected frames
- **Real-time Sync** - Keep design and code in sync
- **Faster Workflow** - No need to download references manually

## Current Workflow (Without MCP)

Still very effective:
1. `npm run figma:download-references` - Download desktop/mobile PNGs
2. Code the page using Vue + inline styles
3. `npm run test:visual` - Visual comparison (7.4s)
4. View diff image to see exact differences
5. Make targeted fixes
6. Repeat until match

**This workflow is validated and working well!**

## Config Location

**Figma MCP Server:** `/Users/jtblack/.claude.json`
```json
{
  "/Users/jtblack/dev/rowans-website-v2": {
    "mcpServers": {
      "figma": {
        "type": "http",
        "url": "https://mcp.figma.com/mcp"
      }
    }
  }
}
```

## Figma Details

- **File URL:** https://www.figma.com/design/P0kpMV8kbGuwNJmuoS3Xxy/rowans-design
- **File Key:** P0kpMV8kbGuwNJmuoS3Xxy
- **API Token:** In `.env` file (FIGMA_ACCESS_TOKEN)
- **Home Desktop Frame:** 2:3
- **Home Mobile Frame:** 2:76

## Home Page Status

### Sections Complete:
- Hero with logo + cityscape
- "Organise Your Party" (4 circular CTAs)
- "Eats + Drinks" (image + 4 circular CTAs)
- "AUDIO" (logo + 3 circular CTAs)
- "Visit us" (2 cards with hours)
- "Location" (address + map)
- Footer

### Visual Test:
- Current: ~40% pixel difference from Figma
- Mostly spacing/typography tweaks needed
- Very close to pixel-perfect

## Test Commands

```bash
# Visual testing
npm run test:visual                  # 7.4 second cycle
npx playwright show-report           # View diff images

# Download Figma references
npm run figma:download-references    # Desktop + mobile frames

# MCP status
claude mcp list                      # Check if needs auth

# Dev server
npm run dev                          # localhost:3000
```

## Important Files

- `PROJECT_CONTEXT.md` - Full project context
- `WORKFLOW.md` - Design-to-code workflow
- `FIGMA_DEV_MODE.md` - MCP setup guide
- `.env` - Figma API credentials
- `/Users/jtblack/.claude.json` - MCP config

## Decision Point

**Question:** Should we restart this session or try new Claude instance?

**Recommendation:** Try new Claude instance in different terminal first
- Quick test to see if `/mcp` works there
- If yes → session issue, restart this one
- If no → try Figma Desktop MCP approach

## Resources

- [Figma MCP Setup](https://help.figma.com/hc/en-us/articles/35281350665623)
- [Claude Code MCP Docs](https://code.claude.com/docs/en/mcp)
- [Figma Desktop MCP](https://developers.figma.com/docs/figma-mcp-server/local-server-installation/)
