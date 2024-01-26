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
    this.posts = this.postService.posts;
  }

  ngOnInit() {
    this.posts = this.postService.posts;
    this.postService.postsUpdated.subscribe(updatedPosts => {
      this.posts = updatedPosts;
      this.cdRef.detectChanges(); // Trigger change detection if needed
    });
  }

  // getPostById(postId: number) {
  //   // return this.postService.getPostById(postId);
  // }

  // navigateToPost(postId: number) {
  //   // Use the router to navigate to the post page
  //   this.router.navigate(['/post', postId]);
  // }
}
