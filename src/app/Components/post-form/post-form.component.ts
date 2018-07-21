import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  /* addPost(id) { 
    if (!id) {
      alert('Please add post');
    } else { 
      this.postService.savePost(id).subscribe(post => {
        //console.log("Post="+post);
        alert("post="+post);
      });
    }
  }
} */

 /*  addPost(id) {
    this.postService.savePost(id)
      .subscribe(post => this.employees.push(id));
  } */

  addPost() {
    this.postService.savePost();
  }
}