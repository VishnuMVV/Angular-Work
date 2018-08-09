import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child-comp",
  templateUrl: "./child-comp.component.html",
  styleUrls: ["./child-comp.component.css"]
})
export class ChildCompComponent {
  message: string;

  @Output()
  messageEvent = new EventEmitter<string>();
  // onclick(data: string) {
  //   this.message = data;
  // }
  constructor() {}

  sendMessage(data: string) {
    this.message = data;
    this.messageEvent.emit(this.message);
  }
}
