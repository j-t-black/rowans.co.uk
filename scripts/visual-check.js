#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🎨 Starting visual verification...\n');

const screenshotsDir = path.join(__dirname, '../tests/screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

const referencesDir = path.join(__dirname, '../tests/screenshots/references');
const figmaReference = path.join(referencesDir, 'home-figma.png');
const baseline = path.join(__dirname, '../tests/visual.spec.ts-snapshots/home-baseline-chromium-darwin.png');

const baselineDir = path.dirname(baseline);
if (!fs.existsSync(baselineDir)) {
  fs.mkdirSync(baselineDir, { recursive: true });
}

if (fs.existsSync(figmaReference) && !fs.existsSync(baseline)) {
  console.log('📋 Copying Figma reference as baseline...');
  fs.copyFileSync(figmaReference, baseline);
}

try {
  console.log('📸 Taking screenshot and comparing to Figma...\n');
  execSync('npx playwright test --project=chromium', {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..')
  });
  console.log('\n✅ Page matches Figma design!\n');
} catch (error) {
  console.log('\n⚠️  Visual differences detected!');
  console.log('   Run: npx playwright show-report\n');
  process.exit(1);
}
