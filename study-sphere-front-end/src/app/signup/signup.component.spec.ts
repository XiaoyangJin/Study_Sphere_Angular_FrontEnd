import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async } from '@angular/core/testing';

import { SignupComponent } from './signup.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import for customed tests
import { BrowserModule, By } from '@angular/platform-browser'; // allow us to select elements from the DOM
import { DebugElement } from '@angular/core';


describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SignupComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(SignupComponent);
      component = fixture.componentInstance; //signup cpmponent test instance
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //can correctly extract form values
  it('should extract username and password from the signupForm', () => {
    component.signupForm.controls['username'].setValue('testemain@email.com');
    component.signupForm.controls['password'].setValue('testpassword');
    component.signup(); // Assuming signup is public for testing
    expect(component.signupForm.get('username')?.value).toBe('testemain@email.com');
    expect(component.signupForm.get('password')?.value).toBe('testpassword');
  });


  //valid vs invalid
  it('form should be valid', async(() => {
    component.signupForm.controls['username'].setValue('testemain@email.com');
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
});