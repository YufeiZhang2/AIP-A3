import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ComingSoonMoviesService {
  getUpcomingMovies() {
    return ["The Lord of Ring", "Notting Hill", "Harry Potter"];
  }
}
