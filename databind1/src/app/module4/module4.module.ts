import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootCompComponent } from './root-comp/root-comp.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule, BrowserModule
  ],
  declarations: [RootCompComponent, Child1Component, Child2Component]
})
export class Module4Module { }
