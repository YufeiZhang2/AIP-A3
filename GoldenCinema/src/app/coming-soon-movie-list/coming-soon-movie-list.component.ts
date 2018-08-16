import { Component, OnInit } from "@angular/core";
import { ComingSoonMoviesService } from "../coming-soon-movies.service";

@Component({
  selector: "coming-soon-movie-list",
  templateUrl: "./coming-soon-movie-list.component.html",
  styleUrls: ["./coming-soon-movie-list.component.css"]
})
export class ComingSoonMovieListComponent implements OnInit {
  movies;

  constructor(service: ComingSoonMoviesService) {
    this.movies = service.getUpcomingMovies();
  }

  ngOnInit() {}
}
