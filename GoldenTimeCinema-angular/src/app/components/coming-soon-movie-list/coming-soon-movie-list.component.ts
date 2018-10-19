import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: "coming-soon-movie-list",
  templateUrl: "./coming-soon-movie-list.component.html",
  styleUrls: ["./coming-soon-movie-list.component.css"]
})
export class ComingSoonMovieListComponent implements OnInit {
  movies: any[];

  //inject movie sevice in the constructor
  constructor(private service: MoviesService) { }

  //get all the movies that are coming soon at initial stage 
  ngOnInit() {
    this.service.getMovies().subscribe(response => {
      this.movies = response.json()
        .filter(movie => movie.status === 'comingSoon');
    });
  }
}


