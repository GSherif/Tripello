import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/_models/hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'hotel-facilities-listing',
  templateUrl: './hotel-facilities-listing.component.html',
  styleUrls: ['./hotel-facilities-listing.component.scss']
})
export class HotelFacilitiesListingComponent implements OnInit {
@Input() hotelFacilities:Hotel[];
  constructor(private facilities: HotelService) { }

  ngOnInit() {
  }

}
