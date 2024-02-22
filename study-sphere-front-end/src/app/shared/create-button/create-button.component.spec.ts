import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateButtonComponent } from './create-button.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('CreateButtonComponent', () => {
  let component: CreateButtonComponent;
  let fixture: ComponentFixture<CreateButtonComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreateButtonComponent
      ],
      imports: [
        RouterTestingModule
      ]
    });
    fixture = TestBed.createComponent(CreateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // navigate to '/create-post' page
  it('should redirect to create post page', () => {
    spyOn(router, 'navigate');
    component.navigateToCreatePost();
    expect(router.navigate).toHaveBeenCalledWith(['/create-post']);
  })
});
