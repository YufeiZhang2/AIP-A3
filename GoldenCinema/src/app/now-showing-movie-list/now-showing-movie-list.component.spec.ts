import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowShowingMovieListComponent } from './now-showing-movie-list.component';

describe('NowShowingMovieListComponent', () => {
  let component: NowShowingMovieListComponent;
  let fixture: ComponentFixture<NowShowingMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowShowingMovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowShowingMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
