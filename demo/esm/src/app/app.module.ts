import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { TickTockModule, Core } from '../../lib';

@NgModule({
  imports: [ BrowserModule, TickTockModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
    console.log('Core', Core);
  }
}
