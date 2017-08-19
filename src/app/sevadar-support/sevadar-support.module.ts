import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SevadarSupportRoutingModule } from './sevadar-support-routing.module';
import { SevadarSupportComponent } from './sevadar-support.component';
import { FindSevadarComponent } from '../src/app/sevadar-support/find-sevadar/find-sevadar.component';
import { AddSevadarComponent } from '../src/app/sevadar-support/add-sevadar/add-sevadar.component';

@NgModule({
  imports: [
    CommonModule,
    SevadarSupportRoutingModule
  ],
  declarations: [SevadarSupportComponent, FindSevadarComponent, AddSevadarComponent]
})
export class SevadarSupportModule { }
