import { Component } from "@angular/core";
// import { ChildCompComponent } from "../child-comp/child-comp.component";

@Component({
  selector: "app-parent-comp",
  templateUrl: "./parent-comp.component.html",
  styleUrls: ["./parent-comp.component.css"]
})
export class ParentCompComponent {
  // @ViewChild(ChildCompComponent) child;

  message: string;

  constructor() {}

  receiveMessage($event) {
    this.message = $event;
  }

  // ngAfterViewInit() {
  //   this.message = this.child.message;
  // }
}
