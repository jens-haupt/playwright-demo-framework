import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../data/users';

type AuthFixtures = {
    authenticatedPage: import('@playwright/test').Page;
};

export const test = base.extend<AuthFixtures>({
    authenticatedPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(users.standard.username, users.standard.password);
        await loginPage.expectSuccessfulLogin();

        await use(page);
    },
});

export { expect } from '@playwright/test';