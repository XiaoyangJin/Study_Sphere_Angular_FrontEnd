import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { PostService } from '../../services/post.service';

import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const mockPostService = {
  getPostById: jasmine.createSpy('getPostById').and.returnValue(of({
    id: 123,
    title: 'Test Post',
    content: 'This is a test post'
  }))
};

// Mock ActivatedRoute with params
const mockActivatedRoute = {
  params: of({ id: '123' })
};

@Component({
  selector: 'app-logout-bar',
  template: ''
})
class MockLogoutBarComponent { }


describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  // Mock PostService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostComponent, MockLogoutBarComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: PostService, useValue: mockPostService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // test component creation
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // checks whether the component correctly fetches and assigns a post based on the provided route parameter
  // This test not only verifies the component's ability to interact with its services but also checks that 
  // it behaves as expected when given certain route parameters.
  it('should fetch a post based on the route parameter id', () => {
    expect(component.post).toBeDefined();
    expect(component.post?.id).toBe(123);
  });
});
