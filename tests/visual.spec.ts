import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('home page matches design', async ({ page }) => {
    // Go to home page
    await page.goto('http://localhost:3000/');

    // Wait for page to load
    await page.waitForLoadState('networkidle');

    // Take full page screenshot
    await page.screenshot({
      path: 'tests/screenshots/home-current.png',
      fullPage: true
    });

    // Visual comparison (will create baseline on first run)
    await expect(page).toHaveScreenshot('home-baseline.png', {
      fullPage: true,
      maxDiffPixels: 100
    });
  });
});
