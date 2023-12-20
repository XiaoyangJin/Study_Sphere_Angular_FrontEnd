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

  onFileChange(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      console.log('FileUpload -> files', fileList);
      // Handle the file processing here
    }
  }

  onSubmit(form: NgForm) {
    console.log('Form Data: ', form.value);
    // Use form values to update `newPost`
    this.newPost.title = form.value.title;
    this.newPost.summary = form.value.summary;
    this.newPost.keywords = form.value.keywords; // assuming keywords is a single value or an array of values

    // Your existing logic...
    this.postService.addNewPost(this.newPost);
    this.router.navigate(['/playground']);

    // Resetting the form if needed
    form.reset();
  }
}
