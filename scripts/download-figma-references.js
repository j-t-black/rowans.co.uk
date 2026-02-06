#!/usr/bin/env node

/**
 * Download Figma References
 * Downloads screenshots from Figma for each page to use as visual test baselines
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;

if (!FIGMA_ACCESS_TOKEN || !FIGMA_FILE_KEY) {
  console.error('❌ Missing Figma credentials in .env file');
  process.exit(1);
}

// Page frames from Figma with their node IDs
// Format: 'page-viewport': 'node-id'
const pages = {
  'home-desktop': '2:3',   // Desktop frame for home
  'home-mobile': '2:76',   // Mobile frame for home
  // Add more pages as needed:
  // 'eats-drinks-desktop': 'NODE_ID',
  // 'eats-drinks-mobile': 'NODE_ID',
  // etc.
};

async function downloadFigmaReference(pageName, nodeId) {
  console.log(`📥 Downloading Figma reference for ${pageName}...`);

  try {
    // Get image URL from Figma API
    const { stdout } = await execAsync(
      `curl -s -H "X-Figma-Token: ${FIGMA_ACCESS_TOKEN}" "https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${nodeId}&format=png&scale=1"`,
      { shell: '/bin/bash' }
    );

    const response = JSON.parse(stdout);

    if (response.err) {
      console.error(`   ❌ Error: ${response.err}`);
      return false;
    }

    const imageUrl = response.images[nodeId];

    if (!imageUrl) {
      console.error(`   ❌ No image URL returned for ${pageName}`);
      return false;
    }

    // Download the image
    const outputDir = path.join(__dirname, '../tests/screenshots/references');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, `${pageName}-figma.png`);

    await execAsync(
      `curl -s "${imageUrl}" -o "${outputPath}"`,
      { shell: '/bin/bash' }
    );

    const stats = fs.statSync(outputPath);
    console.log(`   ✅ Downloaded ${pageName} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
    return true;

  } catch (error) {
    console.error(`   ❌ Failed to download ${pageName}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🎨 Downloading Figma references for visual testing...\n');

  let successCount = 0;
  let totalCount = 0;

  for (const [pageName, nodeId] of Object.entries(pages)) {
    totalCount++;
    const success = await downloadFigmaReference(pageName, nodeId);
    if (success) successCount++;
  }

  console.log(`\n✅ Downloaded ${successCount}/${totalCount} references`);
  console.log(`📁 Saved to: tests/screenshots/references/\n`);

  if (successCount < totalCount) {
    process.exit(1);
  }
}

main().catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
});
