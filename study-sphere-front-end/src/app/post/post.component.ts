import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaygroundComponent } from '../playground/playground.component'; // Import your PlaygroundComponent

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postId: number = 0;
  post: any;

  constructor(private route: ActivatedRoute, private playgroundComponent: PlaygroundComponent) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId = +params.get('id')!; // Convert the parameter to a number if needed
      this.post = this.playgroundComponent.getPostById(this.postId); // Fetch the post data
    });
  }
}
