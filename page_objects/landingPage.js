module.exports = {
    elements: {
        appLogo: '.app_logo',
        containerInventory: '#inventory_container',
        btnAddToCart: '.btn_inventory',

    },
    commands: [
        {
            addItemToCart: function (element) {
                this.api.pause(500).click(element)
                this.api.page.menuPage().waitForElementVisible('@lblShoppingCount');
            }
        }

    ]
}