import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SevadarSupportModule } from './sevadar-support/sevadar-support.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SevadarSupportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
