import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByPlaceholder('E-Mail Address').click();
    await page.getByPlaceholder('E-Mail Address').fill('koushik350@gmail.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Pass123$');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: ' Edit your account information' }).click();
    await page.getByPlaceholder('First Name').dblclick();
    await page.getByPlaceholder('First Name').fill('Koushik TestSteve ');
    await page.getByPlaceholder('Last Name').dblclick();
    await page.getByPlaceholder('Last Name').fill('Parp');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: ' My account' }).click();
    await page.getByRole('button', { name: ' My account' }).click();
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
    await page.getByRole('link', { name: 'Logout', exact: true }).click();
});