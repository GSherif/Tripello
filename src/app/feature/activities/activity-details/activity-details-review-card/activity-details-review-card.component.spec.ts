import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDetailsReviewCardComponent } from './activity-details-review-card.component';

describe('ActivityDetailsReviewCardComponent', () => {
  let component: ActivityDetailsReviewCardComponent;
  let fixture: ComponentFixture<ActivityDetailsReviewCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityDetailsReviewCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityDetailsReviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
