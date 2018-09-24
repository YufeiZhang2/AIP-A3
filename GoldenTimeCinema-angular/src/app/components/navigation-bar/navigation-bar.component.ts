import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.css"]
})
export class NavigationBarComponent implements OnInit {
  logIn = "Log In";
  home = "Home";
  register = "Register";
  genre = "Genre";
  admin = "Admin";
  companyInformation = "About us";
  profile = "Profile";

  constructor(private authService: AuthenticationService) { }

  ngOnInit() { }
}
