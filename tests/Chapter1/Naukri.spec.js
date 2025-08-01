import { test, expect } from '@playwright/test';

test('Login to Naukri', async ({ page }) => {
  await page.goto('https://www.naukri.com/', { waitUntil: 'domcontentloaded' });
  const loginLink = page.getByRole('link', { name: 'Login', exact: true });
  await expect(loginLink).toBeVisible(); // ensures it's available
  await loginLink.click();

  await page.getByRole('textbox', { name: /Email ID/i }).fill('sayhitosujith@gmail.com');
  await page.getByRole('textbox', { name: /password/i }).fill('yourPasswordHere');
});
