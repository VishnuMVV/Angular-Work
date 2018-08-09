import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCompComponent } from './base-comp/base-comp.component';
import { DerComponent } from './der/der.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BaseCompComponent, DerComponent]
})
export class Module2Module { }
