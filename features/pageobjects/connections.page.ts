import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */

class ConnectionsPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get sources() {
        return $('#sources-list .sc-fnOeCC.jTmsmv');
    }

    public get destinations() {
        return $('#destinations-list .sc-fnOeCC');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async getDestinationForSource(source) {
        // browser.debug()
        console.log(typeof this.sources)
        const elements = await browser.$$("#sources-list .sc-fnOeCC.jTmsmv");
        console.log("printing sources elements.....", elements)
        let targetElement;
        for (const element of elements) {
            const text = await element.getText();
            if (text.includes(source)) {
                targetElement = element;
                targetElement.click()
                break;
            }
        }


        // if (targetElement) {
        //     const text = await targetElement.getText();
        //     console.log(text);
        //     return text;
        // } else {
        //     console.log(`No element containing "${source}" found`);
        //     return undefined;
        // }



    }
    // public async getSourceForDestination(username: string, password: string) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }
    /**
     * overwrite specific options to adapt it to page object
     */

}

export default new ConnectionsPage();
