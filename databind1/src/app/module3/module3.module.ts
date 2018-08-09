import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule, BrowserModule
  ],
  declarations: [ParentCompComponent, ChildCompComponent]
})
export class Module3Module { }
