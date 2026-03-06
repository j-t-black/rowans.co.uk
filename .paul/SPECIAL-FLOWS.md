# Special Flows

## Declared Skills

| Skill | When Required | Priority |
|-------|--------------|----------|
| `/compare` | Before marking any visual fix complete | required |
| `/figma-capture` | When capturing fresh Figma reference screenshots | required |
| `/figma-text` | When verifying exact text content from Figma | required |
| `/verify` | After implementing any visual change | required |
| `nuxt-responsive` | Reference for responsive patterns and breakpoints | optional |

## Declared Plugins

| Plugin | When Required | Priority |
|--------|--------------|----------|
| Figma MCP (`get_design_context`, `get_screenshot`) | When pulling design context for a specific node | required |
| Playwright MCP | When running visual regression tests | optional |

## Usage Rules

1. Every visual fix MUST be verified with `/compare` before marking complete
2. Use `/figma-text` to confirm exact wording — never guess text from screenshots
3. `/figma-capture` before starting work on any page to get fresh reference
4. `/verify` after every implementation change to capture current state

---
*Created: 2026-03-03*
