import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgShareComponent } from './svg-share.component';

describe('SvgShareComponent', () => {
  let component: SvgShareComponent;
  let fixture: ComponentFixture<SvgShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
