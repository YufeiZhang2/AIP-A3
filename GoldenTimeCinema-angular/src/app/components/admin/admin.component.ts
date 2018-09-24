import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/post.service";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  movies: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      this.movies = response.json();
    });
  }

}
