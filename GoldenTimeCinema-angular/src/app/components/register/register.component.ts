import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  // Email regular expression to validate email format
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  gender = null;
  genders = ["Female", "Male", "Other"];
  successMessage: boolean;
  errorMessages: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    // If user is already logged in, redirect to user profile page
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl("/userprofile");
    }
  }

  onRegister(form: NgForm) {
    this.authService.registerUser(form.value).subscribe(
      // if registration is successfull
      res => {
        this.successMessage = true;
        setTimeout(() => (this.successMessage = false), 4000); // Success message dissapears after 4 seconds
        this.resetForm(form);
      },

      // if there are errors sent from server-side
      err => {
        if (err.status === 422) {
          this.errorMessages = err.error.join("<br/>");
        } else
          this.errorMessages = "Something went wrong. Please contact admin.";
      }
    );
  }

  resetForm(form: NgForm) {
    this.authService.selectedUser = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      dob: null,
      isAdmin: false,
      _id: ""
    };
    form.resetForm();
    this.errorMessages = "";
  }
}
