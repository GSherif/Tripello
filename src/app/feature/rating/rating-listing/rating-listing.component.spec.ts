import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingListingComponent } from './rating-listing.component';

describe('RatingListingComponent', () => {
  let component: RatingListingComponent;
  let fixture: ComponentFixture<RatingListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
