import { Component, OnInit } from "@angular/core";

@Component({
  selector: "footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  companyName = "@Golden Time Cooperation";
  constructor() {}

  ngOnInit() {}
}
