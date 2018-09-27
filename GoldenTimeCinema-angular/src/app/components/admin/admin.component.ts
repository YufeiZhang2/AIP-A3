import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/post.service";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  movies: any[];

  //initialize movie service and router
  constructor(private service: PostService, private router: Router) {
  }

  ngOnInit() {
    //get all movies
    this.service.getPosts().subscribe(response => {
      this.movies = response.json();
    });
  }

  //delete a movie
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

    //give a prompt of sucessful operation to admin
    this.router.navigate(["/message"]);
  }

  //update the status of a movie
  onUpdate(movieIndex) {

    // update the status of a movie
    this.movies[movieIndex].status === "nowShowing" ?
      this.movies[movieIndex].status = "comingSoon" : this.movies[movieIndex].status = "nowShowing";

    //get the current movie
    const movie = this.movies[movieIndex];
    console.log("before update", movie);

    //update the status of the specific movie
    this.service.updatePosts(movie).subscribe(response => {
      console.log("response from update:", response.json());
    });
  }
}
