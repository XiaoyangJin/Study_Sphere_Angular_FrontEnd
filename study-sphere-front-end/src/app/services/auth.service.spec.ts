import { TestBed } from '@angular/core/testing';

import { AuthService } from './services/auth.service';

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
    // jasmine.any(String) => test expects the value to be of the type String.
  });

  // use fake data as temp check
  it('login() should not authenticate with wrong credentials', () => {
    const result = service.login('wrong', 'credentials');
    expect(result).toBeFalsy();
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  it('logout() should clear session and navigate to root', () => {
    service.logout();
    expect(service.session).toBeUndefined();
    expect(localStorage.removeItem).toHaveBeenCalledWith('session');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/');
  });

  it('addUser() should add a new user correctly', () => {
    const newUser = { name: 'test', username: 'test@test.com', password: 'test' };
    const initialLength = service.users.length;
    service.addUser(newUser);
    expect(service.users.length).toBeGreaterThan(initialLength);
    expect(service.users.some(u => u.username === newUser.username)).toBeTrue();
  });

  // Additional tests for getCurrentUserObservable() and setCurrentUser()
  it('setCurrentUser() should update currentUserSubject', (done: DoneFn) => {
    const username = 'testUser';
    service.getCurrentUserObservable().subscribe(value => {
      if (value) {
        expect(value).toEqual(username);
        done();
      }
    });

    service.setCurrentUser(username);
  });
});
