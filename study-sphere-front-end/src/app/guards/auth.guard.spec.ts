import { TestBed } from '@angular/core/testing';
import { AuthGuardService } from './auth.guard';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

describe('AuthGuardService', () => {
  let guard: AuthGuardService;
  let authService: Partial<AuthService>;
  let router: Partial<Router>;

  // Create mock objects
  const mockActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
  const mockRouterStateSnapshot = {} as RouterStateSnapshot;

  beforeEach(() => {
    authService = { session: null }; // Mock AuthService with initial unauthenticated state
    router = { navigateByUrl: jasmine.createSpy('navigateByUrl') }; // Mock Router

    TestBed.configureTestingModule({
      providers: [
        AuthGuardService,
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router }
      ]
    });

    guard = TestBed.inject(AuthGuardService);
  });

  it('should allow the authenticated user to navigate', () => {
    authService.session = {}; // Simulate authenticated user
    expect(guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot)).toBeTrue();
  });

  it('should redirect an unauthenticated user to the home page', () => {
    authService.session = null; // Simulate unauthenticated user
    expect(guard.canActivate(mockActivatedRouteSnapshot, mockRouterStateSnapshot)).toBeFalse();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/');
  });
});

