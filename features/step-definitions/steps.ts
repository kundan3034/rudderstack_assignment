import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import NavigationPage from '../pageobjects/navigation.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()


});

Given(/^I login to rudderstack  with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
    await LoginPage.open()
    await LoginPage.login(username, password)
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});


When(/^"I navigate to "(\w+)" page"$/, async (path) => {
    await NavigationPage.goto(path)
});


Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});


Then(/^I should see "(\w+)" exists between "(\w+)" and "(\w+)"$/, async (connection, source, destination) => {
    console.log()
});
