import { Component, OnInit } from "@angular/core";
import { NowShowingMoviesService } from "../../services/now-showing-movies.service";

@Component({
  selector: "now-showing-movie-list",
  templateUrl: "./now-showing-movie-list.component.html",
  styleUrls: ["./now-showing-movie-list.component.css"]
})
export class NowShowingMovieListComponent implements OnInit {
  movies;
  constructor(service: NowShowingMoviesService) {
    this.movies = service.getShowingMovies();
  }

  ngOnInit() {}
}
