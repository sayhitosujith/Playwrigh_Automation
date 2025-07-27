import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.naukri.com/');
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).click();
  await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).fill('sayhitosujith@gmail.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('Qw@12345678');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
});