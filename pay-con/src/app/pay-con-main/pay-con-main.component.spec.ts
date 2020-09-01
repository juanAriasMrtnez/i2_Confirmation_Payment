import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayConMainComponent } from './pay-con-main.component';

describe('PayConMainComponent', () => {
  let component: PayConMainComponent;
  let fixture: ComponentFixture<PayConMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayConMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayConMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
