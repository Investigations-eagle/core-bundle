import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'tick-tock',
  styleUrls: ['./tick-tock.component.scss'],
  templateUrl: './tick-tock.component.html',
})
export class TickTockComponent {
  // Current time string.
  public currentTime: string;

}
