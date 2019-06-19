import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetailsListingComponent } from './hotel-details-listing.component';

describe('HotelDetailsListingComponent', () => {
  let component: HotelDetailsListingComponent;
  let fixture: ComponentFixture<HotelDetailsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelDetailsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
