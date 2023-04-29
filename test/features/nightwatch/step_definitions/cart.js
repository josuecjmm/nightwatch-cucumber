const {Given, When, Then} = require('@cucumber/cucumber');
const landingPage = require('../../../../page_objects/landingPage')
const cartPage = require('../../../../page_objects/cartPage')

Given('I open the Cart', () => {
    return browser.page.menuPage().openShoppingCart();
})

Then('I should see the Cart empty', () => {
    return browser.page.menuPage().waitForElementNotPresent('@lblShoppingCount');
})

Then('I should see {string} item in the Cart', (count) => {
    return browser.page.menuPage().assert.textEquals('@lblShoppingCount', count);
})

When('I go back to the Landing page', () => {
    return browser.page.cartPage().goBackToShopping();
})

When('I add the item in position {string} to the Cart', (index) => {
    // TODO: Investigate if there's a better way
    // to handle this selector with index
    const btnAddToCart = {
        selector: landingPage.elements.btnAddToCart,
        index: index
    };
    return browser.page.landingPage().addItemToCart(btnAddToCart);
})

When('I remove the item {string} from the Cart', (index) => {
    // TODO: Investigate if there's a better way
    // to handle this selector with index
    const btnRemoveFromCart = {
        selector: cartPage.elements.btnDeleteFromCart,
        index: index
    };
    return browser.page.cartPage().deleteItemFromCart(btnRemoveFromCart);
})

When('I hit the Checkout option', () => {
    return browser.page.cartPage().checkout();
})

When('Fill the Checkout with name {string} {string} zip {string}', (name, lastname, zipcode) => {
    return browser.page.checkoutPage().fillCheckout(name, lastname, zipcode);
})

Then('I see the total of the Checkout', () => {
    return browser.page.totalPage().waitForElementVisible('@lblTotal')
})

When('I finish the Order', () => {
    return browser.page.totalPage().finishCheckout();
})

Then('I will see Thank You message', () => {
    return browser.page.checkoutCompletePage().assert.textEquals('@lblThankYou', 'Thank you for your order!');
})

