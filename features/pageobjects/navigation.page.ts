import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */


class NavigationPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername() {
        return $('#text-input-email');
    }

    public get inputPassword() {
        return $('#text-input-password');
    }

    public get btnSubmit() {
        return $('button.ant-btn-primary');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async goto(path: string) {

        return super.open(path);


    }

    /**
     * overwrite specific options to adapt it to page object
     */

}

export default new NavigationPage();
