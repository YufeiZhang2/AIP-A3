import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor(private http: Http) {}

  getMovies() {
    return this.http.get(environment.apiBaseUrl);
  }

  getMoviesById(_id) {
    return this.http.get(environment.apiBaseUrl + "/" + _id);
  }

  createMovies(movie) {
    return this.http.post(environment.apiBaseUrl, movie);
  }

  updateMovies(movie) {
    console.log("in service put", movie);
    return this.http.put(environment.apiBaseUrl + "/" + movie._id, movie);
  }

  deleteMovies(_id) {
    return this.http.delete(environment.apiBaseUrl + "/" + _id);
  }
}
