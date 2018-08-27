import { Component, OnInit } from "@angular/core";

@Component({
  selector: "search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"]
})
export class SearchBarComponent implements OnInit {
  defaultText = "Plese enter here";
  buttonName = "Search";

  constructor() {}

  ngOnInit() {}
}
