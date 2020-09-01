import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CkiOnlineComponent } from './cki-online.component';

describe('CkiOnlineComponent', () => {
  let component: CkiOnlineComponent;
  let fixture: ComponentFixture<CkiOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CkiOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CkiOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
