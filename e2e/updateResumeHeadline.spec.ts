// tests/updateResumeHeadline.spec.ts
import { test } from '@playwright/test';
import { NaukriLoginPage } from '../pages/NaukriLoginPage';
import { NaukriProfilePage } from '../pages/NaukriProfilePage.ts';

test.setTimeout(60000); // ⏱ Extend timeout for slow login page


test('Update Resume Headline in Naukri', async ({ page }) => {
  const loginPage = new NaukriLoginPage(page);
  const profilePage = new NaukriProfilePage(page);

  await loginPage.goto();
  await loginPage.login("sayhitosujith@gmail.com", "Qw@12345678");

  await profilePage.goToProfile();
  await profilePage.updateHeadline("SDET-Professional with Experience of 6.8 years. serving notice period . looking out for senior QA/SDET , Lead roles");
});
