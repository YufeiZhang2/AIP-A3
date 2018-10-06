import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url = 'http://ec2-18-236-193-77.us-west-2.compute.amazonaws.com:3000/api/movies';

  constructor(private http: Http) { }

  getMovies() {
    return this.http.get(this.url);
  }

  getMoviesById(_id) {
    return this.http.get(this.url + '/' + _id);
  }

  createMovies(movie) {
    return this.http.post(this.url, movie);
  }

  updateMovies(movie) {
    console.log("in service put", movie);
    return this.http.put(this.url + '/' + movie._id, movie);
  }

  deleteMovies(_id) {
    return this.http.delete(this.url + '/' + _id);
  }
}
