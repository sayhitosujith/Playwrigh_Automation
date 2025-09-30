import { test, expect } from '@playwright/test';

test('upload file to file.io', async ({ page }) => {
  // Navigate to file.io
  await page.goto('https://www.file.io/?utm_source=chatgpt.com', { waitUntil: 'domcontentloaded' });

  // Locate the "Upload Files" input by its id
  const fileInput = page.locator('#select-files-input');

  // Upload your file
  await fileInput.setInputFiles('C:\\Users\\Sadashivareddys\\OneDrive - Exostar CORP\\Desktop\\GetLogo.png');


});
