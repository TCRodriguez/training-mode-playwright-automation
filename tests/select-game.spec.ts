import { test, expect } from '@playwright/test';

test('Game lists loads', async ({ page }) => {
    await page.goto('https://app.trainingmode.gg/games');

    // // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle(/Playwright/);
    await expect(page.getByText('Select Game')).toBeVisible();


});


