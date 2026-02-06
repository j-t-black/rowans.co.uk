#!/usr/bin/env node

/**
 * Download all hero layers from Figma
 * The hero is a composite of multiple layered images
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;

if (!FIGMA_ACCESS_TOKEN || !FIGMA_FILE_KEY) {
  console.error('❌ Missing Figma credentials in .env file');
  process.exit(1);
}

// All hero layer IDs from the home desktop frame
const heroLayers = {
  'hero-16': '2:4',
  'hero-15': '2:5',
  'hero-14': '2:6',
  'hero-13': '2:7',
  'hero-11': '2:8',
  'hero-09': '2:11',
  'hero-08': '2:12',
  'hero-07': '2:13',
  'hero-04': '2:14',
  'hero-02': '2:15',
  'hero-1.3': '2:16',
  'hero-1.2': '2:17',
  'hero-gradient': '2:21',
};

async function downloadLayer(layerName, nodeId) {
  console.log(`📥 Downloading ${layerName}...`);

  try {
    // Get image URL from Figma API
    const { stdout } = await execAsync(
      `curl -s -H "X-Figma-Token: ${FIGMA_ACCESS_TOKEN}" "https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${nodeId}&format=png&scale=2"`,
      { shell: '/bin/bash' }
    );

    const response = JSON.parse(stdout);

    if (response.err) {
      console.error(`   ❌ Error: ${response.err}`);
      return false;
    }

    const imageUrl = response.images[nodeId];

    if (!imageUrl) {
      console.error(`   ❌ No image URL returned for ${layerName}`);
      return false;
    }

    // Download the image
    const outputDir = path.join(__dirname, '../public/hero-layers');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, `${layerName}.png`);

    await execAsync(
      `curl -s "${imageUrl}" -o "${outputPath}"`,
      { shell: '/bin/bash' }
    );

    const stats = fs.statSync(outputPath);
    console.log(`   ✅ ${layerName} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
    return true;

  } catch (error) {
    console.error(`   ❌ Failed to download ${layerName}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🎨 Downloading hero layer images from Figma...\n');

  let successCount = 0;
  let totalCount = 0;

  for (const [layerName, nodeId] of Object.entries(heroLayers)) {
    totalCount++;
    const success = await downloadLayer(layerName, nodeId);
    if (success) successCount++;

    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log(`\n✅ Downloaded ${successCount}/${totalCount} hero layers`);
  console.log(`📁 Saved to: public/hero-layers/\n`);

  if (successCount < totalCount) {
    process.exit(1);
  }
}

main().catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
});
