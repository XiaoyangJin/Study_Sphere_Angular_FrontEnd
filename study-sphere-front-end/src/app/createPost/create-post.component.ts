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
  };
  maincontent: any;

  constructor(private postService: PostService, private router: Router) { }

  createPost(title: string, summary: string, main_content: string, form: NgForm): void {
    const newPost: Post = { title, summary, main_content };
    this.postService.addNewPost(newPost).subscribe(
      response => {
        console.log('Post created:', response);
      },
      error => {
        console.error('Error:', error);
      }
    );
    this.router.navigate(['/playground']);
    form.reset();
  }

  onFileChange(event: Event) {
    // File change logic here
  }

  // onSubmit(form: NgForm) {
  //   console.log('Form Data: ', form.value);
  //   this.newPost.title = form.value.title;
  //   this.newPost.summary = form.value.summary;
  //   this.newPost.main_content = form.value.maincontent;

  //   // Call the service to add a new post
  //   this.postService.addNewPost(this.newPost).subscribe(
  //     response => {
  //       console.log('Post created successfully', response);
  //     },
  //     error => {
  //       console.error('Error creating post:', error);
  //     }
  //   );
  //   this.router.navigate(['/playground']);
  //   form.reset();
  // }
}
