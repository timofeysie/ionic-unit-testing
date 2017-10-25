import { browser, protractor, element, by, ElementFinder } from 'protractor';
import { LoginPageObject } from './login.page-object';
import { AppPageObject } from './app.page-object';

export class HomePageObject {

  loginPage = new LoginPageObject();
  appPage = new AppPageObject();

  browseToPage(){
    this.loginPage.browseToPage();
    let input = this.loginPage.getKeyInput();
    let loginButton = this.loginPage.getLoginButton();
    input.sendKeys('abcd-egfh-ijkl-mnop');
    loginButton.click();
    browser.wait(protractor.ExpectedConditions.urlContains('home'));
    this.appPage.waitForClickBlock();
  }

  getModuleListItems(){
    return element.all(by.css('.module-list button'));
  }

}