import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://github.com/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('sayhitosujith@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('WelcometoRc@1');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();

  // ✅ Assert user is logged in by checking the avatar menu button
  // await expect(page.getByRole('button', { name: 'Open user navigation menu' })).toBeVisible({ timeout: 10000 });

  // // Optional: click and sign out
  // await page.getByRole('button', { name: 'Open user navigation menu' }).click();
  // await page.getByRole('link', { name: 'Sign out' }).click();
});
