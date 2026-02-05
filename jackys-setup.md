# Jacky's Development Setup & Preferences

**Purpose**: Document setup preferences and workflow for reuse in future projects.

## Session Management & Crash Recovery
- **Always create PROJECT_CONTEXT.md** at start of new projects
  - Captures: project overview, tech stack, pages/features, design assets, decisions
  - Updates: Keep current as work progresses
- **Git setup is critical**
  - Initialize git immediately
  - Create GitHub repo and push early
  - Commit frequently with descriptive messages
  - Protects against conversation/session crashes

## Project Initialization Workflow
1. Create memory/context files (PROJECT_CONTEXT.md, jackys-setup.md)
2. Initialize git repository
3. Create and push to GitHub
4. Set up .env file with API tokens (add to .gitignore)
5. Commit initial setup before major work begins

## Tech Stack Preferences
- **Framework**: Nuxt 4 (latest stable)
- **UI Library**: NuxtUI (latest)
- **Language**: TypeScript
- **Deployment**: Vercel
- **Code Standards**:
  - Reusable components
  - DRY (Don't Repeat Yourself) principles
  - Best practices for maintainability

## Design Integration
- **Figma API Limitations**: Free tier only allows 6 file requests per MONTH
  - Be aware of rate limits before relying on API
  - Consider Pro plan for projects needing frequent API access
  - Alternative: Use screenshots + manual asset export from Figma UI
- Store Figma tokens in .env
- Use regular Figma Design files (not Figma Sites - API limitation)
- Keep design-assets folder for static assets
- For initial development: Work from screenshots to avoid API limits

## Knowledge Base System (RAG Approach)
- **Local documentation** instead of web searches
  - Create `~/dev/knowledge-bases/` directory
  - Download official docs for: Nuxt 4, NuxtUI, Figma
  - Use `setup-knowledge-bases.sh` script to automate
  - Symlink to projects: `ln -s ~/dev/knowledge-bases ./knowledge-bases`
- **Benefits**:
  - No rate limits or API calls
  - Works offline
  - Faster than web searches
  - Reusable across all projects
  - Always have consistent, official docs
- **Usage**: Claude can Read or Grep the markdown files directly
- **Maintenance**: Update quarterly with `git pull`

## Development Approach
- **Setup is important** - take time to get foundation right
- Ask questions one at a time for clarity
- Use TodoWrite tool to track progress
- Create detailed implementation plans before coding
- Use local knowledge bases instead of web searches when possible

## Communication Style
- One question at a time
- Use screenshots when helpful for visual context
- Confirm understanding before proceeding

## Future Projects
(To be expanded as we discover more preferences)

---
*Last Updated: 2026-02-05*
*Project: Rowan's Website (rowans.co.uk)*
