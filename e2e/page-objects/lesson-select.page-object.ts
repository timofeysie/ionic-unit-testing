import { browser, element, by, ElementFinder } from 'protractor';
import { HomePageObject } from './home.page-object';

export class LessonSelectPageObject {

    homePage = new HomePageObject();

    browseToPage(){
        this.homePage.browseToPage();
        this.homePage.getModuleListItems().first().click();
    }

    getLessonListItems(){
        return element.all(by.css('.lesson-list button'));
    }

}