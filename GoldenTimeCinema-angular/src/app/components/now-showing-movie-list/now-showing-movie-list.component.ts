import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "now-showing-movie-list",
  templateUrl: "./now-showing-movie-list.component.html",
  styleUrls: ["./now-showing-movie-list.component.css"]
})
export class NowShowingMovieListComponent implements OnInit {
  movies: any[] = null;
  moviesLenth: number;

  constructor(private service: MoviesService) { }

  ngOnInit() {
    this.service.getMovies().subscribe(response => {
      this.movies = response.json()
        .filter(movie => movie.status === 'nowShowing');
      this.moviesLenth = Object.keys(this.movies).length;
      console.log(this.moviesLenth);
    });


  }

}
