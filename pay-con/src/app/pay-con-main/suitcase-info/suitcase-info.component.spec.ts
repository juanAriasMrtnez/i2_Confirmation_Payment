import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitcaseInfoComponent } from './suitcase-info.component';

describe('SuitcaseInfoComponent', () => {
  let component: SuitcaseInfoComponent;
  let fixture: ComponentFixture<SuitcaseInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuitcaseInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitcaseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
