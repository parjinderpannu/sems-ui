import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SevadarSupportComponent } from "./sevadar-support.component";
import { FindSevadarComponent } from "./find-sevadar/find-sevadar.component";

const routes: Routes = [
  { path: 'sevadar-support', component: SevadarSupportComponent, children: [
      {path:'', component: FindSevadarComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SevadarSupportRoutingModule { }
