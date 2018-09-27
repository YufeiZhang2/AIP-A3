import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://localhost:3000/api/movies';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  getPostsById(_id) {
    return this.http.get(this.url + '/' + _id);
  }

  createPosts(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePosts(movie) {
    console.log("in service put", movie);
    return this.http.put(this.url + '/' + movie._id, movie);
  }

  deletePosts(_id) {
    return this.http.delete(this.url + '/' + _id);
  }
}
