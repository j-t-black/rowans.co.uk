/**
 * Capture reference screenshots from Figma published site
 * Usage: node scripts/capture-figma-reference.js [section-name]
 */

import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIGMA_SITE_URL = 'https://story-method-86424349.figma.site/';
const OUTPUT_DIR = path.join(__dirname, '../tests/screenshots/figma-references');

// Section selectors for focused captures
const SECTION_POSITIONS = {
  'hero': { scrollY: 0, height: 1000 },
  'welcome': { scrollY: 800, height: 800 },
  'party': { scrollY: 1600, height: 800 },
  'eats': { scrollY: 2400, height: 1200 },
  'audio': { scrollY: 3600, height: 1000 },
  'visit': { scrollY: 4600, height: 800 },
  'location': { scrollY: 5400, height: 800 }
};

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function captureReference(sectionName = 'full-page', options = {}) {
  const {
    highRes = false,
    zoom = 1
  } = options;

  // Use higher resolution for better text readability
  const viewport = highRes
    ? { width: 3840, height: 2160 }  // 4K
    : { width: 1920, height: 1080 };  // HD

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: viewport,
    deviceScaleFactor: zoom
  });
  const page = await context.newPage();

  console.log(`📸 Navigating to Figma site: ${FIGMA_SITE_URL}`);
  await page.goto(FIGMA_SITE_URL, {
    waitUntil: 'networkidle',
    timeout: 60000
  });

  // Wait for content to load
  await page.waitForTimeout(3000);

  const timestamp = Date.now();
  const resLabel = highRes ? '-4k' : '';
  const zoomLabel = zoom > 1 ? `-${zoom}x` : '';
  const filename = `figma-${sectionName}${resLabel}${zoomLabel}-${timestamp}.png`;
  const filepath = path.join(OUTPUT_DIR, filename);

  if (sectionName === 'full-page') {
    // Capture full page
    console.log('📸 Capturing full page screenshot...');
    await page.screenshot({
      path: filepath,
      fullPage: true
    });
  } else if (SECTION_POSITIONS[sectionName]) {
    // Capture specific section with scroll and clip
    const section = SECTION_POSITIONS[sectionName];
    console.log(`📸 Capturing section: ${sectionName} (scroll: ${section.scrollY}px)...`);

    // Scroll to section
    await page.evaluate((y) => window.scrollTo(0, y), section.scrollY);
    await page.waitForTimeout(500);

    // Capture with clip
    await page.screenshot({
      path: filepath,
      clip: {
        x: 0,
        y: 0,
        width: viewport.width,
        height: section.height
      }
    });
  } else {
    // Default to full page for unknown sections
    console.log(`📸 Capturing full page (section "${sectionName}" not found)...`);
    await page.screenshot({
      path: filepath,
      fullPage: true
    });
  }

  console.log(`✅ Screenshot saved: ${filepath}`);
  console.log(`📁 Relative path: tests/screenshots/figma-references/${filename}`);

  await browser.close();
  return filepath;
}

// Run if called directly
const sectionName = process.argv[2] || 'full-page';
const highRes = process.argv.includes('--high-res') || process.argv.includes('--4k');
const zoomArg = process.argv.find(arg => arg.startsWith('--zoom='));
const zoom = zoomArg ? parseFloat(zoomArg.split('=')[1]) : 1;

captureReference(sectionName, { highRes, zoom })
  .then(() => {
    console.log('✅ Done!');
    console.log('\nOptions:');
    console.log('  --high-res or --4k    Capture at 4K resolution');
    console.log('  --zoom=2              Capture at 2x zoom for sharper text');
    console.log('\nAvailable sections:');
    console.log('  hero, welcome, party, eats, audio, visit, location, full-page');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Error:', error);
    process.exit(1);
  });

export { captureReference };
