import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/catch";

import { environment } from "../../environments/environment";
import { User } from "../components/auth/user.model";
// import { Observable, of, throwError } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  // Initialize a User object with empty email and password
  selectedUser: User = {
    email: "",
    password: ""
  };

  constructor(private http: HttpClient) {}

  registerUser(user: User) {
    return this.http.post(environment.apiBaseUrl + "/register", user);
  }

  login(authCredentials) {
    return this.http.post(
      environment.apiBaseUrl + "/authenticate",
      authCredentials
    );
  }

  // save token of current user inside local storage
  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  // delete token inside local storage
  deleteToken() {
    localStorage.removeItem("token");
  }

  // Extract user payload from token
  getUserPayload() {
    var token = localStorage.getItem("token");
    if (token) {
      var userPayload = atob(token.split(".")[1]);
      return JSON.parse(userPayload);
    } else return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    // check if jwt expiration time is over or not
    if (userPayload) return userPayload.exp > Date.now() / 1000;
    else return false;
  }

  // register(user: User) {
  //   const body = JSON.stringify(user);
  //   const headers = new Headers({ "Content-Type": "application/json" });
  //   return this.http
  //     .post("http://localhost:3000/register", body, { headers: headers })
  //     .map((response: Response) => response.json()) // transform data we get back
  //     .catch((error: Response) => Observable.throw(error));
  // }
}
