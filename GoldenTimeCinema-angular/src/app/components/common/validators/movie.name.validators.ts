import { Injectable } from "@angular/core";
import { MoviesService } from "../../../services/movies.service";
import { AbstractControl } from "@angular/forms";

@Injectable()
export class MovieInfoValidators {
  //evaluate if the new movie is already in the database
  static shouldBeUnique(service: MoviesService) {
    return (control: AbstractControl) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          service.getMovies().subscribe(response => {
            let movies = response.json();

            for (let movie of movies)
              //iterate the movie list to check if the new movie being matches the movie's name in database
              if (control.value.toString().toLowerCase().trim().replace(/ /g, "") === movie.name.toString().toLowerCase().trim().replace(/ /g, ""))
                return resolve({ shouldBeUnique: true });

            //valiadtion passes if the new movie is not in the movie database
            return resolve(null);
          });
        }, 1000);
      });
    };
  }
}

