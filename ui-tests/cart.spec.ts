import { test, expect } from '@playwright/test';
import { acceptConsentIfVisible } from './helpers/consent';

test('Added product is displayed in the cart', async ({ page }) => {
  await page.goto('/products', { waitUntil: 'domcontentloaded' });

  await acceptConsentIfVisible(page);

  await page.locator('.productinfo .add-to-cart').first().click();

  const cartModal = page.locator('#cartModal');
  await expect(cartModal).toBeVisible();

  await cartModal.getByRole('link', { name: 'View Cart' }).click();

  await expect(page).toHaveURL(/\/view_cart/);

  const productRow = page.locator('#product-1');

  await expect(productRow).toBeVisible();
  await expect(productRow).toContainText('Blue Top');
  await expect(productRow.locator('.cart_quantity')).toContainText('1');
});