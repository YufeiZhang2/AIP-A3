import { Component, OnInit } from "@angular/core";

@Component({
  selector: "navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.css"]
})
export class NavigationBarComponent implements OnInit {
  logIn = "Log In";
  home = "Home";
  signUp = "Sign Up";
  genre = "Genre";
  award = "Awards";
  companyInformation = "About us";

  constructor() {}

  ngOnInit() {}
}
