import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDetailsListingComponent } from './city-details-listing.component';

describe('CityDetailsListingComponent', () => {
  let component: CityDetailsListingComponent;
  let fixture: ComponentFixture<CityDetailsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDetailsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDetailsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
