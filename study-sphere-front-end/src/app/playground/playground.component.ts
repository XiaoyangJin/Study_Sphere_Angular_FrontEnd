import { Component } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent {

  constructor() { }

  posts: any[] = [
    { id: 1, title: 'Post 1 Title', summary: 'This is a summary of Post 1.', keywords: ['keyword1'] },
    { id: 2, title: 'Post 2 Title', summary: 'This is a summary of Post 2.', keywords: ['keyword2'] },
    { id: 3, title: 'Post 3 Title', summary: 'This is a summary of Post 3.', keywords: ['keyword1', 'keyword3'] },
  ];

  filteredPosts: any[] = this.posts;

  filterByKeyword(keyword: string) {
    this.filteredPosts = this.posts.filter(post => post.keywords.includes(keyword));
  }

  clearFilters() {
    this.filteredPosts = this.posts; // Reset filteredPosts to all posts
  }

  getPostById(postId: number) {
    return this.posts.find(post => post.id === postId);
  }
}
