#!/usr/bin/env node
/**
 * Match Figma Assets to Local Files
 *
 * This script matches image references from Figma to local asset files
 * by comparing names and creating a mapping file.
 *
 * Usage: node scripts/match-assets.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Matching Figma assets to local files...\n');

// Load extracted image references
const imageRefsPath = path.join(__dirname, '..', 'figma-data', 'image-references.json');
if (!fs.existsSync(imageRefsPath)) {
  console.error('❌ Error: Run "npm run figma:extract" first!');
  process.exit(1);
}

const imageReferences = JSON.parse(fs.readFileSync(imageRefsPath, 'utf8'));

// Scan local design-assets folder
const assetsDir = path.join(__dirname, '..', 'design-assets');
const localAssets = [];

function scanDirectory(dir, baseDir = dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanDirectory(fullPath, baseDir);
    } else if (/\.(png|jpg|jpeg|svg|gif|webp|mp4|mov)$/i.test(file)) {
      const relativePath = path.relative(baseDir, fullPath);
      localAssets.push({
        filename: file,
        path: relativePath,
        fullPath: fullPath,
        nameNormalized: normalizeAssetName(file)
      });
    }
  });
}

// Normalize asset names for matching
function normalizeAssetName(name) {
  return name
    .toLowerCase()
    .replace(/\.(png|jpg|jpeg|svg|gif|webp|mp4|mov)$/i, '')
    .replace(/[^a-z0-9]/g, '');
}

// Calculate similarity score between two strings
function similarityScore(str1, str2) {
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();

  // Exact match
  if (s1 === s2) return 100;

  // Check if one contains the other
  if (s1.includes(s2) || s2.includes(s1)) return 80;

  // Levenshtein distance-based scoring
  const longer = s1.length > s2.length ? s1 : s2;
  const shorter = s1.length > s2.length ? s2 : s1;

  if (longer.length === 0) return 100;

  const editDistance = levenshteinDistance(longer, shorter);
  return ((longer.length - editDistance) / longer.length) * 100;
}

// Levenshtein distance algorithm
function levenshteinDistance(str1, str2) {
  const matrix = [];

  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[str2.length][str1.length];
}

// Match Figma images to local assets
function matchAssets() {
  console.log(`📁 Found ${localAssets.length} local assets`);
  console.log(`🎨 Found ${Object.keys(imageReferences).length} Figma image references\n`);

  const matches = {};
  const unmatched = [];

  Object.entries(imageReferences).forEach(([imageRef, usages]) => {
    // Extract possible asset names from usage paths
    const possibleNames = usages.map(usage => {
      // Get the node name from the path
      const nodeName = usage.nodeName || usage.path.split(' > ').pop();
      return normalizeAssetName(nodeName);
    });

    // Find best match
    let bestMatch = null;
    let bestScore = 0;

    localAssets.forEach(asset => {
      possibleNames.forEach(name => {
        const score = similarityScore(name, asset.nameNormalized);
        if (score > bestScore) {
          bestScore = score;
          bestMatch = asset;
        }
      });
    });

    if (bestMatch && bestScore > 60) {
      matches[imageRef] = {
        localAsset: bestMatch.path,
        confidence: Math.round(bestScore),
        figmaNodeName: usages[0].nodeName,
        usedIn: usages.map(u => u.path)
      };
      console.log(`✅ ${bestMatch.filename} (${Math.round(bestScore)}% match)`);
    } else {
      unmatched.push({
        imageRef,
        figmaNodeName: usages[0].nodeName,
        usedIn: usages.map(u => u.path)
      });
      console.log(`⚠️  No match for: ${usages[0].nodeName}`);
    }
  });

  console.log(`\n📊 Results:`);
  console.log(`   ✅ Matched: ${Object.keys(matches).length}`);
  console.log(`   ⚠️  Unmatched: ${unmatched.length}\n`);

  return { matches, unmatched };
}

// Main execution
async function main() {
  try {
    // Scan local assets
    console.log('📂 Scanning design-assets folder...');
    scanDirectory(assetsDir);
    console.log();

    // Match assets
    const { matches, unmatched } = matchAssets();

    // Save results
    const outputPath = path.join(__dirname, '..', 'figma-data', 'asset-matches.json');
    fs.writeFileSync(outputPath, JSON.stringify({ matches, unmatched }, null, 2));

    console.log(`💾 Asset mapping saved to: figma-data/asset-matches.json\n`);

    if (unmatched.length > 0) {
      console.log('💡 Tip: Unmatched assets can be:');
      console.log('   1. Downloaded via Figma API image endpoint');
      console.log('   2. Exported manually from Figma');
      console.log('   3. Matched manually in asset-matches.json\n');
    }

    console.log('✨ Asset matching complete!\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
