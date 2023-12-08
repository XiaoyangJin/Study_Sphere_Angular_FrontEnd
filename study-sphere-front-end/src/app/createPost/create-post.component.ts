import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post.model';

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

  constructor(private postService: PostService) { }

  onSubmit() {
    this.postService.addNewPost(this.newPost);

    this.newPost = {
      id: 0,
      title: '',
      summary: '',
      keywords: []
    };
  }
}
