import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonMovieListComponent } from './coming-soon-movie-list.component';

describe('ComingSoonMovieListComponent', () => {
  let component: ComingSoonMovieListComponent;
  let fixture: ComponentFixture<ComingSoonMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingSoonMovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingSoonMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
