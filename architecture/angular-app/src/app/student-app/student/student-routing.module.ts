import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from "./student.component";

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: []
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
