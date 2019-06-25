import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/_models/review';

@Component({
  selector: 'activity-details-review-card-listing',
  templateUrl: './activity-details-review-card-listing.component.html',
  styleUrls: ['./activity-details-review-card-listing.component.scss']
})
export class ActivityDetailsReviewCardListingComponent implements OnInit {
@Input() reviews:Review[];
  constructor() { }

  ngOnInit() {
  }

}
