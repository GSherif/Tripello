import { Component, OnInit, Input } from '@angular/core';
import { Resturant } from 'src/app/_models/resturant';

@Component({
  selector: 'city-details-resturant-card-listing',
  templateUrl: './city-details-resturant-card-listing.component.html',
  styleUrls: ['./city-details-resturant-card-listing.component.scss']
})
export class CityDetailsResturantCardListingComponent implements OnInit {
  @Input() resturantCityDataArr:Resturant[];
  constructor() { }

  ngOnInit() {
  }

}
