import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/_models/hotel';

@Component({
  selector: 'city-details-hotel-card-listing',
  templateUrl: './city-details-hotel-card-listing.component.html',
  styleUrls: ['./city-details-hotel-card-listing.component.scss']
})
export class CityDetailsHotelCardListingComponent implements OnInit {
  @Input() hotelCityDataArr:Hotel[];
  constructor() { }

  ngOnInit() {
  }

}
