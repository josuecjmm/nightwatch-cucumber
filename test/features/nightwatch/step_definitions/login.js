const {Given, When, Then} = require('@cucumber/cucumber');

Given('I open the Login page', () => {
    return browser.page.loginPage().url();
})

When('I login as {string} with password {string}', (user, password) => {
    return browser.page.loginPage().login(user, password);
})

Then('I should see the landing page', () => {
    return browser.page.landingPage()
        .waitForElementVisible('@appLogo')
        .assert.textEquals('@appLogo', 'Swag Labs');
})