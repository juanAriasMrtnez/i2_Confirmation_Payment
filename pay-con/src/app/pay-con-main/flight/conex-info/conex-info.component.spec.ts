import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexInfoComponent } from './conex-info.component';

describe('ConexInfoComponent', () => {
  let component: ConexInfoComponent;
  let fixture: ComponentFixture<ConexInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConexInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
