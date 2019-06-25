import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'city-activity-details-card-listing',
  templateUrl: './city-activity-details-card-listing.component.html',
  styleUrls: ['./city-activity-details-card-listing.component.scss']
})
export class CityActivityDetailsCardListingComponent implements OnInit {
  @Input() cityDataArr:any[];
  constructor() { }

  ngOnInit() {
    console.log(this.cityDataArr)
  }

}
