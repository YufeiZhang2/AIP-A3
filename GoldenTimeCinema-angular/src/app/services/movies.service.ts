import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor(private http: Http) { }

  private url = environment.apiBaseUrl + "/movies";

  // get all the movies 
  getMovies() {
    return this.http.get(this.url);
  }

  // get the movie by its object id
  getMoviesById(_id) {
    return this.http.get(this.url + "/" + _id);
  }

  //post a new movie
  createMovies(movie) {
    return this.http.post(this.url, movie);
  }

  //update a movie's status
  updateMovies(movie) {
    return this.http.put(this.url + "/" + movie._id, movie);
  }

  //delete a movie by its object id
  deleteMovies(_id) {
    return this.http.delete(this.url + "/" + _id);
  }
}
