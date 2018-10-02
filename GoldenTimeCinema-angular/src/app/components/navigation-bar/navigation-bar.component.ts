import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.css"]
})
export class NavigationBarComponent implements OnInit {
  logIn = "LOG IN";
  home = "HOME";
  register = "REGISTER";
  genre = "GENRES";
  admin = "ADMIN";
  companyInformation = "ABOUT US";
  profile = "PROFILE";
  search = "SEARCH";

  constructor(private authService: AuthenticationService) { }

  ngOnInit() { }
}
