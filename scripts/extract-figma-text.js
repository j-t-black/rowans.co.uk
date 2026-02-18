/**
 * Extract all text content from Figma published site
 * Usage: node scripts/extract-figma-text.js > figma-content.md
 */

import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIGMA_SITE_URL = 'https://story-method-86424349.figma.site/';

async function extractText() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  console.error('📝 Extracting text from Figma site...');
  await page.goto(FIGMA_SITE_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Extract all text content from the page
  const textContent = await page.evaluate(() => {
    const sections = [];

    // Get all text elements with their positions
    const textElements = Array.from(document.querySelectorAll('.textContents, p, h1, h2, h3, h4, h5, h6'));

    textElements.forEach((el) => {
      const text = el.textContent.trim();
      if (text && text.length > 0) {
        const rect = el.getBoundingClientRect();
        sections.push({
          text: text,
          y: Math.round(rect.top),
          tagName: el.tagName.toLowerCase(),
          classes: el.className
        });
      }
    });

    // Sort by vertical position
    sections.sort((a, b) => a.y - b.y);

    return sections;
  });

  await browser.close();

  // Output as markdown
  console.log('# Figma Site Text Content\n');
  console.log('> Extracted from: ' + FIGMA_SITE_URL);
  console.log('> Date: ' + new Date().toISOString());
  console.log('\n---\n');

  let currentY = 0;
  textContent.forEach((item, index) => {
    // Add section breaks for large gaps
    if (index > 0 && item.y - currentY > 200) {
      console.log('\n---\n');
    }

    // Format based on tag
    if (item.tagName === 'h1' || item.tagName === 'h2') {
      console.log(`\n## ${item.text}\n`);
    } else if (item.tagName === 'h3') {
      console.log(`\n### ${item.text}\n`);
    } else {
      console.log(item.text);
    }

    currentY = item.y;
  });

  console.error('\n✅ Text extraction complete!');
}

extractText()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('❌ Error:', error);
    process.exit(1);
  });

export { extractText };
