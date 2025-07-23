import { test, expect } from '@playwright/test';

test('Navigate to Git hub with login credentials', async ({ page }) => {
  await test.step('Navigate to GitHub URL', async () => {
    await page.goto('https://github.com/');
  });
    await test.step('sign in with credentials', async () => {
    await page.getByRole('link', { name: 'Sign in' }).click();

    await page.getByLabel('Username or email address').fill('sujithreddy1991@gmail.com');
    await page.getByLabel('Password').fill('Qw@12345678');

    await page.getByRole('button', { name: 'Sign in', exact: true }).click();

  });
  await test.step('Verify successful login', async () => {
    await expect(page.getByRole('heading', { name: 'Sujith Reddy' })).toBeVisible();
  });
});