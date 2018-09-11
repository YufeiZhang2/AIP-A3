import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service";
import { User } from "../authentication/user.model";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  // Email regular expression to validate email format
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  successMessage: boolean;
  errorMessages: string;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {}

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
      email: "",
      password: ""
    };
    form.resetForm();
    this.errorMessages = "";
  }

  // myForm: FormGroup;

  // onRegister() {
  //   const user = new User(this.myForm.value.email, this.myForm.value.password);
  //   this.authService
  //     .register(user)
  //     .subscribe(data => console.log(data), error => console.error(error));
  //   this.myForm.reset();
  // }

  // constructor(private authService: AuthenticationService) {}

  // ngOnInit() {
  //   this.myForm = new FormGroup({
  //     email: new FormControl(null, [
  //       Validators.required,
  //       Validators.pattern("[^@]+@[^@]+.[^@]+")
  //     ]),
  //     password: new FormControl(null, Validators.required)
  //   });
  // }
}
