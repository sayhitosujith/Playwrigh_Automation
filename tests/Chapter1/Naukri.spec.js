import { test, expect } from '@playwright/test';

test('Login and update resume on Naukri', async ({ page }) => {
  // Navigate to Naukri homepage
  await page.goto('https://www.naukri.com/', { waitUntil: 'domcontentloaded' });

  // Ensure Login button is visible
  const loginButton = page.locator('#login_Layer');
  await expect(loginButton).toContainText('Login');

  // Click on Login button
  await loginButton.click();

  // Fill in Email and Password
  await page.getByPlaceholder('Enter your active Email ID / Username').fill('vidhyaln95@gmail.com');
  await page.getByPlaceholder('Enter your password').fill('Qw@12345678');

  // Click the Login button
  const submitLogin = page.getByRole('button', { name: 'Login', exact: true });
  await expect(submitLogin).toBeVisible();
  await submitLogin.click();

  // Wait for View profile to be visible to confirm login success
  const viewProfile = page.getByRole('link', { name: 'View profile' });
  await expect(viewProfile).toBeVisible();

  // Navigate to profile
  await viewProfile.click();

  // Click on "Update Resume"
  const updateResumeBtn = page.getByRole('button', { name: 'Update resume' });
  await expect(updateResumeBtn).toBeVisible();
  await page.getByRole('button', { name: 'Update resume' }).click();
  await page.getByRole('button', { name: 'Update resume' }).setInputFiles('vidhya_Profile.pdf');

  // Logout
  await page.getByRole('img', { name: 'naukri user profile img' }).click();
  await page.getByText('Logout', { exact: true }).click();
});
