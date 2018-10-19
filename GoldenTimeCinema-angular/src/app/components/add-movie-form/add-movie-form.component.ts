import { MovieInfoValidators } from "../common/validators/movie.name.validators";
import { FormArrayValidators } from "../common/validators/formArray.validators";
import { MoviesService } from "../../services/movies.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";

@Component({
  selector: "add-movie-form",
  templateUrl: "./add-movie-form.component.html",
  styleUrls: ["./add-movie-form.component.css"]
})
export class AddMovieFormComponent implements OnInit {
  //create from group, form control and form array for user input for the infomation of a movie
  form = new FormGroup({
    name: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(60)
      ]),
      MovieInfoValidators.shouldBeUnique(this.service)
    ),
    runningTime: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.min(1),
        Validators.max(500)
      ])
    ),
    director: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ])
    ),
    stars: new FormArray([], FormArrayValidators.cannotBeNull),
    storyline: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000)
      ])
    ),
    showtime: new FormArray([], FormArrayValidators.cannotBeNull),
    genres: new FormArray([], FormArrayValidators.cannotBeNull),
    price: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.min(1),
        Validators.max(10000)
      ])
    ),
    status: new FormControl("", Validators.required)
  });

  //accesser for the FormConrol name
  get name() {
    return this.form.get("name");
  }
  //accesser for the FormConrol runningTime
  get runningTime() {
    return this.form.get("runningTime");
  }
  //accesser for the FormControl director
  get director() {
    return this.form.get("director");
  }
  //accesser for the FormArray stars
  get stars() {
    return this.form.get("stars") as FormArray;
  }
  //accesser for the FormControl storyline
  get storyline() {
    return this.form.get("storyline");
  }
  //accesser for the FormArray showtime
  get showtime() {
    return this.form.get("showtime") as FormArray;
  }
  //accesser for the FormArray genres
  get genres() {
    return this.form.get("genres") as FormArray;
  }
  //accesser for the FormControl storyline
  get status() {
    return this.form.get("status");
  }
  //accesser for the FormConrol runningTime
  get price() {
    return this.form.get("price");
  }

  constructor(private router: Router, private service: MoviesService) {}

  ngOnInit() {}

  //add star name in the stars array
  addStar(star: HTMLInputElement) {
    this.stars.push(new FormControl(star.value));
    //clear the enter field
    star.value = "";
  }
  //delete a star name in the stars array
  removeStar(star: FormControl) {
    let index = this.stars.controls.indexOf(star);
    this.stars.removeAt(index);
  }

  //add showtime in the stars array
  addShowtime(showtimeItem: HTMLInputElement) {
    this.showtime.push(new FormControl(showtimeItem.value));
    //clear the enter field
    showtimeItem.value = "";
  }
  //delete a star name in the stars array
  removeShowtime(showtimeItem: FormControl) {
    let index = this.stars.controls.indexOf(showtimeItem);
    this.showtime.removeAt(index);
  }

  //add star name in the stars array
  addGenre(genre: HTMLInputElement) {
    this.genres.push(new FormControl(genre.value));
    //clear the enter field
    genre.value = "";
  }
  //delete a star name in the stars array
  removeGenre(genre: FormControl) {
    let index = this.genres.controls.indexOf(genre);
    this.genres.removeAt(index);
  }

  //submit the form
  onSubmit() {
    //console.log(this.form.value);
    this.service.createMovies(this.form.value).subscribe(response => {
      console.log(response.json());
    });

    //give a prompt of sucessful operation to admin
    this.router.navigate(["/message"]);
  }

  //button back to admin page
  ClickToAdmin() {
    this.router.navigate(["/admin"]);
  }
}
