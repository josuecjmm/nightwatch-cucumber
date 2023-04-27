module.exports = {
    url: function () {
        this.api.navigateTo(this.api.launchUrl);
    },
    elements: {
        loginLogo: '.login_logo',
        inputUsername: '[data-test="username"]',
        inputPassword: '[data-test="password"]',
        btnSubmit: '[type="submit"]'
    },
    commands: [
        {
            login: function (user, password) {
                this.api.waitForElementVisible(this.elements.loginLogo)
                    .setValue(this.elements.inputUsername, user)
                    .setValue(this.elements.inputPassword, password)
                this.api.pause(500).click(this.elements.btnSubmit)
            }
        }
    ]
}