import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { User } from "../auth/user.model";
import decode from "jwt-decode";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  // Initialize a User object with empty properties
  selectedUser: User = {
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    dob: null,
    isAdmin: false
  };

  user: User;

  role;

  noAuthHeader = { headers: new HttpHeaders({ NoAuth: "True" }) };

  constructor(private http: HttpClient) {}

  private url = environment.apiBaseUrl;

  // httpMethods

  // Register new user
  // Link to api endpoint of register in userControl
  registerUser(user: User) {
    return this.http.post(this.url + "/register", user, this.noAuthHeader);
  }

  // Check user authentication
  // Link to api endpoint of authenticate in userControl
  // require authentication credentials
  login(authCredentials) {
    return this.http.post(
      this.url + "/authenticate",
      authCredentials,
      this.noAuthHeader
    );
  }

  // need jwt in the header
  // Get profile details of the current user
  // Link to api of endpoint userprofile in userController
  getUserProfile() {
    return this.http.get(this.url + "/userprofile");
  }

  // Update profile details of the current user
  // Link to api endpoint of editprofile in userController
  updateUser(user: User) {
    return this.http.put(this.url + "/editprofile", user);
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

  // decode JWT token inside local storage
  decodeToken() {
    return decode(localStorage.getItem("token"));
  }
  // Extract user payload from token
  getUserPayload() {
    var token = this.getToken();
    if (token) {
      // payload is the 2nd element (hence id = 1) in the array after splitting the token
      var userPayload = atob(token.split(".")[1]);
      return JSON.parse(userPayload);
    } else return null;
  }

  // Check if current user is already logged in
  isLoggedIn() {
    var userPayload = this.getUserPayload();
    // check if jwt expiration time is over or not
    if (userPayload) return userPayload.exp > Date.now() / 1000;
    else return false;
  }

  // Check if the current user has role of admin
  isAdmin() {
    this.role = this.decodeToken().admin;
    return this.role;
  }

  // Check the status of user role
  // Purpose: display appropriate links in the navigation bar
  displayAdmin() {
    if (this.isLoggedIn() && this.isAdmin()) {
      return true;
    } else {
      return false;
    }
  }
}
