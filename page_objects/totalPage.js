module.exports = {
    elements: {
        lblTotal: '.summary_total_label',
        btnFinish: '#finish',
    },
    commands: [
        {
            finishCheckout: function () {
                this.api.pause(500).click(this.elements.btnFinish);
                this.api.waitForElementNotPresent(this.elements.lblTotal);
            }
        }
    ]
}