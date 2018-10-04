import { Component, OnInit } from "@angular/core";
import { MoviesService } from "./../../services/movies.service";
import { MessagesService } from "./../../services/messages.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "book-movies",
  templateUrl: "./book-movies.component.html",
  styleUrls: ["./book-movies.component.css"]
})
export class BookMoviesComponent implements OnInit {
  movie: any[];
  bookingTime;
  flag: boolean = false;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MoviesService,
    private msgService: MessagesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bookingTime = params.get("showtime");
      console.log(this.bookingTime);

      let _id = params.get("_id");
      console.log(_id);

      this.movieService.getMoviesById(_id).subscribe(response => {
        this.movie = response.json().filter(movie => {
          if (movie.status === "nowShowing") {
            console.log("flag before:", this.flag);
            this.flag = true;
            console.log("flag after:", this.flag);
            return movie;
          }
        });
      });
    });
  }

  backToHome() {
    this.router.navigate(["/home"]);
  }

  onBook(form: NgForm) {
    this.msgService.sendMessage(form.value).subscribe(response => {
      console.log(response.json());
    });
    //this.router.navigate(["/home"]);
  }
}
