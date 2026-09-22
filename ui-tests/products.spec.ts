import { test, expect } from '@playwright/test';
import { acceptConsentIfVisible } from './helpers/consent';

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

  await acceptConsentIfVisible(page);

  await page.getByPlaceholder('Search Product').fill('jeans');
  await page.locator('#submit_search').click();

  await expect(
    page.getByRole('heading', { name: 'Searched Products' })
  ).toBeVisible();

  await expect(
    page.getByText('Soft Stretch Jeans', { exact: true }).first()
  ).toBeVisible();
});

test('User can add a product to the cart', async ({ page }) => {
  await page.goto('/products', { waitUntil: 'domcontentloaded' });

  await acceptConsentIfVisible(page);

  await page.locator('.productinfo .add-to-cart[data-product-id="1"]').click();

  const cartModal = page.locator('#cartModal');

  await expect(cartModal).toBeVisible();
  await expect(cartModal).toContainText(
    'Your product has been added to cart.'
  );
  await expect(
    cartModal.getByRole('link', { name: 'View Cart' })
  ).toBeVisible();
});