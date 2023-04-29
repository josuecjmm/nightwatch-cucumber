module.exports = {
    elements: {
        appLogo: '.app_logo',
        containerInventory: '#inventory_container',
        btnGoBack: '#continue-shopping',
        btnDeleteFromCart: '.item_pricebar button',
        btnCheckout: '#checkout',
    },
    commands: [
        {
            goBackToShopping: function () {
                this.api.pause(500).click(this.elements.btnGoBack);
                this.api.waitForElementNotPresent(this.elements.btnGoBack);
            }
        },
        {
            deleteItemFromCart: function (element) {
                this.api.pause(500).click(element);
                this.api.page.menuPage().waitForElementNotPresent('@lblShoppingCount');
            }
        },
        {
            checkout: function () {
                this.api.pause(500).click(this.elements.btnCheckout);
                this.api.waitForElementNotPresent(this.elements.btnGoBack);
            }
        }
    ]
}