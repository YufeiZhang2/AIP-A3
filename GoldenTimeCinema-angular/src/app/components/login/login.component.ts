import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private authService: AuthenticationService) {}

  onSubmit() {
    console.log(this.myForm);
    this.myForm.reset();
  }

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
