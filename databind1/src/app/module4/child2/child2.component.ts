import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child2",
  templateUrl: "./child2.component.html",
  styleUrls: ["./child2.component.css"]
})
export class Child2Component implements OnInit {
  @Input()
  message1: string;
  @Output()
  messageEvent = new EventEmitter<string>();
  constructor() {}
  return: string;
  ngOnInit() {}
  sendMessage(data: string) {
    this.return = data;
    this.messageEvent.emit(this.return);
  }
}
