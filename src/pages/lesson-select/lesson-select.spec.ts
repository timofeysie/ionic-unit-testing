import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LessonSelectPage } from './lesson-select';
import { IonicModule, NavController, NavParams, DeepLinker } from 'ionic-angular';
import { NavMock, NavParamsMock, DeepLinkerMock } from '../../../test-config/mocks-ionic';
import {} from 'jasmine';

describe('Lesson Select Page', () => {

  let comp: LessonSelectPage;
  let fixture: ComponentFixture<LessonSelectPage>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [LessonSelectPage],
      imports: [
        IonicModule.forRoot(LessonSelectPage)
      ],
      providers: [
        { provide: DeepLinker, useClass: DeepLinkerMock },
        { provide: NavController, useClass: NavMock },
        { provide: NavParams, useClass: NavParamsMock }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonSelectPage);
    comp = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(comp instanceof LessonSelectPage).toBe(true);
  });

  it('should have a lessons class member that is an array', () => {
    expect(comp.lessons instanceof Array).toBe(true);
  });

  it('should set up the lessons from the passed in module on the lessons class member', () => {
    let navParams = fixture.debugElement.injector.get(NavParams);
    navParams.get = jasmine.createSpy('get').and.returnValue({
      lessons: [
        {title: 'lesson 1'},
        {title: 'lesson 2'},
        {title: 'lesson 3'},
        {title: 'lesson 4'}
      ]
    });
    comp.ionViewDidLoad();
    expect(comp.lessons.length).toBe(4);
  });

  it('the openLesson() function should push the lesson page onto the navigation stack', () => {
    let navCtrl = fixture.debugElement.injector.get(NavController);
    spyOn(navCtrl, 'push');
    let testLesson = {title: 'lesson 1', content: 'this is the lesson content'};
    comp.openLesson(testLesson);
    expect(navCtrl.push).toHaveBeenCalledWith('LessonPage', {lesson: testLesson});
  });

});
