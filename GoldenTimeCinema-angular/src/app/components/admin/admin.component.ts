import { MoviesService } from './../../services/movies.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  movies: any[];

  //initialize movie service and router
  constructor(private service: MoviesService, private router: Router) {
  }

  ngOnInit() {
    //get all movies
    this.service.getMovies().subscribe(response => {
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
    this.service.deleteMovies(objectId).subscribe(response => {
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
    this.service.updateMovies(movie).subscribe(response => {
      console.log("response from update:", response.json());
    });
  }
}
