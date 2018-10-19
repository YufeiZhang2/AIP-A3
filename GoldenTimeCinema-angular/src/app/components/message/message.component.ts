import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  message: string = `The operation is successful.`;
  constructor(private router: Router) { }
  //button back to admin
  backToAdmin() {
    this.router.navigate(["/admin"]);
  }

}
