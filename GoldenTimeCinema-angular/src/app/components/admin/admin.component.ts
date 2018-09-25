import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/post.service";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  movieIndex: number;
  movies: any[];

  constructor(private service: PostService, private router: Router) {
  }

  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      this.movies = response.json();
    });
  }

  ngOnChanges() {
    this.onDelete(this.movieIndex);
  }

  //delete a movie based on its object id.
  onDelete(movieIndex) {
    let objectId: number;
    console.log(movieIndex);

    //get the movie id based on the index of the movie
    objectId = this.movies[movieIndex]._id;
    console.log(objectId);

    //delete the specific movie
    this.service.deletePosts(objectId).subscribe(response => {
      console.log(response.json());
    });
    this.router.navigate(["/message"]);
  }

}
