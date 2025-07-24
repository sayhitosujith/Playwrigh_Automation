import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.goto('https://github.com/login');
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('sayhitosujith@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('WelcometoRc@1');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();await page.goto('https://github.com/');
  await expect(page.locator('#contextregion-basiccrumb-dashboard-link')).toContainText('Dashboard');await page.goto('https://github.com/');
  await page.getByRole('button', { name: 'Open user navigation menu' }).click();
  await page.getByRole('link', { name: 'Sign out' }).click();
  await expect(page.getByRole('main')).toContainText('Sign out from all accounts');
  await expect(page.getByRole('main')).toContainText('Sign out from all accounts');
});