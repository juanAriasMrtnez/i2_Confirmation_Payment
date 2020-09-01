import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexDetailComponent } from './conex-detail.component';

describe('ConexDetailComponent', () => {
  let component: ConexDetailComponent;
  let fixture: ComponentFixture<ConexDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConexDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConexDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
