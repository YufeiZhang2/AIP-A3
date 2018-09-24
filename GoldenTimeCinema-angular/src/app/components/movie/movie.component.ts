import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/post.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: any[];

  constructor(private route: ActivatedRoute, private service: PostService) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        let id = params.get('_id');
        console.log(id);
        this.service.getPostsById(id).subscribe(response => {
          this.movie = response.json();
          console.log(this.movie);
        })
      })
  }

}
