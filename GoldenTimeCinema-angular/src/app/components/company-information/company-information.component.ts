import { Component, OnInit } from "@angular/core";

@Component({
  selector: "company-information",
  templateUrl: "./company-information.component.html",
  styleUrls: ["./company-information.component.css"]
})
export class CompanyInformationComponent {
  introduction: string = `Golden Time Cinema is for movie lovers to enjoy the classis movies anytime. Our cinema contains more than ten movie rooms
  with cozy enviroment. We hope audience can have the best experince and travel with time machine to the classic movies
  they love. Feel free to contact us if you have any question. Our team is here to help you responsively.`;
}
