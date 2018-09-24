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
    //get the router parameter that is the object id of a movie.
    this.route.paramMap
      .subscribe(params => {
        let _id = params.get('_id');
        console.log(_id);

        //get a specific movie object by its object id
        this.service.getPostsById(_id).subscribe(response => {
          this.movie = response.json();
          console.log(this.movie);
        })
      })
  }

}
