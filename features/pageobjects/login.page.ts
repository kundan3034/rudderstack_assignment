import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */

const rudderstackLoginPage = "/login"
class LoginPage extends Page {
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
    public async login(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await $('#scroll-container').waitForDisplayed({ timeout: 30000 });
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open(rudderstackLoginPage);
    }
}

export default new LoginPage();
