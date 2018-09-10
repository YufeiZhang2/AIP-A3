import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service";
import { User } from "../authentication/user.model";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
  providers: [AuthenticationService]
})
export class RegisterComponent implements OnInit {
  successMessage: boolean;
  errorMessages: string;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {}

  onRegister(form: NgForm) {
    this.authService.registerUser(form.value).subscribe(
      res => {
        this.successMessage = true;
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.errorMessages = err.error.join("<br/>");
        }
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
