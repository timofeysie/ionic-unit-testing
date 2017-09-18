import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HomePage } from './home';
import { IonicModule, NavController, DeepLinker } from 'ionic-angular';
import { NavMock, DeepLinkerMock } from '../../../test-config/mocks-ionic';
import { ComponentsModule } from '../../components/components.module';
import {} from 'jasmine';

describe('Home Page', () => {

  let de: DebugElement;
  let comp: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage)
      ],
      providers: [
        { provide: DeepLinker, useClass: DeepLinkerMock },
        { provide: NavController, useClass: NavMock },
        { provide: ComponentsModule, useClass: NavMock}
      ]
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(comp instanceof HomePage).toBe(true);
  });

  it('should have a class member called modules that is an array', () => {
    expect(comp.modules instanceof Array).toBe(true);
  });

  it('the modules class member should contain 5 modules after ionViewDidLoad has been triggered', () => {
    comp.ionViewDidLoad();
    expect(comp.modules.length).toBe(15);
  });

  it('the openModule() function should push the lesson select page onto the navigation stack', () => {
    let navCtrl = fixture.debugElement.injector.get(NavController);
    spyOn(navCtrl, 'push');
    let testModule = {title: 'pretend module'};
    comp.openModule(testModule);
    expect(navCtrl.push).toHaveBeenCalledWith('LessonSelectPage', {module: testModule});

  });

});