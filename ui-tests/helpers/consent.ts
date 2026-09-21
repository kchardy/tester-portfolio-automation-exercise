import type { Page } from '@playwright/test';

export async function acceptConsentIfVisible(page: Page): Promise<void> {
  const consentButton = page.getByRole('button', { name: 'Consent' });

  try {
    await consentButton.waitFor({
      state: 'visible',
      timeout: 3000,
    });
  } catch {
    return;
  }

  await consentButton.click();
}