import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowShowingBlockComponent } from './now-showing-block.component';

describe('NowShowingBlockComponent', () => {
  let component: NowShowingBlockComponent;
  let fixture: ComponentFixture<NowShowingBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowShowingBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowShowingBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
