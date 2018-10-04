import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Http } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class MessagesService {
  email = "";

  constructor(private http: Http) {}

  sendMessage(email) {
    return this.http.post(environment.apiBaseUrl + "/sendemail", email);
  }
}
