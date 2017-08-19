import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // path: 'sevadar-support', Component: SevadarSupportComponent, children: [
  //   {path}
  // ]
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SevadarSupportRoutingModule { }
