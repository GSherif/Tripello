import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetailsHotelCardComponent } from './city-details-hotel-card.component';

describe('CityDetailsHotelCardComponent', () => {
  let component: CityDetailsHotelCardComponent;
  let fixture: ComponentFixture<CityDetailsHotelCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDetailsHotelCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailsHotelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
