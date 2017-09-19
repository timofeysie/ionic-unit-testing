import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LessonPage } from './lesson';
import { IonicModule, NavController, NavParams, DeepLinker } from 'ionic-angular';
import { NavMock, NavParamsMock, DeepLinkerMock } from '../../../test-config/mocks-ionic';

describe('Lesson Page', () => {

  let comp: LessonPage;
  let fixture: ComponentFixture<LessonPage>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [LessonPage],
      imports: [
        IonicModule.forRoot(LessonPage)
      ],
      providers: [
        { provide: DeepLinker, useClass: DeepLinkerMock },
        { provide: NavController, useClass: NavMock },
        { provide: NavParams, useClass: NavParamsMock }
      ]
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonPage);
    comp = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(comp instanceof LessonPage).toBe(true);
  });
    
  it('should have a lesson class member that is an object', () => {
    expect(comp.lesson instanceof Object).toBe(true);
  });

  it('should set up the passed in lesson object as the lesson class member', () => {
    let navParams = fixture.debugElement.injector.get(NavParams);
    navParams.get = jasmine.createSpy('get').and.returnValue({
      title: 'lesson 1',
      content: 'this is the test content'
    });
    comp.ionViewDidLoad();
    expect(comp.lesson.title).toBe('lesson 1');
  });  

});