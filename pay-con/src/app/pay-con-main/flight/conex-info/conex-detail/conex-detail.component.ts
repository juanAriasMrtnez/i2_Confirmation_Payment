import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pay-conex-detail',
  templateUrl: './conex-detail.component.html',
  styleUrls: ['./conex-detail.component.scss']
})
export class ConexDetailComponent implements OnInit {

  @Input() operator: String;
  @Input() flight: String;
  @Input() origin: String;
  @Input() originTime: any;
  @Input() destination: String;
  @Input() destinationTime: any;
  private icon: String = 'i2-op';

  constructor() { }

  ngOnInit() {
    this.operator == 'Iberia Express' ? this.icon = 'i2-op' : this.icon = 'air-nostrum-op';
  }

}
