import { test, expect } from '@playwright/test';

test('Login and update resume on Naukri', async ({ page }) => {
  await page.goto('https://www.naukri.com/nlogin/login');
  await page.getByRole('textbox', { name: 'Enter Email ID / Username' }).fill('sayhitosujith@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('Qw@12345678');
  await page.getByRole('button', { name: 'Login', exact: true }).click();

  // Wait for dashboard to load
  await expect(page.getByRole('link', { name: 'View profile' })).toBeVisible({ timeout: 15000 });

  // Navigate and update resume
  await page.getByRole('link', { name: 'View profile' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Resume headline' }).locator('span').click();
  await page.locator('#lazyResumeHead').getByText('editOneTheme').click();
  await page.getByRole('button', { name: 'Save' }).click();

  // Logout
  await page.getByRole('img', { name: 'naukri user profile img' }).click();
  await page.getByText('Logout').click();
});
