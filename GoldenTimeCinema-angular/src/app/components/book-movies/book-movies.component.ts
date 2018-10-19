import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import { TicketService } from "../../services/ticket.service";
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
  uId: string = "anonymous";
  flag: boolean = false;
  bookingComplete: boolean = false;
  userFlag: boolean = this.authService.isLoggedIn();
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MoviesService,
    private bookingService: TicketService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // get showtime sessions of movie
      this.bookingTime = params.get("showtime");
      let _id = params.get("_id");

      // get movie by id and its relevant parameters
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
          this.uId = this.userDetails._id;
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

  // Navigate back to Home page
  backToHome() {
    this.router.navigate(["/home"]);
  }

  // When movie booking Form is submitted
  onBook(form: NgForm) {
    // create an object with submitted value from booking Form
    let bookingValue = {
      movieName: this.movieName,
      session: this.bookingTime,
      price: this.price,
      email: form.value.email,
      uId: this.uId
    };
    this.bookingService.bookMovie(bookingValue).subscribe(response => {
      this.bookingComplete = true;

      // Success message for bookingComplete status dissapears after 4 seconds
      setTimeout(() => (this.bookingComplete = false), 4000);
    });
  }
}
