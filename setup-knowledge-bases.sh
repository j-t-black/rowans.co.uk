#!/bin/bash
# Setup Knowledge Bases for Nuxt Ecosystem and Figma
# Creates local documentation repositories for offline/fast access
#
# Knowledge Base 1: Nuxt Ecosystem (Nuxt 4, NuxtUI, Vue, Nitro)
# Knowledge Base 2: Figma (Dev Mode, API, Plugins)

set -e  # Exit on error

KB_DIR="$HOME/dev/knowledge-bases"
echo "📚 Setting up knowledge bases in: $KB_DIR"
echo ""

# Create main directory
mkdir -p "$KB_DIR"
cd "$KB_DIR"

# ============================================
# KNOWLEDGE BASE 1: NUXT ECOSYSTEM
# ============================================
echo "🚀 [1/2] Setting up Nuxt Ecosystem knowledge base..."
echo "    (Nuxt 4, NuxtUI, Vue, Nitro)"
echo ""

mkdir -p nuxt-ecosystem
cd nuxt-ecosystem

# --- Nuxt 4 Core ---
echo "   📖 [1.1] Nuxt 4 core documentation..."
if [ -d "nuxt" ]; then
    echo "      ⚠️  Updating existing Nuxt docs..."
    cd nuxt
    git pull
    cd ..
else
    echo "      📥 Cloning Nuxt repository (docs only)..."
    git clone --depth 1 --filter=blob:none --sparse https://github.com/nuxt/nuxt nuxt-temp
    cd nuxt-temp
    git sparse-checkout set docs
    cd ..
    mv nuxt-temp/docs nuxt
    rm -rf nuxt-temp
    echo "      ✅ Nuxt 4 docs downloaded"
fi

# --- NuxtUI ---
echo "   🎨 [1.2] NuxtUI documentation..."
if [ -d "nuxt-ui" ]; then
    echo "      ⚠️  Updating existing NuxtUI docs..."
    cd nuxt-ui
    git pull
    cd ..
else
    echo "      📥 Cloning NuxtUI repository (docs only)..."
    git clone --depth 1 --filter=blob:none --sparse https://github.com/nuxt/ui nuxt-ui-temp
    cd nuxt-ui-temp
    git sparse-checkout set docs
    cd ..
    mv nuxt-ui-temp/docs nuxt-ui
    rm -rf nuxt-ui-temp
    echo "      ✅ NuxtUI docs downloaded"
fi

# --- Vue 3 ---
echo "   💚 [1.3] Vue 3 documentation..."
if [ -d "vue" ]; then
    echo "      ⚠️  Updating existing Vue docs..."
    cd vue
    git pull
    cd ..
else
    echo "      📥 Cloning Vue repository (docs only)..."
    git clone --depth 1 --filter=blob:none --sparse https://github.com/vuejs/docs vue-temp
    cd vue-temp
    git sparse-checkout set src
    cd ..
    mv vue-temp/src vue
    rm -rf vue-temp
    echo "      ✅ Vue 3 docs downloaded"
fi

# --- Nitro ---
echo "   ⚡ [1.4] Nitro documentation..."
if [ -d "nitro" ]; then
    echo "      ⚠️  Updating existing Nitro docs..."
    cd nitro
    git pull
    cd ..
else
    echo "      📥 Cloning Nitro repository (docs only)..."
    git clone --depth 1 --filter=blob:none --sparse https://github.com/unjs/nitro nitro-temp
    cd nitro-temp
    git sparse-checkout set docs
    cd ..
    mv nitro-temp/docs nitro
    rm -rf nitro-temp
    echo "      ✅ Nitro docs downloaded"
fi

# Create comprehensive README for Nuxt Ecosystem
cat > README.md << 'EOF'
# Nuxt Ecosystem Knowledge Base

Complete documentation for the Nuxt/Vue ecosystem in one place.

## Contents

### 📖 Nuxt 4
- **Path**: `./nuxt/`
- **Source**: https://github.com/nuxt/nuxt/tree/main/docs
- **Official**: https://nuxt.com/docs
- **Contains**: Core framework, composables, components, configuration

