import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ChangeDetectorRef } from '@angular/core';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  routerLink: any;


  constructor(public postService: PostService, private cdRef: ChangeDetectorRef, private router: Router,
    private postsSubscription: Subscription) {
  }

  ngOnInit() {
    this.postService.fetchPosts();
    this.postsSubscription = this.postService.postsUpdated.subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
  }

  getPostById(postId: number) {
    return this.postService.getPostById(postId);
  }

  navigateToPost(postId: number) {
    // Use the router to navigate to the post page
    this.router.navigate(['/post', postId]);
  }
}
