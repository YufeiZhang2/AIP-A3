import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { User } from "../components/authentication/user.model";
import { Observable } from "rxjs";

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) {}

  register(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({ "Content-Type": "application/json" });
    return this.http
      .post("http://localhost:3000/user", body, { headers: headers })
      .map((response: Response) => response.json()) // transform data we get back
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
