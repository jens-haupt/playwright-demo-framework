import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.expectSuccessfulLogin();
});

test('failed login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'wrong_password');
    await loginPage.expectLoginError();
});