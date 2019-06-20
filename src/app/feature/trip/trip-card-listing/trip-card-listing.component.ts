import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/_models/hotel';
import { Resturant } from 'src/app/_models/resturant';
import { HotelService } from '../../hotels/hotel.service';
import { ResturantService } from '../../restaurant/resturant.service';

@Component({
  selector: 'trip-card-listing',
  templateUrl: './trip-card-listing.component.html',
  styleUrls: ['./trip-card-listing.component.scss']
})
export class TripCardListingComponent implements OnInit {
@Input() dataa:any[];

  constructor() { }

  ngOnInit() {
    console.log(this.dataa)
   
  }

}
