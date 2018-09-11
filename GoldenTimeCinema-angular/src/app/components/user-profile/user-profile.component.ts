import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  userDetails;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.authService.getUserProfile().subscribe(
      res => {
        this.userDetails = res["user"];
      },
      err => {}
    );
  }
}
