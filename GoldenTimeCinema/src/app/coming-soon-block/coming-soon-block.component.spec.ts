import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ComingSoonBlockComponent } from "./coming-soon-block.component";

describe("CommingSoonBlockComponent", () => {
  let component: ComingSoonBlockComponent;
  let fixture: ComponentFixture<ComingSoonBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComingSoonBlockComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingSoonBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
