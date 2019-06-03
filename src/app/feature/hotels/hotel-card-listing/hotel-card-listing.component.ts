import { Component, OnInit, Input } from '@angular/core';
import { HotelSurrounding } from 'src/app/_models/hotel-surrounding';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-card-listing',
  templateUrl: './hotel-card-listing.component.html',
  styleUrls: ['./hotel-card-listing.component.scss']
})
export class HotelCardListingComponent implements OnInit {
  @Input() hotelsurrounds: HotelSurrounding[];
  constructor(private surroundings: HotelService) { }

  ngOnInit() {
    if (!this.hotelsurrounds) {

      this.hotelsurrounds = this.surroundings.getAll();
    }
  }

}
