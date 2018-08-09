import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperComponent } from './super/super.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';

@NgModule({
  imports: [
    CommonModule
  ],exports:[],
  declarations: [SuperComponent, Sub1Component, Sub2Component]
})
export class Module5Module { }
