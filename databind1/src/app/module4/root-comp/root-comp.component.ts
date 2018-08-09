import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root-comp",
  templateUrl: "./root-comp.component.html",
  styleUrls: ["./root-comp.component.css"]
})
export class RootCompComponent implements OnInit {
  message: string;

  return: string;

  constructor() {}

  ngOnInit() {}

  receiveMessage($event) {
    this.return = $event;
  }

  onClick(data: string) {
    this.message = data;
  }
}
