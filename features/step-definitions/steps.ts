import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import NavigationPage from '../pageobjects/navigation.page.js';
import connectionsPage from '../pageobjects/connections.page.js';

const pages = {
    login: LoginPage
}

Given(/^I login to rudderstack with (\S+) and (.+)$/, async (username, password) => {
    await LoginPage.open();
    await LoginPage.login(username, password);
});


When(/^I navigate to (\S+) page$/, async (path) => {
    await NavigationPage.goto(path)
});


Then(/^I should see (\S+) exists between (.+) and (.+)$/, async (connection, source, destination) => {
    // connectionsPage.getDestinationForSource(source)
    let expectedDestination = await connectionsPage.getDestinationForSource(source)
    console.log(expectedDestination)
    await expect(expectedDestination).toBe(destination);

});
