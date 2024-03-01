import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundComponent } from './playground.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostService } from '../post.service';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-logout-bar',
  template: ''
})
class MockLogoutBarComponent { }

class MockPostService {
  fetchPosts = jasmine.createSpy('fetchPosts');
  postsUpdated = of([{ id: 1, title: 'Test Post', summary: 'Test Summary', main_content: 'This is a test' }]);

  getPostById = jasmine.createSpy('getPostById').and.returnValue({ id: 1, title: 'Test Post', summary: 'Test Summary', main_content: 'This is a test' });
}

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

describe('PlaygroundComponent', () => {
  let component: PlaygroundComponent;
  let fixture: ComponentFixture<PlaygroundComponent>;
  let mockPostService: MockPostService;
  let mockRouter: MockRouter;

  beforeEach(async () => {
    mockPostService = new MockPostService();
    mockRouter = new MockRouter();

    await TestBed.configureTestingModule({
      declarations: [MockLogoutBarComponent, PlaygroundComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: PostService, useValue: mockPostService },
        { provide: Router, useValue: mockRouter },
        ChangeDetectorRef
      ]
    })
      .compileComponents();
  });


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaygroundComponent],
      imports: [HttpClientTestingModule], // Include HttpClientTestingModule here
      providers: [PostService] // Provide PostService
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call fetchPosts and subscribe to postsUpdated on ngOnInit', () => {
  //   // ngOnInit is called by fixture.detectChanges() in the beforeEach block
  //   fixture.detectChanges();
  //   expect(mockPostService.fetchPosts).toHaveBeenCalled();
  //   expect(component.posts.length).toBeGreaterThan(0);
  // });

});
