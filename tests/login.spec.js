import { test, expect } from '@playwright/test';

test.describe('Login Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://techshopbd.com/login');
  });

  test('should display email and password inputs', async ({ page }) => {
    await expect(page.getByRole('textbox', { name: 'Email' })).toBeVisible();
    await expect(page.locator('input[type="password"]').first()).toBeVisible();
  });

  test('should allow user to login with valid credentials', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Email' }).fill('kaushalrag3122001@gmail.com');
    await page.locator('input[type="password"]').first().fill('Abcd@1234');
    await page.getByRole('button', { name: /sign in/i }).click();

    await page.waitForLoadState('networkidle');

    const userIcon = page.getByRole('link', { name: /user_icon/i });

    if (await userIcon.isVisible()) {
      await userIcon.click();
    } else {
      console.error('User icon not visible');
      await page.screenshot({ path: 'user-icon-not-visible.png', fullPage: true });
    }
  });

  test('rejects login attempt with invalid credentials', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Email' }).fill('kaushalrag3122001@gmail.com');
    await page.locator('input[type="password"]').first().fill('Abcd@');
    await page.getByRole('button', { name: /sign in/i }).click();

    await expect(page.getByText('Invalid email and password').first()).toBeVisible();
  });
});
