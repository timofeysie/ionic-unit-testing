import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoginPage } from './login';
import { IonicModule, NavController, NavParams, DeepLinker } from 'ionic-angular';
import { NavMock, DeepLinkerMock } from '../../../test-config/mocks-ionic';
import {} from 'jasmine';

describe('Login Page', () => {

  let comp: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(LoginPage)
      ],
      providers: [
        { provide: DeepLinker, useClass: DeepLinkerMock },
        { provide: NavController, useClass: NavMock }
      ]
    });

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    comp = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(comp instanceof LoginPage).toBe(true);
  });

});