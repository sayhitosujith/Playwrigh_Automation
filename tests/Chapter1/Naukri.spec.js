import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.naukri.com/nlogin/login?utm_source=google&utm_medium=cpc&utm_campaign=Brand&gad_source=1&gclid=CjwKCAjwo6GyBhBwEiwAzQTmc34DfBd9dNPPn_R_W3UozmHxoGFxQRepNJgOcFPHLMUoYhEwNErtOxoC6a0QAvD_BwE&gclsrc=aw.ds');
  await page.getByRole('textbox', { name: 'Enter Email ID / Username' }).click();
  await page.getByRole('textbox', { name: 'Enter Email ID / Username' }).fill('say');
  await page.getByRole('textbox', { name: 'Enter Email ID / Username' }).click();
  await page.getByRole('textbox', { name: 'Enter Email ID / Username' }).fill('sayhitosujith@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Email ID / Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('Qw@12345678');
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await expect(page.getByRole('link', { name: 'View profile' })).toBeVisible();
  await page.getByRole('link', { name: 'View profile' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Resume headline' }).locator('span').click();
  await page.locator('#lazyResumeHead').getByText('editOneTheme').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('img', { name: 'naukri user profile img' }).click();
  await page.getByText('Logout').click();
});