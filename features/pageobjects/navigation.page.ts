import { $ } from '@wdio/globals'
import Page from './page.js';

class NavigationPage extends Page {
    public async goto(path: string) {
        return super.open(path);
    }
}

export default new NavigationPage();
