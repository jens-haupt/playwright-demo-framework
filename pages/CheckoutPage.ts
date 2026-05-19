import { expect, Page } from '@playwright/test';

export class CheckoutPage {
    constructor(private page: Page) {}

    async startCheckout() {
        await this.page.locator('[data-test="checkout"]').click();
    }

    async fillCustomerInformation(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator('[data-test="firstName"]').fill(firstName);
        await this.page.locator('[data-test="lastName"]').fill(lastName);
        await this.page.locator('[data-test="postalCode"]').fill(postalCode);
        await this.page.locator('[data-test="continue"]').click();
    }

    async expectCheckoutOverviewIsVisible() {
        await expect(this.page.locator('[data-test="title"]')).toHaveText('Checkout: Overview');
    }

    async finishCheckout() {
        await this.page.locator('[data-test="finish"]').click();
    }

    async expectCheckoutComplete() {
        await expect(this.page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
    }
}