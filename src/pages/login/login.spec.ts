import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoginPage } from './login';
import { AuthProvider } from '../../providers/auth/auth';
import { IonicModule, NavController, NavParams, DeepLinker, LoadingController } from 'ionic-angular';
import { NavMock, DeepLinkerMock, LoadingControllerMock } from '../../../test-config/mocks-ionic';
import { AuthProviderMock } from '../../../test-config/mocks-app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

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
        { provide: LoadingController, useClass: LoadingControllerMock },
        { provide: DeepLinker, useClass: DeepLinkerMock },
        { provide: AuthProvider, useClass: AuthProviderMock },
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

  it('should have a licenseKey class member', () => {
    expect(comp.licenseKey).toBeDefined();
  });

  it('should show a loading overlay whilst an authentication request is being made', () => {
    let authProvider = fixture.debugElement.injector.get(AuthProvider);
    let loadingCtrl = fixture.debugElement.injector.get(LoadingController);
    let spiedObject;
    /* We don't want to spy on the loadingCtrl we want to spy on the object that loadingCtrl.create creates, and this complicates things. 
    To get around this, we instead spy on the create method of loadingCtrl. We use the callFake method to supply our own response to this function call. 
    Instead of create creating a loading overlay when the test is running, it will instead return our fake object: */
    spyOn(loadingCtrl, 'create').and.callFake(() => {
      spiedObject = {
        present: () => { return Promise.resolve(true) },
        dismiss: () => { return Promise.resolve(true) }
      };
      spyOn(spiedObject, 'present');
      return spiedObject;
    });
    let authResponse = { isValid: true };
    /* We then spy on that fake object to make sure that the present method is called at some point. 
    We also overwrite the functionality of checkKey with this */
    spyOn(authProvider, 'checkKey').and.returnValue(Observable.of(authResponse));
    comp.licenseKey = 'abcde-fghi';
    comp.login();
    expect(spiedObject.present).toHaveBeenCalled();
  });

  /* This is almost exactly the same as the above test, except that we are checking that the dismiss method is called.
  Since dismiss is called after we receive the response from the Observable, 
  we need to wrap the test in fakeAsync and call the tick method before checking the result. 
  This will ensure that the observable has had time to send its response before we run our expect statement. 
  We covered how this works in-depth in the lesson on fakeAsync.
  */
  it('should dimiss the loading overlay after getting a response from the server', fakeAsync(() => {
    let authProvider = fixture.debugElement.injector.get(AuthProvider);
    let loadingCtrl = fixture.debugElement.injector.get(LoadingController);
    let spiedObject;
    spyOn(loadingCtrl, 'create').and.callFake(() => {
      spiedObject = {
        present: () => { return Promise.resolve(true) },
        dismiss: () => { return Promise.resolve(true) }
      };
      /* When you create a spy on an object, it will no longer make a call to the original implementation of that object. 
      When we implement the functionality for this though, we are going to rely on handling the promise that dismiss() returns to trigger the page navigation. 
      If we just create a spy on this object, it will break our test because dismiss will no longer return a promise. 
      By adding .and.callThrough we are telling the spy that we still want the call to go through to the original function.
      */
      spyOn(spiedObject, 'dismiss').and.callThrough();
      return spiedObject;
    });
    let authResponse = { isValid: true };
    spyOn(authProvider, 'checkKey').and.returnValue(Observable.of(authResponse));
    comp.licenseKey = 'abcde-fghi';
    comp.login();
    tick();
    expect(spiedObject.dismiss).toHaveBeenCalled();
  }));

  it('after a successful login, the root page should be changed to HomePage', fakeAsync(() => {
    let navCtrl = fixture.debugElement.injector.get(NavController);
    let authProvider = fixture.debugElement.injector.get(AuthProvider);
    let authResponse = {
      isValid: true
    };
    spyOn(authProvider, 'checkKey').and.returnValue(Observable.of(authResponse));
    spyOn(navCtrl, 'setRoot');
    comp.licenseKey = 'abcde-fghi';
    comp.login();
    tick();
    expect(navCtrl.setRoot).toHaveBeenCalledWith('HomePage');
  }));

});