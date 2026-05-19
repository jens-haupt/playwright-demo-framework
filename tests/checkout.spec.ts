import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('complete checkout flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.expectInventoryPageIsVisible();
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();

    await checkoutPage.startCheckout();
    await checkoutPage.fillCustomerInformation('Jens', 'Haupt', '65307');
    await checkoutPage.expectCheckoutOverviewIsVisible();
    await checkoutPage.finishCheckout();
    await checkoutPage.expectCheckoutComplete();
});