import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */


class NavigationPage extends Page {

    public async goto(path: string) {

        return super.open(path);


    }

    /**
     * overwrite specific options to adapt it to page object
     */

}

export default new NavigationPage();
