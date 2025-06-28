import { test, expect } from '@playwright/test';

test.describe('KitchenVert App', () => {
  test('should load the home page', async ({ page }) => {
    await page.goto('/');
    
    // Check that the page loads without errors
    await expect(page).toHaveTitle(/KitchenVert/);
  });

  test('should display recipe list', async ({ page }) => {
    await page.goto('/');
    
    // This test will need to be updated once we have the recipe list component
    // For now, just check that the page loads
    await expect(page.locator('body')).toBeVisible();
  });

  test('should navigate to recipe details', async ({ page }) => {
    await page.goto('/');
    
    // This test will need to be updated once we have recipe cards and detail pages
    // For now, just check that the page loads
    await expect(page.locator('body')).toBeVisible();
  });

  test('should manage pantry items', async ({ page }) => {
    await page.goto('/');
    
    // This test will need to be updated once we have the pantry management interface
    // For now, just check that the page loads
    await expect(page.locator('body')).toBeVisible();
  });

  test('should find cookable recipes', async ({ page }) => {
    await page.goto('/');
    
    // This test will need to be updated once we have the recipe matching functionality
    // For now, just check that the page loads
    await expect(page.locator('body')).toBeVisible();
  });
}); 