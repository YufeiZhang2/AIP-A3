import { Component, OnInit } from "@angular/core";

@Component({
  selector: "coming-soon-block",
  templateUrl: "./coming-soon-block.component.html",
  styleUrls: ["./coming-soon-block.component.css"]
})
export class ComingSoonBlockComponent implements OnInit {
  title = "Coming Soon Movies";

  ngOnInit() {}
}
