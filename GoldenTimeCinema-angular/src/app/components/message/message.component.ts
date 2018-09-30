import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //button back to admin
  backToAdmin() {
    this.router.navigate(["/admin"]);
  }

}
