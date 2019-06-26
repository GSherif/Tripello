import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetailsActivityCardListingComponent } from './city-details-activity-card-listing.component';

describe('CityDetailsActivityCardListingComponent', () => {
  let component: CityDetailsActivityCardListingComponent;
  let fixture: ComponentFixture<CityDetailsActivityCardListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDetailsActivityCardListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailsActivityCardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
