import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityActivityDetailsCardComponent } from './city-activity-details-card.component';

describe('CityActivityDetailsCardComponent', () => {
  let component: CityActivityDetailsCardComponent;
  let fixture: ComponentFixture<CityActivityDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityActivityDetailsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityActivityDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
