import { Component } from '@angular/core';
// import { Core } from '../../lib';
// const Component = Core.Component;

@Component({
  selector: 'my-app',
  template: `<tick-tock></tick-tock>`
})
export class AppComponent {
  public header: string = 'UMD Demo';
}
