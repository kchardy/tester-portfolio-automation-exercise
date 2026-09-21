import { test, expect } from '@playwright/test';
import { acceptConsentIfVisible } from './helpers/consent';

test('Login fails for invalid credentials', async ({ page }) => {
  await page.goto('/login', { waitUntil: 'domcontentloaded' });

  await acceptConsentIfVisible(page);

  await expect(
    page.getByRole('heading', { name: 'Login to your account' })
  ).toBeVisible();

  const email = `not-registered-${Date.now()}@example.com`;

  await page.locator('[data-qa="login-email"]').fill(email);
  await page.locator('[data-qa="login-password"]').fill('invalid-password');
  await page.locator('[data-qa="login-button"]').click();

  await expect(
    page.getByText('Your email or password is incorrect!')
  ).toBeVisible();
});