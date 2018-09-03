import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service";
import { User } from "../authentication/user.model";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;

  onSubmit() {
    const user = new User(this.myForm.value.email, this.myForm.value.password);
    this.authService
      .register(user)
      .subscribe(data => console.log(data), error => console.error(error));
    this.myForm.reset();
  }

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[^@]+@[^@]+.[^@]+")
      ]),
      password: new FormControl(null, Validators.required)
    });
  }
}
