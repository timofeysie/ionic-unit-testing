import { protractor, browser, element, by } from 'protractor';

export class AppPageObject {
    waitForClickBlock(){

        let clickBlockElement = element(by.css('.click-block-active'));
        browser.wait(protractor.ExpectedConditions.stalenessOf(clickBlockElement));

    }
}