import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetailsResturantCardListingComponent } from './city-details-resturant-card-listing.component';

describe('CityDetailsResturantCardListingComponent', () => {
  let component: CityDetailsResturantCardListingComponent;
  let fixture: ComponentFixture<CityDetailsResturantCardListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDetailsResturantCardListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailsResturantCardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
