import { test, expect, Page } from '@playwright/test';

test.describe.serial('my first feature ', () => {
    let page: Page;

    test.beforeAll(async ({ browser }) => {

        page = await browser.newPage();
    });

    test('Launch the website', async () => {
        await page.goto('https://playwright.dev/');
    });
    test('Verify the home page', async () => {
        const title = page.locator('.navbar__inner .navbar__title');
        await expect(title).toHaveText('PlaywrightTOTO');
    });

    test.afterAll(async ({ }) => {
        await page.close();
    })
});