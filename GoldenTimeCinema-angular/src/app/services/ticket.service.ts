import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Http } from "@angular/http";
import { MovieBooking } from "../components/book-movies/book-movies.model";

@Injectable({
  providedIn: "root"
})
export class TicketService {
  tickets: MovieBooking[];
  constructor(private http: Http) {}

  // When user book a ticket,
  // ticket information is saved to the database
  // a notification message is sent to user's email
  // Link to api endpoint in ticketController
  bookMovie(booking: MovieBooking) {
    return this.http.post(environment.apiBaseUrl + "/book", booking);
  }

  getTickets() {
    return this.http.get(environment.apiBaseUrl + "/tickets");
  }

  deleteTicket(_id) {
    return this.http.delete(environment.apiBaseUrl + "/" + _id);
  }
}
