import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaygroundComponent } from './playground.component';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { of } from 'rxjs';

describe('PlaygroundComponent', () => {
  let component: PlaygroundComponent;
  let fixture: ComponentFixture<PlaygroundComponent>;
  let mockPostService = {
    fetchPosts: jasmine.createSpy('fetchPosts'),
    postsUpdated: of([{ id: 1, title: 'Test Post', summary: 'Test Summary', main_content: 'This is a test' }]),
    getPostById: jasmine.createSpy('getPostById').and.returnValue({ id: 1, title: 'Test Post', summary: 'Test Summary', main_content: 'This is a test' })
  };
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaygroundComponent],
      providers: [
        { provide: PostService, useValue: mockPostService },
        { provide: Router, useValue: mockRouter },
        ChangeDetectorRef
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // This triggers ngOnInit
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // You can add your test cases here
});
