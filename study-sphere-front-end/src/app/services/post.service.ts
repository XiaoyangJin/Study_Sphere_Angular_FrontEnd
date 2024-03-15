import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8080/api/posts'; // API URL

  private _postsUpdated = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) { }

  get postsUpdated() {
    return this._postsUpdated.asObservable();
  }

  fetchPosts(): void {
    this.http.get<Post[]>(this.apiUrl).subscribe(posts => {
      this._postsUpdated.next(posts);
    }, error => {
      console.error('Error fetching posts:', error);
    });
  }

  getPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${postId}`);
  }

  addNewPost(newPost: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, newPost);
  }
}
