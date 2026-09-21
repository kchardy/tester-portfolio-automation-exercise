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

test('User can search for products', async ({ page }) => {
  await page.goto('/products', { waitUntil: 'domcontentloaded' });

  await page.getByPlaceholder('Search Product').fill('jeans');
  await page.locator('#submit_search').click();

  await expect(
    page.getByRole('heading', { name: 'Searched Products' })
  ).toBeVisible();

  await expect(
    page.getByText('Soft Stretch Jeans', { exact: true }).first()
  ).toBeVisible();
});