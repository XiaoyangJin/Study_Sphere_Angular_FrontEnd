import { Component } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent {
  posts: any[] = [
    { title: 'Post 1 Title', summary: 'This is a summary of Post 1.', keywords: ['keyword1'] },
    { title: 'Post 2 Title', summary: 'This is a summary of Post 2.', keywords: ['keyword2'] },
    { title: 'Post 3 Title', summary: 'This is a summary of Post 3.', keywords: ['keyword1', 'keyword3'] },
  ];

  filteredPosts: any[] = [];

  filterByKeyword(keyword: string) {
    this.filteredPosts = this.posts.filter(post => post.keywords.includes(keyword));
  }

  clearFilters() {
    this.filteredPosts = this.posts; // Reset filteredPosts to all posts
  }
}
