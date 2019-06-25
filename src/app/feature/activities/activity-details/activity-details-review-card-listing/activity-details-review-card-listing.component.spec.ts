import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDetailsReviewCardListingComponent } from './activity-details-review-card-listing.component';

describe('ActivityDetailsReviewCardListingComponent', () => {
  let component: ActivityDetailsReviewCardListingComponent;
  let fixture: ComponentFixture<ActivityDetailsReviewCardListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityDetailsReviewCardListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityDetailsReviewCardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
