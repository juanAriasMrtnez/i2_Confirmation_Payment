import { Component, Input } from '@angular/core';

@Component({
  selector: 'pay-my-flight',
  templateUrl: './my-flight.component.html',
  styleUrls: ['./my-flight.component.scss']
})
export class MyFlightComponent {

  @Input() iataCode: String = "i2";
  @Input() airport: String = "i2";
  @Input() takeOff: any = "i2";

  constructor() { }

}
