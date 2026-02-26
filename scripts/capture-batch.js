/**
 * Batch screenshot capture for Figma references and implementation
 * Usage: node scripts/capture-batch.js <figma|impl|both> [--viewport=375x812]
 * Output: tests/screenshots/figma-mobile/, impl-mobile/, comparison/
 */

import { chromium } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIGMA_BASE = 'https://story-method-86424349.figma.site';
const IMPL_BASE = 'http://localhost:3001';

// Page registry: route → Figma path (null = no Figma reference)
const PAGES = {
  '/': '/',
  '/eats-drinks': '/eats-drinks',
  '/whats-on': '/whats-on',
  '/radio': '/radio',
  '/merch': '/merch',
  '/policies': '/policies',
  '/drinks-menu': '/drinks-menu',
  '/birthday-cakes': '/birthday-cakes',
  '/groups': '/groups',
  '/kids': '/kids',
  '/corporate': '/corporate',
  '/launch': '/launch',
  '/line-upsevents': '/line-upsevents',
  '/organise': null,
  '/yucatan': null,
  '/pizza': null,
  '/djs': null,
  '/about': null,
  '/contact': null,
  '/karaoke': null,
};

const args = process.argv.slice(2);
const mode = args[0] || 'both';
const vpArg = args.find(a => a.startsWith('--viewport='));
const viewport = vpArg ? vpArg.split('=')[1] : '375x812';
const [width, height] = viewport.split('x').map(Number);

const screenshotDir = path.join(__dirname, '../tests/screenshots');
const figmaDir = path.join(screenshotDir, 'figma-mobile');
const implDir = path.join(screenshotDir, 'impl-mobile');

for (const dir of [figmaDir, implDir]) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function capturePages(baseUrl, pages, outputDir, label) {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 2
  });

  const results = [];
  for (const [route, figmaPath] of Object.entries(pages)) {
    const url = baseUrl === FIGMA_BASE
      ? (figmaPath ? `${baseUrl}${figmaPath}` : null)
      : `${baseUrl}${route}`;

    if (!url) {
      console.log(`  Skip ${route} (no ${label} reference)`);
      continue;
    }

    const name = route === '/' ? 'index' : route.slice(1);
    const filepath = path.join(outputDir, `${name}.png`);

    try {
      const page = await context.newPage();
      console.log(`  ${label}: ${url}`);
      await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
      await page.waitForTimeout(3000);
      await page.screenshot({ path: filepath, fullPage: true });
      await page.close();
      results.push({ route, filepath, status: 'ok' });
    } catch (err) {
      console.error(`  FAIL ${route}: ${err.message}`);
      results.push({ route, filepath: null, status: 'error', error: err.message });
    }
  }

  await browser.close();
  return results;
}

console.log(`Batch capture: mode=${mode}, viewport=${width}x${height}\n`);

if (mode === 'figma' || mode === 'both') {
  console.log('--- Figma references ---');
  await capturePages(FIGMA_BASE, PAGES, figmaDir, 'Figma');
}

if (mode === 'impl' || mode === 'both') {
  console.log('\n--- Implementation ---');
  await capturePages(IMPL_BASE, PAGES, implDir, 'Impl');
}

console.log('\nDone. Run: node scripts/comparison-report.js');
