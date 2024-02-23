import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  let service: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AuthService
      ]
    });
    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);

    // Mock localStorage
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'removeItem');
    spyOn(localStorage, 'getItem').and.returnValue(null);

    // Mock navigation
    spyOn(router, 'navigateByUrl');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login() should authenticate user and store session', () => {
    const user = { username: 'xy@gmail.com', password: '12345' };
    const result = service.login(user.username, user.password);
    expect(result).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith('session', jasmine.any(String));
  });

  // use fake data as temp check
  it('login() should not authenticate with wrong credentials', () => {
    const result = service.login('wrong', 'credentials');
    expect(result).toBeFalsy();
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });
});
