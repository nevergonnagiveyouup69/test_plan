import { test, expect } from '@playwright/test';

test.describe('Add to cart flow', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://techshopbd.com/login');
        await page.getByRole('textbox', { name: 'Email' }).fill('kaushalrag3122001@gmail.com');
        await page.locator('input[type="password"]').first().fill('Abcd@1234');
        await page.getByRole('button', { name: /sign in/i }).click();
    });

    test('should verify if account user name can be updated', async ({ page }) => {
        await page.goto('https://techshopbd.com/my-section/my-profile');
        await page.getByText('Change Information').first().click();
        await page.getByRole('textbox', { name: 'Name Address1 Address2 City' }).click();
        await page.getByRole('textbox', { name: 'Name Address1 Address2 City' }).fill('Abcda');
        await page.getByRole('button', { name: 'Save' }).click();
        await page.getByText('Name changed successfully').click();
    });

    test('should verify if orders are visable', async ({ page }) => {
        await page.goto('https://techshopbd.com/my-section/my-order');
        await page.locator('div').filter({ hasText: 'Order Id: 101379 (1 items) Status: Processing Payable : TK. 85 4013 D Flip Flop' }).nth(3).click();
        await page.getByText('D Flip Flop').click();
    });
});
