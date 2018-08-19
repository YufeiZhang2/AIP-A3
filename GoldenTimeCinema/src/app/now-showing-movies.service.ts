import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NowShowingMoviesService {
  getShowingMovies() {
    return [
      "Good Will Hunting",
      "Forest Gump",
      "Catch Me If You Can",
      "Terminal"
    ];
  }
}
