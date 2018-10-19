import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { User } from "../../auth/user.model";

@Component({
  selector: "edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"]
})
export class EditProfileComponent implements OnInit {
  // Email regular expression to validate email format
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  nameRegex = /^([a-zA-Z ]){2,30}$/;

  userDetails;
  gender = null;
  genders = ["Female", "Male", "Other"];
  successMessage: boolean;
  errorMessages: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.getUserProfile().subscribe(
      res => {
        this.userDetails = res["user"];
      },
      err => {}
    );
  }
  onUpdate(form: NgForm) {
    this.authService.updateUser(form.value).subscribe(
      res => {
        // this.successMessage = true;
        // setTimeout(() => (this.successMessage = false), 4000); // Success message dissapears after 4 seconds
        this.router.navigate(["/userprofile"]);
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

  backToProfile() {
    this.router.navigate(["/userprofile"]);
  }
}
