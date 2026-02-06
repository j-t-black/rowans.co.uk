# Figma Dev Mode Integration

## Setup Complete ✅

**Figma MCP Server added:** `claude mcp add --transport http figma https://mcp.figma.com/mcp`

## Next Steps for User

1. **Authenticate MCP Server:**
   - Type `/mcp` in Claude Code
   - Select "figma"
   - Click "Authenticate" then "Allow Access"

2. **Using Dev Mode in Figma:**
   - Open Figma Design file
   - Press `Shift + D` to toggle Dev Mode
   - Select any frame/component
   - Get instant code generation

## What Dev Mode Provides

### Direct Benefits:
- **CSS Export:** Get exact spacing, colors, fonts as CSS
- **Component Code:** Generate Vue/React component code
- **Design Tokens:** Extract all design tokens automatically
- **Layout Code:** Auto-generate responsive grid CSS

### With MCP Server Active:
- Claude can **read Figma files directly**
- Access component properties, variants, tokens
- Generate code from Figma selections
- Keep design and code in sync

## Usage Workflow

### Option A: Manual Dev Mode (Current)
1. Open design in Figma
2. Toggle Dev Mode (Shift+D)
3. Select frame → Copy CSS/code
4. Paste into project

### Option B: MCP-Powered (Once Authenticated)
1. Reference Figma file in Claude
2. Ask Claude to generate code from specific frame
3. Claude reads design data via MCP
4. Generates accurate code automatically

## Future Enhancements

### After MCP Authentication:
- [ ] Extract design tokens automatically
- [ ] Generate component library from Figma
- [ ] Sync design changes to code
- [ ] Auto-update when designs change

### Figma Make (AI Code Generation):
- [ ] Use AI prompts to build layouts
- [ ] Generate interactions from design
- [ ] Export clean, production code

## Commands

```bash
# Check MCP status
/mcp

# Authenticate (in Claude Code)
/mcp → Select figma → Authenticate

# Download references (our current workflow)
npm run figma:download-references

# Visual test
npm run test:visual
```

## Resources

- [Figma Dev Mode Guide](https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode)
- [Figma MCP Server Setup](https://help.figma.com/hc/en-us/articles/35281350665623)
- [Code Generation Guide](https://www.figma.com/solutions/design-to-code/)
