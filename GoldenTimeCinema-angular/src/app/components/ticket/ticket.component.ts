import { Component, OnInit } from "@angular/core";
import { TicketService } from "../../services/ticket.service";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "ticket",
  templateUrl: "./ticket.component.html",
  styleUrls: ["./ticket.component.css"]
})
export class TicketComponent implements OnInit {
  tickets: any[] = [];
  userId = "";
  userDetails;

  constructor(
    private bookingService: TicketService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.authService.getUserProfile().subscribe(
      res => {
        this.userDetails = res["user"];
        this.userId = this.userDetails._id;
      },
      err => {}
    );

    this.bookingService.getTickets().subscribe(response => {
      this.tickets = response
        .json()
        .filter(ticket => ticket.userId === this.userId);
    });
  }
}
