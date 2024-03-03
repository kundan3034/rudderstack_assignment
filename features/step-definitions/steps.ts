import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import NavigationPage from '../pageobjects/navigation.page.js';
import connectionsPage from '../pageobjects/connections.page.js';

const pages = {
    login: LoginPage
}

Given(/^I login to rudderstack with credentials for (.+) environment$/, async (env) => {

    const username = process.env['USERNAME'] as string
    const password = process.env['PASSWORD'] as string
    console.log("process env.......", process.env)
    console.log(username, password)
    console.log("***************************")

    await LoginPage.open();
    await LoginPage.login(username, password);
});


When(/^I navigate to (\S+) page$/, async (path) => {
    await NavigationPage.goto(path)
});


Then(/^I should see connection (\S+) between (.+) and (.+)$/, async (connection, source, destination) => {
    let expectedDestination = await connectionsPage.getDestinationForSource(source)
    console.log(expectedDestination)
    await expect(expectedDestination).toBe(destination);
    // similarly we can test expected source after openiing the destination as well



});
