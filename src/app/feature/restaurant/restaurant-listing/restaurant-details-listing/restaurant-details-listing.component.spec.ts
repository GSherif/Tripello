import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailsListingComponent } from './restaurant-details-listing.component';

describe('RestaurantDetailsListingComponent', () => {
  let component: RestaurantDetailsListingComponent;
  let fixture: ComponentFixture<RestaurantDetailsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantDetailsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
