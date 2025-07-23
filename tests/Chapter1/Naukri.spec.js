import { test, expect } from '@playwright/test';

test('Login and update resume on Naukri', async ({ page }) => {
  await page.goto('https://www.naukri.com/nlogin/login');
  await page.waitForLoadState('domcontentloaded');

  // Log frame URLs
  const frames = page.frames();
  console.log('Frames:', frames.map(f => f.url()));

  // Try locating input
  const usernameField = page.locator('input[name="username"]');
  await usernameField.waitFor({ timeout: 10000 }); // Wait until it's visible
  await usernameField.fill('sayhitosujith@gmail.com');

  const passwordField = page.locator('input[name="password"]');
  await passwordField.waitFor({ timeout: 10000 });
  await passwordField.fill('Qw@12345678');

  // Click login
await page.getByRole('button', { name: 'Login' }).click();

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
