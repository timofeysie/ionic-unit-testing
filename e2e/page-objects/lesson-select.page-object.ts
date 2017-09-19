import { browser, element, by, ElementFinder } from 'protractor';
import { AppPageObject } from './app.page-object';
import { HomePageObject } from './home.page-object';

export class LessonSelectPageObject {

    homePage = new HomePageObject();
    appPage = new AppPageObject();

    browseToPage(){
        this.homePage.browseToPage();
        this.homePage.getModuleListItems().first().click();
        this.appPage.waitForClickBlock();
    }

    getLessonListItems(){
        return element.all(by.css('.lesson-list button'));
    }

}