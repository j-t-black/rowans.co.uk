#!/bin/bash

# Verify Section - Take fresh screenshot with timestamp
# Usage: ./scripts/verify-section.sh [section-name]

SECTION_NAME=${1:-"page"}
TIMESTAMP=$(date +%s)
OUTPUT_DIR="tests/screenshots/verify"

# Create verify directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "📸 Taking fresh screenshot of: $SECTION_NAME"

# Run Playwright test
npx playwright test --quiet

# Copy to timestamped file
cp tests/screenshots/home-current.png "$OUTPUT_DIR/${SECTION_NAME}-${TIMESTAMP}.png"

# Show file info
echo "✅ Screenshot saved:"
ls -lh "$OUTPUT_DIR/${SECTION_NAME}-${TIMESTAMP}.png"
echo ""
echo "📁 Full path:"
realpath "$OUTPUT_DIR/${SECTION_NAME}-${TIMESTAMP}.png"
