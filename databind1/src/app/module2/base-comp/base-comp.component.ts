import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-comp',
  templateUrl: './base-comp.component.html',
  styleUrls: ['./base-comp.component.css']
})
export class BaseCompComponent implements OnInit {

  parentMessage : string;
  onclick(data: string) {
    this.parentMessage = data;
  }
  constructor() { }

  ngOnInit() {
  }

}
