// pages/NaukriLoginPage.ts
import { Page, Locator } from '@playwright/test';

export class NaukriLoginPage {
  readonly page: Page;
  readonly userName: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = page.getByPlaceholder("Enter Email ID / User");
    this.password = page.locator('#passwordField');
    this.loginButton = page.locator("//button[@class='waves-effect waves-light btn-large btn-block btn-bold blue-btn textTransform']");
  }

  async goto() {
    await this.page.goto('https://www.naukri.com/nlogin/login');
  }

  async login(email: string, pwd: string) {
    await this.userName.fill(email, { timeout: 30000 });
    await this.password.fill(pwd);
    await this.loginButton.click();
  }
}
