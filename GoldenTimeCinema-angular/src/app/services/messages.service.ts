import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Http } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class MessagesService {
  constructor(private http: Http) {}

  sendMessage() {
    return this.http.post(environment.apiBaseUrl + "/sendemail", "");
  }
}
