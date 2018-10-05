import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Http } from "@angular/http";
import { MovieBooking } from "../components/book-movies/book-movies.model";

@Injectable({
  providedIn: "root"
})
export class BookMovieService {
  constructor(private http: Http) {}

  bookMovie(booking: MovieBooking) {
    return this.http.post(environment.apiBaseUrl + "/book", booking);
  }
}
