import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetailsHotelCardListingComponent } from './city-details-hotel-card-listing.component';

describe('CityDetailsHotelCardListingComponent', () => {
  let component: CityDetailsHotelCardListingComponent;
  let fixture: ComponentFixture<CityDetailsHotelCardListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDetailsHotelCardListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailsHotelCardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
