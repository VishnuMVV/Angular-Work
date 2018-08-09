import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
// import { RouterModule, Routes } from "@angular/router";

import { Comp1Component } from "./first/comp1/comp1.component";
import { BaseCompComponent } from "./module2/base-comp/base-comp.component";
import { DerComponent } from "./module2/der/der.component";
import { ParentCompComponent } from "./module3/parent-comp/parent-comp.component";
import { ChildCompComponent } from "./module3/child-comp/child-comp.component";
import { RootCompComponent } from "./module4/root-comp/root-comp.component";
import { Child1Component } from "./module4/child1/child1.component";
import { Child2Component } from "./module4/child2/child2.component";
import { SuperComponent } from "./module5/super/super.component";
import { Sub1Component } from "./module5/sub1/sub1.component";
import { Sub2Component } from "./module5/sub2/sub2.component";


// const appRoutes: Routes=[{path:'first/first',component:Comp1Component}];

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    BaseCompComponent,
    DerComponent,
    ParentCompComponent,
    ChildCompComponent,
    RootCompComponent,
    Child1Component,
    Child2Component,
    SuperComponent,
    Sub1Component,
    Sub2Component
  ],
  // imports: [BrowserModule, FirstModule, RouterModule.forRoot(appRoutes)]
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
