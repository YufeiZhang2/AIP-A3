import { MoviesService } from "../../services/movies.service";
import { Component, OnInit } from "@angular/core";
import { CheckWordsMatched } from "../common/checkWordsMatched";
import { FormGroup, FormControl, Validators, } from "@angular/forms";

@Component({
  selector: "search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent {
  searchResultId;
  movies: any[];
  movieResult: any[];
  //flag for indicating if a error message is shown in search page
  flag = false;

  //form for the search bar
  form = new FormGroup({
    movieName: new FormControl("", [
      Validators.minLength(2),
      Validators.maxLength(60)
    ])
  });

  constructor(private service: MoviesService) { }

  get movieName() {
    return this.form.get("movieName");
  }

  onSubmit() {
    this.service.getMovies().subscribe(response => {
      this.movies = response.json();
      //find every movie in the database for matching user input
      for (let movie of this.movies) {
        //if the result is not found, the flag is true.
        this.flag = true;

        //if words match, get the sepecific movie from database
        if (CheckWordsMatched.prototype.CompareWithWords(movie.name, this.form.value.movieName)) {
          //get the object id of the matched movie
          this.searchResultId = movie._id;

          this.service
            .getMoviesById(this.searchResultId)
            .subscribe(response => {
              //if the result is found, the flag is false
              this.flag = false;
              //get the specific movie searched by users
              this.movieResult = response.json();
            });
        }
      }
    });
  }
}
