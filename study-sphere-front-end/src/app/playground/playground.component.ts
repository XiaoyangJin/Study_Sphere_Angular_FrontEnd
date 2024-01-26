import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ChangeDetectorRef } from '@angular/core';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  posts: Post[] = [];
  routerLink: any;

  constructor(public postService: PostService, private cdRef: ChangeDetectorRef, private router: Router) {
  }

  ngOnInit() {
    this.postService.fetchPosts();
    this.postService.postsUpdated.subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  getPostById(postId: number) {
    return this.postService.getPostById(postId);
  }

  navigateToPost(postId: number) {
    // Use the router to navigate to the post page
    this.router.navigate(['/post', postId]);
  }
}
