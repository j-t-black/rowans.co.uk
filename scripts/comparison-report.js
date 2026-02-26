/**
 * Generate side-by-side HTML comparison report
 * Usage: node scripts/comparison-report.js
 * Output: tests/screenshots/comparison/mobile-report.html
 */

import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const screenshotDir = path.join(__dirname, '../tests/screenshots');
const figmaDir = path.join(screenshotDir, 'figma-mobile');
const implDir = path.join(screenshotDir, 'impl-mobile');
const compDir = path.join(screenshotDir, 'comparison');

if (!fs.existsSync(compDir)) fs.mkdirSync(compDir, { recursive: true });

const figmaFiles = fs.existsSync(figmaDir) ? fs.readdirSync(figmaDir).filter(f => f.endsWith('.png')) : [];
const implFiles = fs.existsSync(implDir) ? fs.readdirSync(implDir).filter(f => f.endsWith('.png')) : [];

const allPages = [...new Set([...figmaFiles, ...implFiles])].sort();

const rows = allPages.map(file => {
  const name = file.replace('.png', '');
  const hasFigma = figmaFiles.includes(file);
  const hasImpl = implFiles.includes(file);
  const figmaSrc = hasFigma ? `../figma-mobile/${file}` : '';
  const implSrc = hasImpl ? `../impl-mobile/${file}` : '';

  return `
    <div class="page-row">
      <h2>/${name === 'index' ? '' : name}</h2>
      <div class="compare">
        <div class="col">
          <h3>Figma</h3>
          ${hasFigma ? `<img src="${figmaSrc}" alt="Figma ${name}" />` : '<p class="missing">No reference</p>'}
        </div>
        <div class="col">
          <h3>Implementation</h3>
          ${hasImpl ? `<img src="${implSrc}" alt="Impl ${name}" />` : '<p class="missing">No screenshot</p>'}
        </div>
      </div>
    </div>`;
}).join('\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Mobile Comparison Report</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #1a1a1a; color: #fff; font-family: system-ui; padding: 20px; }
    h1 { text-align: center; margin-bottom: 30px; }
    .page-row { margin-bottom: 40px; border-bottom: 1px solid #333; padding-bottom: 20px; }
    .page-row h2 { margin-bottom: 10px; color: #aaa; }
    .compare { display: flex; gap: 20px; }
    .col { flex: 1; }
    .col h3 { text-align: center; margin-bottom: 8px; color: #888; }
    .col img { width: 100%; border: 1px solid #333; border-radius: 4px; }
    .missing { text-align: center; color: #666; padding: 40px; border: 1px dashed #444; border-radius: 4px; }
  </style>
</head>
<body>
  <h1>Mobile Comparison Report (375x812)</h1>
  ${rows}
</body>
</html>`;

const reportPath = path.join(compDir, 'mobile-report.html');
fs.writeFileSync(reportPath, html);
console.log(`Report generated: ${reportPath}`);
console.log(`Pages: ${allPages.length} (${figmaFiles.length} Figma, ${implFiles.length} impl)`);
