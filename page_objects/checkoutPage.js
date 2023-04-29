module.exports = {
    elements: {
        inputFirstname: '#first-name',
        inputLastname: '#last-name',
        inputZipcode: '#postal-code',
        btnContinue: '#continue'
    },
    commands: [
        {
            fillCheckout: function (name, lastname, zipcode){
                this.api.waitForElementVisible(this.elements.inputFirstname)
                    .setValue(this.elements.inputFirstname, name)
                    .setValue(this.elements.inputLastname, lastname)
                    .setValue(this.elements.inputZipcode, zipcode)
                this.api.pause(500).click(this.elements.btnContinue)
            }
        }
    ]
}