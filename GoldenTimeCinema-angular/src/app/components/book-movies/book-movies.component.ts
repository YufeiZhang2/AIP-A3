import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'book-movies',
  templateUrl: './book-movies.component.html',
  styleUrls: ['./book-movies.component.css']
})
export class BookMoviesComponent implements OnInit {
  movie: any[];
  bookingTime;
  flag: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private service: MoviesService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.bookingTime = params.get('showtime');
        console.log(this.bookingTime);

        let _id = params.get('_id');
        console.log(_id);

        this.service.getMoviesById(_id).subscribe(response => {
          this.movie = response.json()
            .filter(movie => {
              if (movie.status === "nowShowing") {
                console.log('flag before:', this.flag);
                this.flag = true;
                console.log('flag after:', this.flag);
                return movie;
              }
            });
        })
      })

  }

  backToHome() {
    this.router.navigate(["/home"]);
  }
}
