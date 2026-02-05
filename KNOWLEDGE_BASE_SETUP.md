# Local Knowledge Base Setup Plan

**Goal**: Create local RAG-style knowledge bases for Nuxt 4, NuxtUI, and Figma docs that can be reused across projects without internet API calls.

---

## Benefits

1. ✅ **No rate limits** - All docs available locally
2. ✅ **Faster** - No web searches or API calls needed
3. ✅ **Offline capable** - Works without internet
4. ✅ **Reusable** - Use across multiple projects
5. ✅ **Cost effective** - No API usage costs
6. ✅ **Consistent** - Same docs every session

---

## Approach: Simple Markdown Knowledge Base

Instead of complex vector databases, we'll use a simpler approach:
- Download official documentation as markdown files
- Organize into structured folders
- Use file-based semantic search (Claude can read these directly)
- Keep them in a shared location for reuse

---

## Knowledge Bases to Create

### 1. Nuxt 4 Documentation
- **Source**: https://github.com/nuxt/nuxt/tree/main/docs
- **Content**: API reference, guides, examples
- **Size**: ~few MB of markdown

### 2. NuxtUI Documentation
- **Source**: https://github.com/nuxt/ui (need to find docs location)
- **Content**: Component API, styling, examples
- **Size**: ~few MB of markdown

### 3. Figma Documentation
- **Source**: https://www.figma.com/developers (may need scraping or manual download)
- **Content**: REST API, Dev Mode, plugins
- **Size**: ~few MB of markdown/HTML

---

## Implementation Plan

### Step 1: Create Knowledge Base Directory Structure

```bash
~/dev/knowledge-bases/
├── nuxt-4/
│   ├── README.md
│   ├── api/
│   ├── guide/
│   └── examples/
├── nuxt-ui/
│   ├── README.md
│   ├── components/
│   └── composables/
└── figma/
    ├── README.md
    ├── rest-api/
    ├── dev-mode/
    └── plugins/
```

### Step 2: Download Documentation

#### For Nuxt 4:
```bash
cd ~/dev/knowledge-bases
git clone --depth 1 --filter=blob:none --sparse https://github.com/nuxt/nuxt
cd nuxt
git sparse-checkout set docs
mv docs ../nuxt-4
cd ..
rm -rf nuxt
```

#### For NuxtUI:
```bash
# Need to find official docs repo
# Likely: https://github.com/nuxt/ui
```

#### For Figma:
```bash
# May need web scraping or manual download
# Figma docs: https://developers.figma.com/docs
```

### Step 3: Create Index Files

Create a `README.md` in each knowledge base with:
- Table of contents
- Quick reference links
- Common use cases
- Last updated date

### Step 4: Add to Project

Option A: Symlink to shared location
```bash
ln -s ~/dev/knowledge-bases ./knowledge-bases
```

Option B: Copy into project
```bash
cp -r ~/dev/knowledge-bases ./knowledge-bases
```

---

## Usage in Claude Code

### Method 1: Direct File Reading
Claude can read markdown files directly:
```
Read file: knowledge-bases/nuxt-4/guide/directory-structure.md
```

### Method 2: Grep Search
Search across all knowledge base files:
```
Grep pattern: "useFetch" in knowledge-bases/nuxt-4/
```

### Method 3: Context Loading
Load relevant docs at start of session:
```
Read these files for context:
- knowledge-bases/nuxt-4/api/composables.md
- knowledge-bases/nuxt-ui/components/button.md
```

---

## Advantages Over Web Search

### Current (Web Search):
- Rate limited by search API
- Requires internet
- May get outdated results
- Each search costs tokens
- Inconsistent quality

### Proposed (Local KB):
- No rate limits
- Works offline
- Always current (when you update)
- Just file reads (cheaper)
- Consistent, official docs

---

## Maintenance

### Updating Knowledge Bases
```bash
# Update Nuxt docs
cd ~/dev/knowledge-bases/nuxt-4
git pull

# Update quarterly or when major versions release
```

### Adding New KBs
```bash
# Add new framework docs
cd ~/dev/knowledge-bases
git clone <new-framework-docs>
# Organize and create README
```

---

## Alternative: Pre-Process Docs

For even better performance, we could:

1. **Create summary files**
   - Extract key concepts from each doc
   - Create quick-reference guides

2. **Create cheat sheets**
   - Common patterns
   - API quick reference
   - Examples library

3. **Tag by category**
   - Beginner / Advanced
   - Components / Composables / Utils
   - Common use cases

---

## Implementation Script

I'll create a bash script to automate this:

```bash
#!/bin/bash
# setup-knowledge-bases.sh

KB_DIR="$HOME/dev/knowledge-bases"
mkdir -p "$KB_DIR"

echo "Setting up Nuxt 4 knowledge base..."
# Download Nuxt 4 docs
cd "$KB_DIR"
git clone --depth 1 --filter=blob:none --sparse https://github.com/nuxt/nuxt nuxt-temp
cd nuxt-temp
git sparse-checkout set docs
mv docs ../nuxt-4
cd ..
rm -rf nuxt-temp

echo "Setting up NuxtUI knowledge base..."
# Download NuxtUI docs (TBD - need correct repo)

echo "Setting up Figma knowledge base..."
# Download Figma docs (TBD - may need scraping)

echo "Knowledge bases setup complete at: $KB_DIR"
```

---

## Sources & References

- [Building a Markdown Knowledge Ingestor for RAG with LangChain](https://medium.com/@vishalkhushlani123/building-a-markdown-knowledge-ingestor-for-rag-with-langchain-ba201515f6c4)
- [GitHub - kevwan/rag-agent](https://github.com/kevwan/rag-agent)
- [Nuxt Documentation GitHub](https://github.com/nuxt/nuxt/tree/main/docs)
- [Nuxt Content Documentation](https://github.com/nuxt/content)
- [Figma Developers](https://developers.figma.com/docs)

---

## Next Steps

1. ⏭️ Find correct repos for NuxtUI and Figma docs
2. ⏭️ Create download script
3. ⏭️ Test with one knowledge base (Nuxt 4)
4. ⏭️ Verify Claude can read and use effectively
5. ⏭️ Document usage patterns in jackys-setup.md
6. ⏭️ Create for all three frameworks

---

*Created: 2026-02-05*
*Status: Planning Phase*
