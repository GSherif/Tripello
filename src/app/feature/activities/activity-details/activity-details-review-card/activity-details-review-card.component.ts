import { Component, OnInit, Input } from '@angular/core';
import { Activity } from 'src/app/_models/activity';
import { Review } from 'src/app/_models/review';

@Component({
  selector: 'activity-details-review-card',
  templateUrl: './activity-details-review-card.component.html',
  styleUrls: ['./activity-details-review-card.component.scss']
})
export class ActivityDetailsReviewCardComponent implements OnInit {
@Input() review:Review
  constructor() { }

  ngOnInit() {
  }

}
