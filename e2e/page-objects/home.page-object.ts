import { browser, element, by, ElementFinder } from 'protractor';

export class HomePageObject {

    browseToPage(){
        browser.get('');
    }

    getModuleListItems(){
        return element.all(by.css('.module-list button'));
    }

}