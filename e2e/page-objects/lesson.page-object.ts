import { browser, element, by, ElementFinder } from 'protractor';
import { LessonSelectPageObject } from './lesson-select.page-object';
import { AppPageObject } from './app.page-object';

export class LessonPageObject {

    appPage = new AppPageObject();
    lessonSelectPage = new LessonSelectPageObject();

    browseToPage(){
        this.lessonSelectPage.browseToPage();
        this.lessonSelectPage.getLessonListItems().first().click();
        this.appPage.waitForClickBlock();
    }

    getLessonContent(){
        return element(by.css('.lesson-content'));
    }

}