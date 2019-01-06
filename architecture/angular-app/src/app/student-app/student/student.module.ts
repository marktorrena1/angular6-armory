import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from "./student.component";

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  declarations: [
    StudentComponent
  ],
  exports: []
})
export class StudentModule { }
