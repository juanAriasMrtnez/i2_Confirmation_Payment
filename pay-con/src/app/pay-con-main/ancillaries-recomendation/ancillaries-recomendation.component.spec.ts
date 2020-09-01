import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AncillariesRecomendationComponent } from './ancillaries-recomendation.component';

describe('AncillariesRecomendationComponent', () => {
  let component: AncillariesRecomendationComponent;
  let fixture: ComponentFixture<AncillariesRecomendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AncillariesRecomendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AncillariesRecomendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
