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
        this.refreshTicketList();
      },
      err => {}
    );
  }

  refreshTicketList() {
    // Get tickets with the same user Id of this currrent logged in user
    this.ticketService.getTickets().subscribe(response => {
      this.tickets = response
        .json()
        .filter(ticket => ticket.userId === this.userDetails._id);
    });
  }
  //delete a movie
  onDelete(ticketId) {
    let objectId: number;
    console.log(ticketId);

    //get the ticket id based on the index of the ticket
    objectId = this.tickets[ticketId]._id;
    console.log(objectId);

    //delete the specific ticket
    this.ticketService.deleteTicket(objectId).subscribe(response => {
      // Refresh the ticket list after deletion or changes will not be displayed without reloading the page
      this.refreshTicketList();
    });
  }
}
