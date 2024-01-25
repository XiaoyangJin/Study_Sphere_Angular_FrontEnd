// import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
// import { PostService } from '../post.service';
// import { Post } from '../models/post.model';
// import { Router } from '@angular/router';
// import { FormControl } from '@angular/forms';
// import { NgForm } from '@angular/forms';
// import { RouterTestingHarness } from '@angular/router/testing';

// @Component({
//   selector: 'app-create-post',
//   templateUrl: './create-post.component.html',
//   styleUrls: ['./create-post.component.css']
// })
// export class CreatePostComponent implements OnChanges {

//   newPost: Post = {
//     id: 0,
//     title: '',
//     summary: '',
//     keywords: []
//   };

//   constructor(private postService: PostService, private router: Router) { }
//   ngOnChanges(changes: SimpleChanges): void {
//     throw new Error('Method not implemented.');
//   }

//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }

//   onFileChange(event: Event) {
//     const element = event.currentTarget as HTMLInputElement;
//     let fileList: FileList | null = element.files;
//     if (fileList) {
//       console.log('FileUpload -> files', fileList);
//     }
//   }

//   onSubmit(form: NgForm) {
//     console.log('Form Data: ', form.value);
//     this.newPost.title = form.value.title;
//     this.newPost.summary = form.value.summary;
//     this.newPost.keywords = form.value.keywords; // assuming keywords is a single value or an array of values

//     this.postService.addNewPost(this.newPost);
//     this.router.navigate(['/playground']);

//     form.reset();
//   }
// }
import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  newPost: Post = {
    title: '',
    summary: '',
    main_content: ''
    // keywords: []
  };
  maincontent: any;

  constructor(private postService: PostService, private router: Router) { }

  createPost(title: string, summary: string, main_content: string): void {
    const newPost: Post = { title, summary, main_content };
    this.postService.addNewPost(newPost).subscribe(
      response => {
        console.log('Post created:', response);
        // Handle response
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  onFileChange(event: Event) {
    // File change logic here
  }

  onSubmit(form: NgForm) {
    console.log('Form Data: ', form.value);
    this.newPost.title = form.value.title;
    this.newPost.summary = form.value.summary;
    this.newPost.main_content = form.value.maincontent;
    // this.newPost.keywords = form.value.keywords.split(','); // Convert keywords string to array

    // Call the service to add a new post
    this.postService.addNewPost(this.newPost).subscribe(
      response => {
        console.log('Post created successfully', response);
        this.router.navigate(['/successRoute']); // Replace with your success route
      },
      error => {
        console.error('Error creating post:', error);
      }
    );
    this.router.navigate(['/playground']);
    form.reset();
  }
}
