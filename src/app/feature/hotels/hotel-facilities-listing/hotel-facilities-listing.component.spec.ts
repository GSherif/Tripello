import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFacilitiesListingComponent } from './hotel-facilities-listing.component';

describe('HotelFacilitiesListingComponent', () => {
  let component: HotelFacilitiesListingComponent;
  let fixture: ComponentFixture<HotelFacilitiesListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelFacilitiesListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelFacilitiesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
