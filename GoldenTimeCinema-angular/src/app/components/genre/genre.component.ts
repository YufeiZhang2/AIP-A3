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
  movieResult: any[];

  constructor(private service: MoviesService) { }

  ngOnInit() { }

  findGenre(value) {
    console.log(value);
    this.service.getMovies().subscribe(response => {
      this.movies = response.json();

      for (let movie of this.movies)
        for (let genre of movie.genres) {

          if (this.CompareWithWords(genre, value)) {
            //find all the movies with the same genre
            console.log(movie._id, movie.name);
            this.service.getMoviesById(movie._id).subscribe(response => {
              //get the movies matched by genres
              this.movieResult = response.json();
            })

          }
        }


    })
  }

  //method for verifying if two words match without whitespace
  CompareWithWords(firstWord, secondWord) {
    //remove all the whitespace of strings
    const firstResult = firstWord.toString().toLowerCase().trim().replace(/ /g, '');
    const secondResult = secondWord.toString().toLowerCase().trim().replace(/ /g, '');

    return firstResult === secondResult ? true : false;
  }
}


