import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TickTockModule } from './lib/src/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TickTockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
