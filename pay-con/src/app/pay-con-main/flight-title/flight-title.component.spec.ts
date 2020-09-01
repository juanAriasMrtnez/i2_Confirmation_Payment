import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTitleComponent } from './flight-title.component';

describe('FlightTitleComponent', () => {
  let component: FlightTitleComponent;
  let fixture: ComponentFixture<FlightTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
