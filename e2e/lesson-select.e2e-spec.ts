import { browser } from 'protractor';
import { LessonSelectPageObject } from './page-objects/lesson-select.page-object';
import { LessonPageObject } from './page-objects/lesson.page-object';

describe('Lesson Select', () => {

    let lessonSelectPage: LessonSelectPageObject;
    let lessonPage: LessonPageObject;

    beforeEach(() => {
        lessonSelectPage = new LessonSelectPageObject();
        lessonPage = new LessonPageObject();
        lessonSelectPage.browseToPage();
    });

    it('the list of lessons should contain the titles of the lessons', () => {
        expect<any>(lessonSelectPage.getLessonListItems().first().getText()).toContain('lesson 1');
    });

    it('after selecting a specific lesson, the user should be able to see content for that lesson', () => {
        lessonSelectPage.getLessonListItems().first().click();
        expect<any>(lessonPage.getLessonContent().getText()).toContain('this is the lesson content');
    });

});
