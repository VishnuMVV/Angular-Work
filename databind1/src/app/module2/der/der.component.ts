import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-der",
  templateUrl: "./der.component.html",
  styleUrls: ["./der.component.css"]
})
export class DerComponent implements OnInit {
  @Input() childMessage: string;
  constructor() {}

  ngOnInit() {}
}
