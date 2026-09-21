import { test, expect } from '@playwright/test';

test('Login fails for invalid credentials', async ({ page }) => {
  await page.goto('/login', { waitUntil: 'domcontentloaded' });

  const consentButton = page.getByRole('button', { name: 'Consent' });

  await consentButton
    .waitFor({ state: 'visible', timeout: 3000 })
    .catch(() => {});

  if (await consentButton.isVisible()) {
    await consentButton.click();
  }

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