import { browser } from 'protractor';
import { HomePageObject } from './page-objects/home.page-object';

describe('Home', () => {

    let homePage: HomePageObject;

    beforeEach(() => {
        homePage = new HomePageObject();
        homePage.browseToPage();
    });

    it('should be able to view a list', () => {
        expect<any>(homePage.getModuleListItems().count()).toBe(5);
    });

    it('the list of modules should contain the titles of the modules', () => {
        expect<any>(homePage.getModuleListItems().first().getText()).toContain('Module One');
    });

});