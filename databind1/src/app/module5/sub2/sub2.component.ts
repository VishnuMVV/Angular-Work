import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-sub2",
  templateUrl: "./sub2.component.html",
  styleUrls: ["./sub2.component.css"]
})
export class Sub2Component implements OnInit {
  @Input() sibMessage: string;
  constructor() {}

  ngOnInit() {}
}
