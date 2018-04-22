import { TickTockModule } from '../../lib';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// const NgModule = Core.NgModule;
// const BrowserModule = PlatformBrowser.BrowserModule;

@NgModule({
  imports: [ BrowserModule, TickTockModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
    console.log('Core');
  }
}
