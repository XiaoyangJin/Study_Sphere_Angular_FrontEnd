import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  posts: any[] = []; // Define the posts property here

  constructor(public postService: PostService) { }

  ngOnInit() {
    // You can initialize posts here or leave it empty if you want to fetch data later
  }

  filterByKeyword(keyword: string) {
    this.postService.filterByKeyword(keyword);
  }

  clearFilters() {
    this.postService.clearFilters();
  }

  getPostById(postId: number) {
    return this.postService.getPostById(postId);
  }
}
