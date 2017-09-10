import { browser, element, by, ElementFinder } from 'protractor';

export class LessonSelectPageObject {

    browseToPage(){
        browser.get('');
    }

    getLessonListItems(){
        return element.all(by.css('.lesson-list button'));
    }

}