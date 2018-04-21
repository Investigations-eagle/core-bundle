export { TickTockService } from './services';
export { TickTockComponent } from './components';
export { TickTockModule } from './tick-tock.module';

import * as router from '@angular/router';
import * as core from '@angular/core';
import * as http from '@angular/http';
import * as forms from '@angular/forms';
import * as common from '@angular/common';
import * as platformBrowser from '@angular/platform-browser';
import * as platformBrowserDynamic from '@angular/platform-browser-dynamic';
export const ng = {router, http, forms, common, core, platformBrowser, platformBrowserDynamic};
// export class EgleNg {
//   public router = router;
//   constructor() {
//     console.log('this.router', this.router);
//   }
// }
