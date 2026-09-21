import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './ui-tests',
  use: {
    baseURL: 'https://automationexercise.com',
    browserName: 'chromium',
  },
});