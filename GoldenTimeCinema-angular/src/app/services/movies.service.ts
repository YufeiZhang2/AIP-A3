import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor(private http: Http) {}

  private url = environment.apiBaseUrl + "/movies";

  // Link to api in movieController
  getMovies() {
    return this.http.get(this.url);
  }

  getMoviesById(_id) {
    return this.http.get(this.url + "/" + _id);
  }

  createMovies(movie) {
    return this.http.post(this.url, movie);
  }

  updateMovies(movie) {
    console.log("in service put", movie);
    return this.http.put(this.url + "/" + movie._id, movie);
  }

  deleteMovies(_id) {
    return this.http.delete(this.url + "/" + _id);
  }
}
