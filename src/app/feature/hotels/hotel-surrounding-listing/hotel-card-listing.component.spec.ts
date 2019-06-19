import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCardListingComponent } from './hotel-card-listing.component';

describe('HotelCardListingComponent', () => {
  let component: HotelCardListingComponent;
  let fixture: ComponentFixture<HotelCardListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelCardListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelCardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
