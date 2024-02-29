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

Given(/^I login to rudderstack with (\S+) and (.+)$/, async (username, password) => {
    await LoginPage.open();
    await LoginPage.login(username, password);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});


When(/^I navigate to (\S+) page$/, async (path) => {
    await NavigationPage.goto(path)
});


Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});


Then(/^I should see (\S+) exists between (.+) and (.+)$/, async (connection, source, destination) => {
    console.log(connection)
    console.log(source)
    console.log(destination)
});
