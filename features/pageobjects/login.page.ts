import { $ } from '@wdio/globals'
import Page from './page.js';


const rudderstackLoginPage = "/login"
class LoginPage extends Page {
    public get inputUsername() {
        return $('#text-input-email');
    }

    public get inputPassword() {
        return $('#text-input-password');
    }

    public get btnSubmit() {
        return $('button.ant-btn-primary');
    }

    public async login(username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await $('#scroll-container').waitForDisplayed({ timeout: 30000 });
    }

    public open() {
        return super.open(rudderstackLoginPage);
    }
}

export default new LoginPage();
