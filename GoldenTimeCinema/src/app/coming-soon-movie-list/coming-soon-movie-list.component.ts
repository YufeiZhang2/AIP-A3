import { Component, OnInit } from "@angular/core";
import { PostService } from './../services/post.service';

@Component({
  selector: "coming-soon-movie-list",
  templateUrl: "./coming-soon-movie-list.component.html",
  styleUrls: ["./coming-soon-movie-list.component.css"]
})
export class ComingSoonMovieListComponent implements OnInit {
  movies: any[];

  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.movies = response.json();
      })
  }
}
