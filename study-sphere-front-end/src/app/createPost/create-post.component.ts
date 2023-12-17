import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { RouterTestingHarness } from '@angular/router/testing';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnChanges {
  titleFormControl = new FormControl();
  summaryFormControl = new FormControl();
  keywordsFormControl = new FormControl();

  newPost: Post = {
    id: 0,
    title: '',
    summary: '',
    keywords: []
  };

  constructor(private postService: PostService, private router: Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {

    this.newPost.title = this.titleFormControl.value;
    this.newPost.summary = this.summaryFormControl.value;
    this.newPost.keywords = this.keywordsFormControl.value;

    // this.titleFormControl.setValue(this.titleFormControl.value);

    console.log(this.newPost + "before service");

    this.postService.addNewPost(this.newPost);
    console.log(this.newPost + "after service");
    console.log("click create");


    this.router.navigate(['/playground']);

    this.newPost = {
      id: 0,
      title: '',
      summary: '',
      keywords: []
    };
  }
}
