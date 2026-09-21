import { test, expect } from '@playwright/test';

test('Products page shows catalogue and search field', async ({ page }) => {
  await page.goto('/products', { waitUntil: 'domcontentloaded' });

  await expect(
    page.getByRole('heading', { name: 'All Products' })
  ).toBeVisible();

  await expect(
    page.getByPlaceholder('Search Product')
  ).toBeVisible();
});