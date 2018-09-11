import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  errorMessages: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  model = {
    email: "",
    password: ""
  };

  ngOnInit() {
    // If user is already logged in, redirect to user profile page
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl("/userprofile");
    }
  }

  onLogin(form: NgForm) {
    this.authService.login(form.value).subscribe(
      // successful authentication
      res => {
        this.authService.setToken(res["token"]); // save token to local storage
        this.router.navigateByUrl("/userprofile"); // redirect to user profile page
      },
      // If errors occur
      err => {
        this.errorMessages = err.error.message;
      }
    );
  }
}
