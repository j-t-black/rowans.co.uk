---
name: verify
description: Take screenshot of current implementation for comparison with Figma
disable-model-invocation: true
argument-hint: [section-name]
allowed-tools: Bash(./scripts/*)
---

# Verify Implementation

Take a timestamped screenshot of the current implementation to compare against Figma reference.

## Usage

```bash
./scripts/verify-section.sh $ARGUMENTS
```

## How it Works

1. Runs Playwright tests to capture full-page screenshot
2. Saves with timestamp to prevent cache issues
3. Outputs path to the new screenshot

## Output

Screenshots saved to: `tests/screenshots/verify/{section-name}-{timestamp}.png`

The timestamped filename ensures you always read the fresh screenshot, not a cached version.

## Example

```bash
./scripts/verify-section.sh homepage-current
```

Then read the timestamped file to verify your implementation matches Figma.
