import { chromium } from 'playwright'
import { mkdirSync } from 'fs'
import { join } from 'path'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3001'
const OUTPUT_DIR = join(process.env.HOME || '~', 'dev', 'rowans-website-mockup', 'public', 'screenshots')
const WAIT_MS = 3000

const ROUTES = [
  '/',
  '/about',
  '/birthday-cakes',
  '/contact',
  '/corporate',
  '/djs',
  '/drinks-menu',
  '/eats-drinks',
  '/groups',
  '/karaoke',
  '/kids',
  '/launch',
  '/line-upsevents',
  '/merch',
  '/organise',
  '/policies',
  '/pizza',
  '/radio',
  '/whats-on',
  '/yucatan',
]

const BREAKPOINTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 375, height: 812 },
] as const

function routeToFilename(route: string): string {
  return route === '/' ? 'index' : route.slice(1)
}

async function main() {
  // Create output directories
  for (const bp of BREAKPOINTS) {
    mkdirSync(join(OUTPUT_DIR, bp.name), { recursive: true })
  }

  const browser = await chromium.launch()

  for (const route of ROUTES) {
    const filename = routeToFilename(route)

    for (const bp of BREAKPOINTS) {
      const label = `${route} (${bp.name})`
      process.stdout.write(`Capturing ${label}... `)

      const context = await browser.newContext({
        viewport: { width: bp.width, height: bp.height },
      })
      const page = await context.newPage()

      try {
        await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle' })
        await page.waitForTimeout(WAIT_MS)

        const outputPath = join(OUTPUT_DIR, bp.name, `${filename}.png`)
        await page.screenshot({ path: outputPath, fullPage: true })
        console.log('done')
      } catch (err) {
        console.log(`FAILED: ${err}`)
      } finally {
        await context.close()
      }
    }
  }

  await browser.close()
  console.log(`\nAll done! Screenshots saved to ${OUTPUT_DIR}`)
}

main()
