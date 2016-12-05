import { browser, element, by } from 'protractor';

describe('Ionic testing app', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Home');
  });
})