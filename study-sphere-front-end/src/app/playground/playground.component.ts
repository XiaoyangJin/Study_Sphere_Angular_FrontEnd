import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ChangeDetectorRef } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  posts: Post[] = [];

  constructor(public postService: PostService, private cdRef: ChangeDetectorRef) {
    this.posts = this.postService.filteredPosts;
  }

  ngOnInit() {
    this.posts = this.postService.filteredPosts;
    // this.cdRef.detectChanges();
  }

  filterByKeyword(keyword: string) {
    this.postService.filterByKeyword(keyword);
    // console.log(keyword + ' valid posts ' + this.postService.filteredPosts);
    // this.cdRef.detectChanges();
  }

  clearFilters() {
    this.postService.clearFilters();
  }

  getPostById(postId: number) {
    return this.postService.getPostById(postId);
  }
}
