#!/usr/bin/env node
/**
 * Generate Vue Components from Figma Data
 *
 * This script generates Vue/Nuxt components from extracted Figma data:
 * - Creates component files with Tailwind styling
 * - Generates Tailwind config from design tokens
 * - Maps assets to local files
 * - Fills in text content
 *
 * Usage: node scripts/generate-code.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('⚙️  Generating Vue components from Figma data...\n');

// Load extracted data
const dataDir = path.join(__dirname, '..', 'figma-data');

const designTokens = JSON.parse(
  fs.readFileSync(path.join(dataDir, 'design-tokens.json'), 'utf8')
);
const componentStructure = JSON.parse(
  fs.readFileSync(path.join(dataDir, 'component-structure.json'), 'utf8')
);
const textContent = JSON.parse(
  fs.readFileSync(path.join(dataDir, 'text-content.json'), 'utf8')
);
const assetMatches = JSON.parse(
  fs.readFileSync(path.join(dataDir, 'asset-matches.json'), 'utf8')
);

// Generate Tailwind config
function generateTailwindConfig() {
  console.log('🎨 Generating Tailwind config...');

  const config = {
    theme: {
      extend: {
        colors: {},
        fontSize: {},
        spacing: {},
        borderRadius: {}
      }
    }
  };

  // Add colors
  designTokens.colors.forEach((color, index) => {
    const colorName = getColorName(color, index);
    config.theme.extend.colors[colorName] = color;
  });

  // Add font sizes
  designTokens.fontSizes.forEach(size => {
    config.theme.extend.fontSize[`${size}px`] = `${size}px`;
  });

  // Add spacing
  designTokens.spacing.forEach(space => {
    config.theme.extend.spacing[`${space}`] = `${space}px`;
  });

  // Add border radius
  designTokens.borderRadius.forEach(radius => {
    config.theme.extend.borderRadius[`${radius}`] = `${radius}px`;
  });

  const tailwindConfigContent = `// Tailwind Config - Generated from Figma Design Tokens
// Last updated: ${new Date().toISOString()}

export default ${JSON.stringify(config, null, 2)}
`;

  const configPath = path.join(__dirname, '..', 'tailwind.config.generated.js');
  fs.writeFileSync(configPath, tailwindConfigContent);

  console.log(`  ✅ tailwind.config.generated.js\n`);

  return config;
}

// Get semantic color name
function getColorName(hex, index) {
  const colorMap = {
    '#000000': 'black',
    '#ffffff': 'white',
    '#ff0000': 'primary',
    '#17181a': 'dark-bg'
  };

  return colorMap[hex.toLowerCase()] || `color-${index + 1}`;
}

// Generate page component
function generatePageComponent(section) {
  const pageName = section.name.replace('/', '').replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

  console.log(`  📄 Generating ${pageName} page...`);

  const desktopFrame = section.frames.find(f => f.name === 'Desktop');
  const mobileFrame = section.frames.find(f => f.name === 'Mobile');

  if (!desktopFrame) return null;

  // Build component template
  const template = `<template>
  <div class="page-${section.name.replace('/', '')}">
    <!-- Hero Section -->
    <section class="hero-section relative w-full" style="min-height: ${desktopFrame.height}px">
      ${generateHeroSection(desktopFrame, section)}
    </section>

    <!-- Content Sections -->
    ${generateContentSections(desktopFrame, section)}
  </div>
</template>

<script setup lang="ts">
// ${pageName} Page
// Generated from Figma: ${section.name}

interface Props {
  // Add props as needed
}

const props = withDefaults(defineProps<Props>(), {
  // defaults
})
</script>

<style scoped>
/* Page-specific styles */
.page-${section.name.replace('/', '')} {
  /* Generated styles */
}
</style>
`;

  return {
    name: pageName,
    filename: `${section.name.replace('/', '')}.vue`,
    content: template
  };
}

// Generate hero section
function generateHeroSection(frame, section) {
  const heroComponents = frame.components.children?.filter(c =>
    c.name.toLowerCase().includes('hero')
  ) || [];

  if (heroComponents.length === 0) return '<!-- No hero section -->';

  const heroComponent = heroComponents[0];
  const heroImageRef = findImageRef(heroComponent);
  const localAsset = heroImageRef ? assetMatches.matches[heroImageRef]?.localAsset : null;

  return `
      <!-- Hero Image -->
      ${localAsset ? `
      <img
        src="/design-assets/${localAsset}"
        alt="${section.name} hero"
        class="absolute inset-0 w-full h-full object-cover"
      />
      ` : '<!-- Hero image not found -->'}

      <!-- Hero Content -->
      <div class="relative z-10 container mx-auto px-4 py-20">
        <h1 class="text-6xl font-bold text-white mb-4">
          ${getTextForNode(heroComponent, 'h1') || 'Welcome'}
        </h1>
        <p class="text-xl text-white">
          ${getTextForNode(heroComponent, 'p') || ''}
        </p>
      </div>
  `;
}

// Generate content sections
function generateContentSections(frame, section) {
  // Filter out hero components
  const contentComponents = frame.components.children?.filter(c =>
    !c.name.toLowerCase().includes('hero') &&
    c.type !== 'RECTANGLE' // Skip background rectangles
  ) || [];

  if (contentComponents.length === 0) return '<!-- No content sections -->';

  return contentComponents.map(component => `
    <!-- ${component.name} -->
    <section class="content-section py-16">
      <div class="container mx-auto px-4">
        ${generateComponentContent(component)}
      </div>
    </section>
  `).join('\n');
}

// Generate component content
function generateComponentContent(component) {
  // Check if it's a button
  if (component.name.toLowerCase().includes('button')) {
    return `
      <UButton size="lg" color="primary">
        ${getTextForNode(component) || 'Button'}
      </UButton>
    `;
  }

  // Check if it has text
  const text = getTextForNode(component);
  if (text) {
    return `<p class="text-lg">${text}</p>`;
  }

  return `<!-- ${component.name} -->`;
}

// Find image reference in component tree
function findImageRef(component) {
  // Recursively search for image references
  // This is simplified - in real implementation would search deeper
  return null;
}

// Get text content for a node
function getTextForNode(component, type = null) {
  // Search text content for matching node name
  for (const [path, text] of Object.entries(textContent)) {
    if (path.includes(component.name)) {
      return text;
    }
  }
  return null;
}

// Main execution
async function main() {
  try {
    console.log('📦 Loaded data:');
    console.log(`   - ${designTokens.colors.length} colors`);
    console.log(`   - ${Object.keys(textContent).length} text nodes`);
    console.log(`   - ${Object.keys(assetMatches.matches).length} matched assets`);
    console.log(`   - ${componentStructure[0].sections.length} sections\n`);

    // Generate Tailwind config
    generateTailwindConfig();

    // Generate page components
    console.log('📄 Generating page components...');

    const outputDir = path.join(__dirname, '..', 'generated-components');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    let generated = 0;
    componentStructure[0].sections.forEach(section => {
      const pageComponent = generatePageComponent(section);

      if (pageComponent) {
        const filePath = path.join(outputDir, pageComponent.filename);
        fs.writeFileSync(filePath, pageComponent.content);
        console.log(`  ✅ ${pageComponent.filename}`);
        generated++;
      }
    });

    console.log(`\n✨ Generated ${generated} components!`);
    console.log(`📁 Output directory: ${outputDir}\n`);

    console.log('📝 Next steps:');
    console.log('   1. Review generated components in generated-components/');
    console.log('   2. Copy to app/pages/ and refine as needed');
    console.log('   3. Add interactivity and data binding');
    console.log('   4. Test and iterate\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

main();
