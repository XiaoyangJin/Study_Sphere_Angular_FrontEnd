import { Injectable } from '@angular/core';
import { Post } from './models/post.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // makes the service available throughout the app
})
export class PostService {
  posts: Post[] = [
    { id: 1, title: 'Post 1 Title', summary: 'This is a summary of Post 1.', keywords: ['keyword1'] },
    { id: 2, title: 'Post 2 Title', summary: 'This is a summary of Post 2.', keywords: ['keyword2'] },
    { id: 3, title: 'Post 3 Title', summary: 'This is a summary of Post 3.', keywords: ['keyword1', 'keyword3'] },
  ];

  private apiUrl = 'http://localhost:8080/api/posts'; // API URL

  private _postsUpdated = new BehaviorSubject<Post[]>(this.posts);


  get postsUpdated() {
    return this._postsUpdated.asObservable();
  }

  filteredPosts: Post[] = this.posts;

  filterByKeyword(keyword: string) {
    this.filteredPosts = this.posts.filter(post => post.keywords.includes(keyword));
    // console.log(keyword + ' valid posts ' + this.filteredPosts);
  }

  clearFilters() {
    this.filteredPosts = this.posts; // Reset filteredPosts to all posts
  }

  getPostById(postId: number) {
    return this.posts.find(post => post.id === postId);
  }

  addNewPost(newPost: Post) {
    const newPostId = this.posts.length + 1;
    newPost.id = newPostId;

    this.posts.push(newPost);
    this._postsUpdated.next([...this.posts]);
  }
}
