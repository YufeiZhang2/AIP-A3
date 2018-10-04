import { Injectable } from '@angular/core';
import { MoviesService } from './../../../services/movies.service';
import { AbstractControl, ValidationErrors, AsyncValidator } from '@angular/forms';

@Injectable()
export class MovieInfoValidators {

    static shouldBeUnique(service: MoviesService) {
        return (control: AbstractControl) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    service.getMovies().subscribe(response => {
                        console.log(response.json());
                        let movies = response.json();
                        for (let movie of movies) {
                            console.log(movie);
                            if (control.value.toString().toLowerCase().trim().replace(/ /g, '') === movie.name.toString().toLowerCase().trim().replace(/ /g, ''))
                                return resolve({ shouldBeUnique: true });
                        }
                        return resolve(null);
                    })
                }, 1000)
            })
        }
    }
}
