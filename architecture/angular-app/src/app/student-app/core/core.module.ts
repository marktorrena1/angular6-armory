import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from "../home/home.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  declarations: [ HomeComponent ],
  exports:[ CoreRoutingModule]
})
export class CoreModule { }
