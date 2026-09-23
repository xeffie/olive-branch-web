const { test, expect } = require('@playwright/test');

test('should display Olive Branch heading', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500');

    await expect(
        page.getByRole('heading', { name: 'Olive Branch' })
    ).toBeVisible();
});

test('should filter organizations by category', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500');

    await expect(
        page.locator('#organizations article')
    ).toHaveCount(5);

    await page.getByRole('button', { name: 'Children' }).click();

    const organizations = page.locator('#organizations article');

    await expect(organizations).toHaveCount(1);

    const organization = organizations.first();

    await expect(organization).toContainText('CHILDREN');

    await expect(
        organization.getByRole('heading', {
            name: "Palestine Children's Relief Fund"
        })
    ).toBeVisible();
});

test('should display medical organizations', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500');

    await expect(
        page.locator('#organizations article')
    ).toHaveCount(5);

    await page.getByRole('button', { name: 'Medical' }).click();

    const organizations = page.locator('#organizations article');

    await expect(organizations).toHaveCount(1);

    const organization = organizations.first();

    await expect(organization).toContainText('MEDICAL');

    await expect(
        organization.getByRole('heading', {
            name: 'Olive Medical Relief'
        })
    ).toBeVisible();
});