import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { LogoutBarComponent } from './logout-bar.component';

//import for customed tests
import { BrowserModule, By } from '@angular/platform-browser'; // allow us to select elements from the DOM
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LogoutBarComponent', () => {
  let component: LogoutBarComponent;
  let fixture: ComponentFixture<LogoutBarComponent>;
  let authServiceMock: any;
  let router: Router;

  beforeEach(async () => {
    authServiceMock = jasmine.createSpyObj('AuthService', ['logout']);
    await TestBed.configureTestingModule({
      declarations: [
        LogoutBarComponent
      ],
      imports: [
        BrowserModule,
        RouterTestingModule
      ],
      providers: [
        { provide: AuthService, useValue: authServiceMock },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //auth test
  it('should add user and redirect to login when click logout', fakeAsync(() => {
    spyOn(router, 'navigate');
    component.logout();
    expect(authServiceMock.logout).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  }));
});
