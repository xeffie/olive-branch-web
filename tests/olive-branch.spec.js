const { test, expect } = require('@playwright/test');

test('should display Olive Branch heading', async ({ page }) => {
    await page.goto('https://olive-branch-web-dev.onrender.com');

    await expect(
        page.getByRole('heading', { name: 'Olive Branch' })
    ).toBeVisible();
});

test('should filter organizations by category', async ({ page }) => {
    await page.goto('https://olive-branch-web-dev.onrender.com');

    await page.getByRole('button', { name: 'Children' }).click();

    const organization = page.locator('#organizations article');

    await expect(organization).toBeVisible();
    await expect(organization).toContainText('CHILDREN');

    await expect(organization.getByRole('heading', { name: "Palestine Children's Relief Fund" })).toBeVisible();
});

test('should show message wgen category has no organizations', async ({ page }) => {
    await page.goto('https://olive-branch-web-dev.onrender.com');

    await page.getByRole('button', { name: 'Medical' }).click();

    await expect(page.getByText('No organizations available.')).toBeVisible();
});