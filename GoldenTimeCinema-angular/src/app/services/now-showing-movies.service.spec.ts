import { TestBed, inject } from '@angular/core/testing';

import { NowShowingMoviesService } from './now-showing-movies.service';

describe('NowShowingMoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NowShowingMoviesService]
    });
  });

  it('should be created', inject([NowShowingMoviesService], (service: NowShowingMoviesService) => {
    expect(service).toBeTruthy();
  }));
});
