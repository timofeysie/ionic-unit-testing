import { browser, protractor } from 'protractor';
import { LoginPageObject } from './page-objects/login.page-object';
import { HomePageObject } from './page-objects/home.page-object';

describe('Login', () => {

  let loginPage: LoginPageObject;
  let homePage: HomePageObject;

  beforeEach(() => {
    loginPage = new LoginPageObject();
    homePage = new HomePageObject();
    loginPage.browseToPage();
  });

  it('a user should be able to reach the home page by providing a valid license key', () => {
    let input = loginPage.getKeyInput();
    let loginButton = loginPage.getLoginButton();
    input.sendKeys('abcd-egfh-ijkl-mnop');
    loginButton.click();
    browser.wait(protractor.ExpectedConditions.urlContains('home'));
    expect<any>(homePage.getModuleListItems().first().getText()).toContain('Module One');   
  });

});