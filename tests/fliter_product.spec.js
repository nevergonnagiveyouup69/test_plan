import { test, expect } from '@playwright/test';

test('navigates through product search, filters, and sorting to view a specific product', async ({ page }) => {
  await page.goto('https://techshopbd.com/browse/category?id=62');
  await page.locator('#browse-filter').selectOption('PRICE_ASC');
  await page.goto('https://techshopbd.com/browse/category?id=62&sort=PRICE_ASC');
  await page.locator('#browse-filter').selectOption('PRICE_DESC');
  await page.goto('https://techshopbd.com/browse/category?id=62&sort=PRICE_DESC');
  await page.getByRole('link', { name: 'SMD Zif Socket 32 Pin QFP32' }).click();
});