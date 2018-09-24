import { Component, OnInit } from "@angular/core";
import { PostService } from "../../services/post.service";

@Component({
  selector: "now-showing-movie-list",
  templateUrl: "./now-showing-movie-list.component.html",
  styleUrls: ["./now-showing-movie-list.component.css"]
})
export class NowShowingMovieListComponent implements OnInit {
  movies: any[];
  nowShowingMovies: any[];
  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      this.movies = response.json()
        .filter(movie => movie.status === 'nowShowing');
    });
  }

}
