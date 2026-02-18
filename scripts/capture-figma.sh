#!/bin/bash

# Capture reference screenshot from Figma published site
# Usage: ./scripts/capture-figma.sh [section-name]

SECTION_NAME="${1:-full-page}"

echo "🎯 Capturing Figma reference: $SECTION_NAME"
echo "---"

node scripts/capture-figma-reference.js "$SECTION_NAME"
