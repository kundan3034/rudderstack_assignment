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
        const elements = await browser.$$("#sources-list .sc-fnOeCC.jTmsmv");
        let targetElement;
        for (const element of elements) {
            const text = await element.getText();
            if (text.includes(source)) {
                targetElement = element;
                await targetElement.click();
                break;
            }
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
        const destinationValueElement = await browser.$('.ant-table-tbody .ant-table-cell .sc-jrkPvW')
        const value = await destinationValueElement.getText()
        console.log(value)
        return value
    }



}

export default new ConnectionsPage();
