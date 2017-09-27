import { browser, element, by, ElementFinder } from 'protractor';

export class LoginPageObject {

  browseToPage(){
    browser.get('');
  }

  getKeyInput() {
    return element.all(by.css('.key-input input'));
  }

  getLoginButton() {
    return element.all(by.css('.login-button'));
  }

}