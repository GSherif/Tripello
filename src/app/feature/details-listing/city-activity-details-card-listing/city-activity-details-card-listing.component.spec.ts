import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityActivityDetailsCardListingComponent } from './city-activity-details-card-listing.component';

describe('CityActivityDetailsCardListingComponent', () => {
  let component: CityActivityDetailsCardListingComponent;
  let fixture: ComponentFixture<CityActivityDetailsCardListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityActivityDetailsCardListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityActivityDetailsCardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
