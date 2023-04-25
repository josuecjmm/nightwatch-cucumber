const {Given, When, Then} = require('@cucumber/cucumber');

Given('I open the Login page', () => {
    return browser.navigateTo('/');
})

When('I login as {string} with password {string}', async (user, password) => {
    await browser.waitForElementVisible('.login_logo')
        .setValue('[data-test="username"]', user)
        .setValue('[data-test="password"]', password)
    return browser.pause(500).click('[type="submit"]')
})

Then('I should see the landing page', async () => {
    return browser.waitForElementVisible('.app_logo')
        .assert.textEquals('.app_logo', 'Swag Labs');
})