import { NgModule } from '@angular/core';
import { TickTockComponent } from './components';

@NgModule({
  declarations: [
    TickTockComponent,
  ],
  exports: [
    TickTockComponent
  ]
})
export class TickTockModule {
}
