import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  newPost: Post = {
    id: 0,
    title: '',
    summary: '',
    keywords: []
  };

  titleFormControl = new FormControl();
  summaryFormControl = new FormControl();
  keywordsFormControl = new FormControl();

  constructor(private postService: PostService, private router: Router) { }

  onSubmit() {

    this.newPost.title = this.titleFormControl.value;
    this.newPost.summary = this.summaryFormControl.value;
    this.newPost.keywords = this.keywordsFormControl.value;

    this.postService.addNewPost(this.newPost);
    console.log("click create");

    this.newPost = {
      id: 0,
      title: '',
      summary: '',
      keywords: []
    };
    this.router.navigate(['/playground']);
  }
}
