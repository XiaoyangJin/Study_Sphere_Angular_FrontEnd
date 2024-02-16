import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { async } from '@angular/core/testing';

import { SignupComponent } from './signup.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import for customed tests
import { BrowserModule, By } from '@angular/platform-browser'; // allow us to select elements from the DOM
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RouterTestingModule } from '@angular/router/testing';


describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let authServiceMock: any;
  let router: Router;

  beforeEach(async () => {
    authServiceMock = jasmine.createSpyObj('AuthService', ['addUser']);
    await TestBed.configureTestingModule({
      declarations: [
        SignupComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance; //signup cpmponent test instance
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //can correctly extract form values
  it('should extract username and password from the signupForm and add a new user', () => {
    // Set up the form values
    component.signupForm.controls['username'].setValue('testname@email.com');
    component.signupForm.controls['password'].setValue('testpassword');

    // Call the signup method
    component.signup();

    // Verify that authService.addUser was called with the correct parameters
    expect(authServiceMock.addUser).toHaveBeenCalledWith({
      username: 'testname@email.com',
      password: 'testpassword'
    });

    // No need to check the form values after signup, as they're expected to be null due to form reset
  });




  //valid vs invalid
  it('form should be valid', async(() => {
    component.signupForm.controls['username'].setValue('testname@email.com');
    component.signupForm.controls['password'].setValue('testpassword');
    expect(component.signupForm.valid).toBeTruthy();
  }));

  // Nullish test
  it('form should be invalid', async(() => {
    component.signupForm.controls['username'].setValue('');
    component.signupForm.controls['password'].setValue('');
    expect(component.signupForm.valid).toBeFalsy();
  }));

  // Length test - username
  it('form should be invalid', async(() => {
    component.signupForm.controls['username'].setValue('123');
    component.signupForm.controls['password'].setValue('123456789');
    expect(component.signupForm.valid).toBeFalsy();
  }));

  // Length test - password
  it('form should be invalid', async(() => {
    component.signupForm.controls['username'].setValue('12345');
    component.signupForm.controls['password'].setValue('1234567');
    expect(component.signupForm.valid).toBeFalsy();
  }));

  //auth test
  it('should add user and redirect to login on successful signup', fakeAsync(() => {
    spyOn(router, 'navigate');
    component.signupForm.controls['username'].setValue('testname@email.com');
    component.signupForm.controls['password'].setValue('testpassword');
    component.signup();
    tick(); // Simulate passage of time if necessary
    expect(authServiceMock.addUser).toHaveBeenCalledWith({ username: 'testname@email.com', password: 'testpassword' });
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  }));

  // reset the signup form
  it('should reset the signupForm after successful signup', () => {
    component.signupForm.controls['username'].setValue('testuser');
    component.signupForm.controls['password'].setValue('password123');
    component.signup();
    expect(component.signupForm.get('username')?.value).toBeNull();
    expect(component.signupForm.get('password')?.value).toBeNull();
  });

});