import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {

  form = new FormGroup({
    'movieName': new FormControl('', [Validators.minLength(2), Validators.maxLength(60)])
  });

  constructor() { }

  ngOnInit() { }

  get movieName() {
    return this.form.get('movieName');
  }

  onSubmit() {

  }
}
