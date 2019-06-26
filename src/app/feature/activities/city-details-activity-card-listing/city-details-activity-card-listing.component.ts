import { Component, OnInit, Input } from '@angular/core';
import { Activity } from 'src/app/_models/activity';

@Component({
  selector: 'city-details-activity-card-listing',
  templateUrl: './city-details-activity-card-listing.component.html',
  styleUrls: ['./city-details-activity-card-listing.component.scss']
})
export class CityDetailsActivityCardListingComponent implements OnInit {
  @Input() activityCityDataArr:Activity[];
  constructor() { }

  ngOnInit() {
  }

}
