import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  searchResultId;
  movies: any[];
  movieResult: any[];

  form = new FormGroup({
    'movieName': new FormControl('', [Validators.minLength(2), Validators.maxLength(60)])
  });

  constructor(private service: MoviesService) { }

  ngOnInit() { }

  get movieName() {
    return this.form.get('movieName');
  }

  onSubmit() {
    console.log(this.form.value);
    this.service.getMovies().subscribe(response => {
      this.movies = response.json();
      console.log(this.movies);

      //find every movie in the database for matching user input
      for (let movie of this.movies) {
        console.log(movie.name);

        //if words match, get the sepecific movie from database
        if (this.CompareWithWords(movie.name, this.form.value.movieName)) {
          //get the object id of the matched movie
          this.searchResultId = movie._id;
          console.log(this.searchResultId);
          this.service.getMoviesById(this.searchResultId).subscribe(response => {
            this.movieResult = response.json();
            console.log('i got the movie!', this.movieResult);
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



