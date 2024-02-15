import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Include HttpClientTestingModule
      providers: [PostService] // Provide your service
    });
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    const service: PostService = TestBed.inject(PostService);
    expect(service).toBeTruthy();
  });
});
