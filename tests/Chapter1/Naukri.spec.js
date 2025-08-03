import { test, expect } from '@playwright/test';

test('Login to Naukri', async ({ page }) => {
  await page.goto('https://www.naukri.com/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#login_Layer')).toContainText('Login');
  
  //click on Login button
  await page.getByRole('link', { name: 'Login', exact: true }).click();

//enter email and password
  await page.getByRole('textbox', { name: /Email ID/i }).fill('vidhyaln95@gmail.com');
  await page.getByRole('textbox', { name: /password/i }).fill('Qw@12345678');
  await expect(page.getByRole('button', { name: 'Login', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Login', exact: true }).click();
});