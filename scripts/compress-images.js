import sharp from 'sharp'
import { readdir, stat, unlink } from 'fs/promises'
import { join, extname, basename } from 'path'

const ASSETS_DIR = new URL('../public/design-assets', import.meta.url).pathname

const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg'])

// Logos/icons — preserve quality + alpha
const LOGO_PATTERNS = [
  'MAIN LOGO', 'BURGER TRANS', 'LANE TRANS', 'BUTTON BASE',
  'AUDIO BUTTON', 'ROWANS AUDIO LOGO', 'merch-vinyl-logo', 'PUNK CAKES'
]

function isLogo(filename) {
  return LOGO_PATTERNS.some(p => filename.includes(p))
}

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...await getFiles(fullPath))
    } else if (IMAGE_EXTS.has(extname(entry.name).toLowerCase())) {
      files.push(fullPath)
    }
  }
  return files
}

async function compress() {
  const files = await getFiles(ASSETS_DIR)
  let totalBefore = 0
  let totalAfter = 0

  console.log(`Found ${files.length} images to convert\n`)

  for (const file of files) {
    const name = basename(file)
    const outPath = file.replace(/\.(png|jpe?g)$/i, '.webp')
    const before = (await stat(file)).size

    let pipeline = sharp(file)

    if (isLogo(name)) {
      // Logos: high quality, preserve alpha, no resize
      pipeline = pipeline.webp({ quality: 90 })
    } else {
      // Photos/heroes: resize to max 2560px wide, quality 80
      pipeline = pipeline.resize({ width: 2560, withoutEnlargement: true }).webp({ quality: 80 })
    }

    await pipeline.toFile(outPath)
    const after = (await stat(outPath)).size

    totalBefore += before
    totalAfter += after

    const pctSaved = ((1 - after / before) * 100).toFixed(1)
    console.log(`${name} → ${basename(outPath)}  ${fmt(before)} → ${fmt(after)}  (${pctSaved}% saved)`)
  }

  console.log(`\nTotal: ${fmt(totalBefore)} → ${fmt(totalAfter)}  (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}% saved)`)

  // Delete originals
  console.log('\nDeleting originals...')
  for (const file of files) {
    await unlink(file)
    console.log(`  deleted ${basename(file)}`)
  }

  console.log('\nDone!')
}

function fmt(bytes) {
  if (bytes > 1024 * 1024) return (bytes / 1024 / 1024).toFixed(1) + 'MB'
  return (bytes / 1024).toFixed(0) + 'KB'
}

compress().catch(console.error)
