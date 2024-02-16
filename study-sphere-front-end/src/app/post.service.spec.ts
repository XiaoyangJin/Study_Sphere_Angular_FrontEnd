import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';
import { Post } from './models/post.model';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PostService', () => {
  let service: PostService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Include HttpClientTestingModule
      providers: [PostService] // Provide your service
    });
    service = TestBed.inject(PostService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Verify that there are no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // test backend get update post function
  it('should fetch posts and update _postsUpdated', () => {
    const mockPosts: Post[] = [
      { id: 1, title: 'Test Post', summary: 'Test summary', main_content: 'Test content' }
    ];

    service.fetchPosts();

    const req = httpTestingController.expectOne('http://localhost:8080/api/posts');
    expect(req.request.method).toEqual('GET');
    req.flush(mockPosts);

    service.postsUpdated.subscribe(posts => {
      expect(posts.length).toBe(1);
      expect(posts).toEqual(mockPosts);
    });
  });

  // test get post by ID
  it('should get a post by ID', () => {
    const mockPost = { id: 1, title: 'Test Post', summary: 'Test summary', main_content: 'Test content' };
    const postId = 1;

    service.getPostById(postId).subscribe(post => {
      expect(post).toEqual(mockPost);
    });

    const req = httpTestingController.expectOne(`http://localhost:8080/api/posts/${postId}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockPost);
  });


});
