import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-sub1",
  templateUrl: "./sub1.component.html",
  styleUrls: ["./sub1.component.css"]
})
export class Sub1Component {
  message: string;

  constructor() {}

  @Output()
  messageEvent = new EventEmitter<string>();

  sendMessage(data: string) {
    this.message = data;
    this.messageEvent.emit(this.message);
  }
}
