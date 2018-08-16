import { Component, OnInit } from "@angular/core";

@Component({
  selector: "now-showing-block",
  templateUrl: "./now-showing-block.component.html",
  styleUrls: ["./now-showing-block.component.css"]
})
export class NowShowingBlockComponent implements OnInit {
  title = "Now Showing Movies";
  constructor() {}

  ngOnInit() {}
}
