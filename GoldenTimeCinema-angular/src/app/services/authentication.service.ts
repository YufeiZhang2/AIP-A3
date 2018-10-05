import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { User } from "../components/auth/user.model";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  // Initialize a User object with empty email and password
  selectedUser: User = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    dob: null,
    isAdmin: false
  };

  role;

  noAuthHeader = { headers: new HttpHeaders({ NoAuth: "True" }) };

  constructor(private http: HttpClient) {}

  // httpMethods

  registerUser(user: User) {
    return this.http.post(
      environment.apiBaseUrl + "/register",
      user,
      this.noAuthHeader
    );
  }

  login(authCredentials) {
    return this.http.post(
      environment.apiBaseUrl + "/authenticate",
      authCredentials,
      this.noAuthHeader
    );
  }

  // need jwt in the header
  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + "/userprofile");
  }

  getAdmin() {
    return this.http.get(environment.apiBaseUrl + "/isAdmin");
  }

  //Helper Methods

  // save token of current user inside local storage
  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  // get the token in local storage
  getToken() {
    return localStorage.getItem("token");
  }

  // delete token inside local storage
  deleteToken() {
    localStorage.removeItem("token");
  }

  // Extract user payload from token
  getUserPayload() {
    var token = this.getToken();
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

  isAdmin() {
    this.getUserProfile().subscribe(res => {
      this.role = res["user"].isAdmin;
      console.log("service level: admin " + this.role);

      return this.role;
    });
    return this.role;
  }
}
