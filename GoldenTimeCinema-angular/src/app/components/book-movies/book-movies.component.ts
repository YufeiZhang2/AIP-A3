import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import { BookMovieService } from "../../services/book-movie.service";
import { AuthenticationService } from "../../services/authentication.service";

import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "book-movies",
  templateUrl: "./book-movies.component.html",
  styleUrls: ["./book-movies.component.css"]
})
export class BookMoviesComponent implements OnInit {
  movie: any[];
  movieName;
  bookingTime;
  price;
  email;
  userDetails;
  flag: boolean = false;
  bookingComplete: boolean = false;
  userFlag: boolean = this.authService.isLoggedIn();
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MoviesService,
    private bookingService: BookMovieService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bookingTime = params.get("showtime");
      console.log(this.bookingTime);

      let _id = params.get("_id");
      console.log(_id);

      this.movieService.getMoviesById(_id).subscribe(response => {
        this.movie = response.json().filter(movie => {
          this.movieName = movie.name;
          this.price = movie.price;
          if (movie.status === "nowShowing") {
            console.log("flag before:", this.flag);
            this.flag = true;
            console.log("flag after:", this.flag);
            return movie;
          }
        });
      });
    });

    // If user is logged in, get user information
    if (this.userFlag) {
      this.authService.getUserProfile().subscribe(
        res => {
          this.userDetails = res["user"];
        },
        err => {}
      );
    }
  }

  // If movie is "now showing" and user is not logged in
  onlyMovie() {
    if (this.flag && !this.userFlag) {
      return true;
    } else {
      return false;
    }
  }

  // If movie is "now showing" and user is logged in
  bothMovieUser() {
    if (this.flag && this.userFlag) {
      return true;
    } else {
      return false;
    }
  }

  backToHome() {
    this.router.navigate(["/home"]);
  }

  onBook(form: NgForm) {
    let bookingValue = {
      movieName: this.movieName,
      session: this.bookingTime,
      price: this.price,
      email: form.value.email
    };
    this.bookingService.bookMovie(bookingValue).subscribe(response => {
      this.bookingComplete = true;
      setTimeout(() => (this.bookingComplete = false), 4000); // Success message for bookingComplete status dissapears after 4 seconds
    });
  }
}
