import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "genre",
  templateUrl: "./genre.component.html",
  styleUrls: ["./genre.component.css"]
})
export class GenreComponent implements OnInit {
  dramas = "dramas";
  action = "action";
  crime = "crime";
  horror = "horror";
  comedies = "comedies"
  fantasy = "fantasy";
  romance = "romance";
  movies: any[];

  constructor(private service: MoviesService) { }

  ngOnInit() { }

  findMoviesByGenre(inputValue) {
    console.log(inputValue);
    this.service.getMovies().subscribe(response => {
      //get movies by genres
      this.movies = response.json()
        .filter(movies => {
          for (let genre of movies.genres)
            if (genre === inputValue) return movies;
        });
      console.log("movies retrived by genres", this.movies);
    })
  }
}


