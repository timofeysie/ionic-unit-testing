import { browser } from 'protractor';
import { HomePageObject } from './page-objects/home.page-object';
import { LessonSelectPageObject } from './page-objects/lesson-select.page-object';

describe('Home', () => {

    let homePage: HomePageObject;
    let lessonSelectPage: LessonSelectPageObject;

    beforeEach(() => {
        homePage = new HomePageObject();
        lessonSelectPage = new LessonSelectPageObject();
        homePage.browseToPage();
    });

    it('should be able to view a list', () => {
        expect<any>(homePage.getModuleListItems().count()).toBe(15);
    });

    it('the list of modules should contain the titles of the modules', () => {
        expect<any>(homePage.getModuleListItems().first().getText()).toContain('Module One');
    });

    it('after selecting a specific module, the user should be able to see a list of available lessons', () => {
        let moduleToTest = homePage.getModuleListItems().first();
        moduleToTest.click();
        expect<any>(lessonSelectPage.getLessonListItems().count()).toBeGreaterThan(1);
    });

});