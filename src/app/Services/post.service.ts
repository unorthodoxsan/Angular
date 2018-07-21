import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Post } from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
})
  
}

@Injectable()
export class PostService {
  //postsUrl: string = 'https://api.myjson.com/bins/1b1a9u';

  postsUrl: string = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  /* savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  } */

savePost(){

  const req = this.http.post('http://localhost:3000/employees', {
    "id" : "2"
  })
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );

}
}

