import { Component, Input } from '@angular/core';

@Component({
  selector: 'pay-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})

export class SvgComponent {

  @Input() name: String;
  @Input() state: String;

  constructor() { }

  get absUrl() {
    return window.location.href;
  }


}
