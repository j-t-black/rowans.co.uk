/**
 * Universal Playwright screenshot capture
 * Usage: node scripts/capture-page.js <url> <viewport> <output> [--wait=ms] [--full-page]
 * Example: node scripts/capture-page.js http://localhost:3001/ 375x812 /tmp/mobile.png --full-page
 */

import { chromium } from '@playwright/test';
import path from 'path';
import fs from 'fs';

const args = process.argv.slice(2);
const url = args[0];
const viewport = args[1] || '375x812';
const output = args[2] || '/tmp/capture.png';
const fullPage = args.includes('--full-page');
const waitArg = args.find(a => a.startsWith('--wait='));
const waitMs = waitArg ? parseInt(waitArg.split('=')[1]) : 3000;

if (!url) {
  console.error('Usage: node scripts/capture-page.js <url> <viewport> <output> [--wait=ms] [--full-page]');
  process.exit(1);
}

const [width, height] = viewport.split('x').map(Number);

const outputDir = path.dirname(output);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width, height },
  deviceScaleFactor: 2
});
const page = await context.newPage();

console.log(`Navigating to ${url} (${width}x${height})...`);
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(waitMs);

await page.screenshot({ path: output, fullPage });
console.log(`Saved: ${output}`);

await browser.close();