### 🎨 NuxtUI
- **Path**: `./nuxt-ui/`
- **Source**: https://github.com/nuxt/ui/tree/main/docs
- **Official**: https://ui.nuxt.com/docs
- **Contains**: UI components, theming, styling, examples

### 💚 Vue 3
- **Path**: `./vue/`
- **Source**: https://github.com/vuejs/docs/tree/main/src
- **Official**: https://vuejs.org/
- **Contains**: Vue fundamentals, composition API, reactivity

### ⚡ Nitro
- **Path**: `./nitro/`
- **Source**: https://github.com/unjs/nitro/tree/main/docs
- **Official**: https://nitro.unjs.io/
- **Contains**: Server engine, API routes, deployment

## Usage Examples

### Search across all docs:
```bash
# Find all references to useFetch
grep -r "useFetch" ./

# Find component examples
grep -r "<UButton" ./nuxt-ui/

# Find server API examples
grep -r "defineEventHandler" ./nuxt/
```

### Read specific docs:
```
Read: knowledge-bases/nuxt-ecosystem/nuxt/1.getting-started/1.introduction.md
Read: knowledge-bases/nuxt-ecosystem/nuxt-ui/components/button.md
Read: knowledge-bases/nuxt-ecosystem/vue/guide/essentials/reactivity-fundamentals.md
Read: knowledge-bases/nuxt-ecosystem/nitro/guide/introduction.md
```

### Common lookups:
- **Composables**: `./nuxt/3.api/3.composables/`
- **Components**: `./nuxt-ui/components/`
- **Vue API**: `./vue/api/`
- **Nitro Utils**: `./nitro/guide/utils/`

## Update All Docs

```bash
cd ~/dev/knowledge-bases/nuxt-ecosystem

# Update all in one go
for dir in nuxt nuxt-ui vue nitro; do
  if [ -d "$dir" ]; then
    echo "Updating $dir..."
    cd "$dir" && git pull && cd ..
  fi
done
```

---
*Last Updated*: $(date +%Y-%m-%d)
*Knowledge Base 1 of 2*
EOF

echo "   ✅ Nuxt Ecosystem knowledge base complete!"

cd "$KB_DIR"

# ============================================
# KNOWLEDGE BASE 2: FIGMA
# ============================================
echo ""
echo "🎨 [2/2] Setting up Figma knowledge base..."
echo "    (Dev Mode, REST API, Plugins)"
echo ""

mkdir -p figma
cd figma

# Figma doesn't have docs in a single git repo, so create structure for manual population
mkdir -p {dev-mode,rest-api,plugins,examples}

cat > README.md << 'EOF'
# Figma Knowledge Base

Documentation for Figma's developer tools and APIs.

## Contents

### 🛠️ Dev Mode
- **Path**: `./dev-mode/`
- **Official**: https://help.figma.com/hc/en-us/articles/15023124644247
- **Topics**: Inspect panel, code export, annotations, compare changes

### 🌐 REST API
- **Path**: `./rest-api/`
- **Official**: https://developers.figma.com/docs/rest-api/
- **Topics**: Files, images, comments, versions, webhooks

### 🔌 Plugins
- **Path**: `./plugins/`
- **Official**: https://www.figma.com/plugin-docs/
- **Topics**: Plugin API, manifest, UI, storage

### 💡 Examples
- **Path**: `./examples/`
- **Topics**: Common patterns, code snippets, best practices

## Manual Setup Required

Figma docs aren't available as a git repository. You can:

### Option 1: Create summaries manually
Create markdown files for the topics you use most:

```bash
cd ~/dev/knowledge-bases/figma

# Dev Mode guides
echo "# Getting Started with Dev Mode" > dev-mode/getting-started.md
echo "# Code Export" > dev-mode/code-export.md
echo "# Inspect Panel" > dev-mode/inspect-panel.md

# REST API reference
echo "# Files Endpoint" > rest-api/files.md
echo "# Images Endpoint" > rest-api/images.md
echo "# Rate Limits" > rest-api/rate-limits.md

# Plugin guides
echo "# Plugin Basics" > plugins/basics.md
echo "# Plugin API Reference" > plugins/api-reference.md
```

### Option 2: Web scrape
Use tools to download Figma's developer docs:

