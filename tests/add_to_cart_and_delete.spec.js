import { test, expect } from '@playwright/test';

test.describe('Add to cart flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://techshopbd.com/login');
    await page.getByRole('textbox', { name: 'Email' }).fill('kaushalrag3122001@gmail.com');
    await page.locator('input[type="password"]').first().fill('Abcd@1234');
    await page.getByRole('button', { name: /sign in/i }).click();
  });
  
    test('user checks if add to cart and delete works', async ({ page }) => {
        await page.goto('https://techshopbd.com/detail/751/74273_D_Flip_Flop_techshop_bangladesh?numberOfCartProducts=0');
        await page.locator('#js--btn-plus').getByRole('button', { name: 'icon' }).click();
        await page.getByText('Add to Cart').first().click();
        await page.goto('https://techshopbd.com/cart', { timeout: 60000 });
        await page.click('#remove-btn');
    });
});
