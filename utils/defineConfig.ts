import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    screenshot: 'only-on-failure', // or 'on' / 'off'
    video: 'retain-on-failure',    // or 'on' / 'off' / 'retain-on-failure'
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]],
});
