import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // makes the service available throughout the app
})
export class PostService {
  posts: Post[] = [
    { title: 'Post 1 Title', summary: 'This is a summary of Post 1.', main_content: 'maincontent1' },
    { title: 'Post 2 Title', summary: 'This is a summary of Post 2.', main_content: 'maincontent2' },
    { title: 'Post 3 Title', summary: 'This is a summary of Post 3.', main_content: 'maincontent3' },


  ];

  private apiUrl = 'http://localhost:8080/api/posts'; // API URL

  private _postsUpdated = new BehaviorSubject<Post[]>(this.posts);

  constructor(private http: HttpClient) { }


  get postsUpdated() {
    return this._postsUpdated.asObservable();
  }

  getPostById(postId: number) {
    // return this.posts.find(post => post.id === postId);
  }

  // addNewPost(newPost: Post) {
  //   // const newPostId = this.posts.length + 1;
  //   // newPost.id = newPostId;

  //   // this.posts.push(newPost);
  //   // this._postsUpdated.next([...this.posts]);
  //   return this.http.post(this.apiUrl, newPost);
  // }
  addNewPost(newPost: Post): Observable<Post> {
    // Send POST request to the Spring Boot backend
    return this.http.post<Post>(this.apiUrl, newPost);
  }
}
