import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pay-beeper',
  templateUrl: './beeper.component.html',
  styleUrls: ['./beeper.component.scss']
})
export class BeeperComponent implements OnInit {

  @Input() operator: String = "i2";
  @Input() beeper: String = "i2";
  @Input() flight: String = "i2";
  @Input() goTo: String = "i2";

  constructor() { }

  ngOnInit() {
  }

}
