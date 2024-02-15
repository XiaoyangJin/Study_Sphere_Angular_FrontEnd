import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostComponent } from './create-post.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostService } from '../post.service';
import { FormsModule } from '@angular/forms';

describe('CreatePostComponent', () => {
  let component: CreatePostComponent;
  let fixture: ComponentFixture<CreatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePostComponent],
      imports: [HttpClientTestingModule, FormsModule], // Include HttpClientTestingModule and Add FormsModule
      providers: [PostService] // Provide PostService
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
