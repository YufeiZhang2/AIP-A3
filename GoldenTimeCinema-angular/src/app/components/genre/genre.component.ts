import { MoviesService } from "../../services/movies.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "genre",
  templateUrl: "./genre.component.html",
  styleUrls: ["./genre.component.css"]
})
export class GenreComponent {
  //default genres input
  dramas = "dramas";
  action = "action";
  crime = "crime";
  horror = "horror";
  comedies = "comedies";
  fantasy = "fantasy";
  romance = "romance";
  movies: any[];

  //initiate movie service
  constructor(private service: MoviesService) { }

  //get movies bt genres
  findMoviesByGenre(genreInput) {
    this.service.getMovies().subscribe(response => {
      //get the entire information of movies by genres
      this.movies = response.json().filter(movies => {
        for (let genre of movies.genres)
          if (genre.toLowerCase() === genreInput.toLowerCase()) return movies;
      });
    });
  }
}
