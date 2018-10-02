import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMoviesComponent } from './book-movies.component';

describe('BookMoviesComponent', () => {
  let component: BookMoviesComponent;
  let fixture: ComponentFixture<BookMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
