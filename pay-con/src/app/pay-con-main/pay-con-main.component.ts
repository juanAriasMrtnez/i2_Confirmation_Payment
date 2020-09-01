import { Component, OnInit } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'pay-con-main',
  templateUrl: './pay-con-main.component.html',
  styleUrls: ['./pay-con-main.component.scss']
})
export class PayConMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (window.innerWidth >= 992) {
      jQuery('[data-toggle="tooltip"]').tooltip();
    }
  }

}
