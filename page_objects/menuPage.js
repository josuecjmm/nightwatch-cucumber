module.exports = {
    elements: {
        btnShoppingCart: '#shopping_cart_container a',
        lblShoppingCount: '.shopping_cart_badge'
    },
    commands: [
        {
            openShoppingCart: function (){
                this.api.pause(500).click(
                    this.elements.btnShoppingCart
                )
                this.api.page.landingPage().waitForElementNotPresent('@containerInventory');
            }
        }
    ]
}