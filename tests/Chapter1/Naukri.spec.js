import { test, expect } from '@playwright/test';

test('Login to Naukri', async ({ page }) => {
  await page.goto('https://www.naukri.com/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#login_Layer')).toContainText('Login');
  await page.getByRole('link', { name: 'Login', exact: true }).click();


  await page.getByRole('textbox', { name: /Email ID/i }).fill('sayhitosujith@gmail.com');
  await page.getByRole('textbox', { name: /password/i }).fill('yourPasswordHere');
});
