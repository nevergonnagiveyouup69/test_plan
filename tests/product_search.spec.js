import { test, expect } from '@playwright/test';


test('User search for 74273 d flip flop and should see the detials', async ({ page }) => {
    await page.goto('https://techshopbd.com/login');
    await page.getByRole('searchbox', { name: 'Search by product name' }).click();
    await page.getByRole('searchbox', { name: 'Search by product name' }).fill('flip');
    await page.getByRole('link', { name: 'product 74273 D Flip Flop TK.' }).click();
    await page.getByText('Model No: DIC-').click();
    await page.getByRole('heading', { name: 'D Flip Flop' }).click();
  });



