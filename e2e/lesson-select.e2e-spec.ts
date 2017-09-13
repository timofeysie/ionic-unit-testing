import { browser } from 'protractor';
import { LessonSelectPageObject } from './page-objects/lesson-select.page-object';

describe('Lesson Select', () => {

    let lessonSelectPage: LessonSelectPageObject;

    beforeEach(() => {
        lessonSelectPage = new LessonSelectPageObject();
        lessonSelectPage.browseToPage();
    });

    it('the list of lessons should contain the titles of the lessons', () => {
        expect<any>(lessonSelectPage.getLessonListItems().first().getText()).toContain('lesson 1');
    });

});
