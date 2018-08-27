import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  name: string;
  showtime: string[];
  runningTime: number;
  director: string;
  genre: string;
  stars: string;
  storyline: string;
  status: string;

  constructor() { }

  ngOnInit() {
  }

}