```bash
# Using wget (example)
wget --mirror --convert-links --page-requisites \
  --no-parent --adjust-extension \
  https://developers.figma.com/docs/

# Or use a markdown web scraper tool
```

### Option 3: Copy-paste key sections
As you reference Figma docs during development:
1. Copy relevant sections
2. Paste into appropriate markdown files here
3. Build up your knowledge base organically

## Quick Reference (Add Your Own)

### Common Dev Mode Actions
- Enable Dev Mode: `Shift+D`
- Export assets: Select element → Export
- View code: Select element → Code tab

### Common API Endpoints
- GET /v1/files/:key
- GET /v1/images/:key
- GET /v1/files/:key/nodes

### Rate Limits (as of 2026-02-05)
- Free tier: 6 requests/month
- Pro tier: Per-minute limits (see rate-limits.md)

---
*Created*: $(date +%Y-%m-%d)
*Knowledge Base 2 of 2*
*Note: Manual content population recommended*
EOF

# Create starter files
cat > dev-mode/getting-started.md << 'EOF'
# Getting Started with Dev Mode

**Official**: https://help.figma.com/hc/en-us/articles/15023124644247

## Enabling Dev Mode

1. Open a Figma Design file
2. Click the Dev Mode toggle (top toolbar)
3. Or press `Shift+D`

## Key Features

- **Inspect Panel**: Shows measurements, spacing, colors, fonts
- **Code Tab**: Auto-generated CSS, iOS, Android code
- **Export**: Download assets at specific sizes/formats
- **Annotations**: Designer notes and specs

## Usage with Anima Plugin

1. Enable Dev Mode
2. Open Plugins → Anima
3. Select frame to export
4. Choose framework (Vue/React/HTML)
5. Copy or download code

---
*Add more details as you learn*
EOF

cat > rest-api/rate-limits.md << 'EOF'
# Figma API Rate Limits

**Official**: https://developers.figma.com/docs/rest-api/rate-limits/

## Free Tier (Starter Plan)
- **File content requests**: 6 per MONTH
- Very restrictive for API-based workflows

## Pro Tier (Professional Plan)
- **File content requests**: Per-minute limits (not monthly)
- Dev or Full seat required
- Much more suitable for development work

## Best Practices
- Cache responses locally
- Batch requests when possible
- Check Retry-After header on 429 errors
- Consider Pro plan if API-dependent

---
*Last updated*: 2026-02-05
EOF

echo "   ⚠️  Figma knowledge base structure created"
echo "   📝 Manual content population recommended (see README.md)"

cd "$KB_DIR"

# ============================================
# SUMMARY
# ============================================
echo ""
echo "========================================"
echo "✅ Knowledge Base Setup Complete!"
echo "========================================"
echo ""
echo "Location: $KB_DIR"
echo ""
echo "📦 Knowledge Base 1: Nuxt Ecosystem"
echo "   └─ nuxt-ecosystem/"
echo "      ├─ nuxt/       (Nuxt 4 docs)"
echo "      ├─ nuxt-ui/    (NuxtUI docs)"
echo "      ├─ vue/        (Vue 3 docs)"
echo "      └─ nitro/      (Nitro docs)"
echo ""
echo "📦 Knowledge Base 2: Figma"
echo "   └─ figma/"
echo "      ├─ dev-mode/   (Dev Mode guides)"
echo "      ├─ rest-api/   (API reference)"
echo "      ├─ plugins/    (Plugin docs)"
echo "      └─ examples/   (Code examples)"
echo ""
echo "Usage in Claude Code:"
echo "  Read: knowledge-bases/nuxt-ecosystem/nuxt/guide/concepts/auto-imports.md"
echo "  Grep: 'useFetch' in knowledge-bases/nuxt-ecosystem/"
echo ""
echo "To link to your project:"
echo "  cd ~/dev/rowans-website-v2"
echo "  ln -s ~/dev/knowledge-bases ./knowledge-bases"
echo ""
echo "To update Nuxt ecosystem docs:"
echo "  cd ~/dev/knowledge-bases/nuxt-ecosystem"
echo "  for dir in nuxt nuxt-ui vue nitro; do"
echo "    cd \$dir && git pull && cd .."
echo "  done"
echo ""
echo "📝 Note: Figma KB requires manual content (see figma/README.md)"
echo ""
