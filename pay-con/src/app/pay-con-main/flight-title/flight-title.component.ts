import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pay-flight-title',
  templateUrl: './flight-title.component.html',
  styleUrls: ['./flight-title.component.scss']
})
export class FlightTitleComponent implements OnInit {

  constructor() { }
  @Input() fare: String;
  @Input() journey: String;
  public from: String = "SQC";
  public to: String = "TFN";
  @Input() fromCity: String;
  @Input() toCity: String;
  @Input() fromDate: any;
  @Input() toDate: any;
  @Input() flightNumber: String;
  @Input() beeperId: String;
  @Input() op: String;
  
  ngOnInit() {
  }

}
