import { TestBed, inject } from "@angular/core/testing";

import { BookMovieService } from "./book-movie.service";

describe("BookMovieService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookMovieService]
    });
  });

  it("should be created", inject(
    [BookMovieService],
    (service: BookMovieService) => {
      expect(service).toBeTruthy();
    }
  ));
});
