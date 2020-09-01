import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pay-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.scss']
})
export class ModuloComponent implements OnInit {

  @Input() type: string;
  @Input() title: string;
  @Input() text: string;
  @Input() button: string;



  constructor() { }

  ngOnInit() {
  }

}
