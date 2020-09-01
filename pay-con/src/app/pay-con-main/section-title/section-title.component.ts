import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pay-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {

  @Input() title: String;
  @Input() description: String;
  @Input() location: String;
  @Input() emergency: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
