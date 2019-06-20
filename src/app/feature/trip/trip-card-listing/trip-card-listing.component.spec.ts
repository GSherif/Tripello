import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripCardListingComponent } from './trip-card-listing.component';

describe('TripCardListingComponent', () => {
  let component: TripCardListingComponent;
  let fixture: ComponentFixture<TripCardListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripCardListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripCardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
