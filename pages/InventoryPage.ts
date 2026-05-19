import { expect, Page } from '@playwright/test';

export class InventoryPage {
    constructor(private page: Page) {}

    async expectInventoryPageIsVisible() {
        await expect(this.page.locator('[data-test="title"]')).toHaveText('Products');
    }

    async addBackpackToCart() {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }

    async openCart() {
        await this.page.locator('[data-test="shopping-cart-link"]').click();
    }

    async expectCartBadgeCount(count: string) {
        await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toHaveText(count);
    }
}