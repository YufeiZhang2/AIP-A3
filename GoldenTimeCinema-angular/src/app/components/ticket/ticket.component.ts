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
  userDetails;

  constructor(
    private ticketService: TicketService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    // Get profile of current logged in user
    this.authService.getUserProfile().subscribe(
      res => {
        this.userDetails = res["user"];

        // Get tickets with the same user Id of this currrent logged in user
        this.ticketService.getTickets().subscribe(response => {
          this.tickets = response
            .json()
            .filter(ticket => ticket.userId === this.userDetails._id);
        });
      },
      err => {}
    );
  }
}
