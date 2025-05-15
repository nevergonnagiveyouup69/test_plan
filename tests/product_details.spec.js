import { test, expect } from '@playwright/test';

test.describe('Add to cart flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://techshopbd.com/login');
    await page.getByRole('textbox', { name: 'Email' }).fill('kaushalrag3122001@gmail.com');
    await page.locator('input[type="password"]').first().fill('Abcd@1234');
    await page.getByRole('button', { name: /sign in/i }).click();
  });

  test('test', async ({ page }) => {
    await page.goto('https://techshopbd.com/detail/4408/Test_Hook_Clip_Flexible_Testing_Probe_P5004_Pair_techshop_bangladesh?numberOfCartProducts=0');
    await page.getByRole('img', { name: 'products' }).click();
    await page.locator('#js--product-thumbnail').getByRole('img', { name: 'Test_Hook-Clip-Flexible-' }).click();
    await page.getByRole('textbox', { name: 'Please write your question' }).click();
    await page.getByRole('button', { name: 'Post Your Question' }).click();
    await page.getByText('Question can not be empty.').click();
    await page.getByRole('textbox', { name: 'Please write your question' }).click();
    await page.getByRole('textbox', { name: 'Please write your question' }).fill('test');
    await page.getByRole('button', { name: 'Post Your Question' }).click();
    await page.getByText('Question posted successfully.').click();
    await page.getByRole('textbox', { name: 'Please write your review' }).click();
    await page.getByRole('textbox', { name: 'Please write your review' }).fill('test');
    await page.locator('#js--star-rating i').nth(2).click();
    await page.getByText('Your rating is updated').click();
  });
});
