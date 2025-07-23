// pages/NaukriProfilePage.ts
import { Page, Locator } from '@playwright/test';

export class NaukriProfilePage {
  readonly page: Page;
  readonly viewProfile: Locator;
  readonly resumeHeadlineEdit: Locator;
  readonly headlineTextarea: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.viewProfile = page.locator("//a[normalize-space()='View profile']");
    this.resumeHeadlineEdit = page.locator("//div[@class='widgetHead']//span[@class='edit icon'][normalize-space()='editOneTheme']");
    this.headlineTextarea = page.locator("#resumeHeadlineTxt");
    this.saveButton = page.locator("//button[normalize-space()='Save']");
  }

  async goToProfile() {
    await this.viewProfile.waitFor({ state: 'visible', timeout: 30000 });
    await this.viewProfile.click();
  }

  async updateHeadline(newHeadline: string) {
    await this.page.mouse.wheel(0, 500);
    await this.resumeHeadlineEdit.click();
    await this.headlineTextarea.fill(newHeadline);
    await this.saveButton.click();
  }
}
