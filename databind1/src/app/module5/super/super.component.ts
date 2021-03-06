import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-super",
  templateUrl: "./super.component.html",
  styleUrls: ["./super.component.css"]
})
export class SuperComponent implements OnInit {
  message: string;
  constructor() {}

  ngOnInit() {}
  receiveMessage($event) {
    this.message = $event;
  }
}
