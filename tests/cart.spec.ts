import { test, expect } from '../fixtures/auth.fixture';
import { InventoryPage } from '../pages/InventoryPage';

test('add product to cart', async ({ authenticatedPage }) => {
    const inventoryPage = new InventoryPage(authenticatedPage);

    await inventoryPage.expectInventoryPageIsVisible();

    await inventoryPage.addBackpackToCart();
    await inventoryPage.expectCartBadgeCount('1');

    await inventoryPage.openCart();

    await expect(authenticatedPage.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');
});