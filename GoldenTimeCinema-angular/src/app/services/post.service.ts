import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = '/api/movies';

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPosts(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePosts(post) {
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post));
  }

  deletePosts(id) {
    return this.http.delete(this.url + '/' + id);
  }
}
