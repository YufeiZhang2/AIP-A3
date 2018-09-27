import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: "coming-soon-movie-list",
  templateUrl: "./coming-soon-movie-list.component.html",
  styleUrls: ["./coming-soon-movie-list.component.css"]
})
export class ComingSoonMovieListComponent implements OnInit {
  movies: any[];

  constructor(private service: MoviesService) {
  }

  ngOnInit() {
    this.service.getMovies().subscribe(response => {
      this.movies = response.json()
        .filter(movie => movie.status === 'comingSoon');
    });
  }


}


