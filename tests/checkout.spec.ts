import { test } from '../fixtures/auth.fixture';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('complete checkout flow', async ({ authenticatedPage }) => {
    const inventoryPage = new InventoryPage(authenticatedPage);
    const checkoutPage = new CheckoutPage(authenticatedPage);

    await inventoryPage.expectInventoryPageIsVisible();
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();

    await checkoutPage.startCheckout();
    await checkoutPage.fillCustomerInformation('Jens', 'Haupt', '65307');
    await checkoutPage.expectCheckoutOverviewIsVisible();
    await checkoutPage.finishCheckout();
    await checkoutPage.expectCheckoutComplete();
});