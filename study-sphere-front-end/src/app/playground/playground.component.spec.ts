import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundComponent } from './playground.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostService } from '../post.service';

describe('PlaygroundComponent', () => {
  let component: PlaygroundComponent;
  let fixture: ComponentFixture<PlaygroundComponent>;

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
});
