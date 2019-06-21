import { Component, OnInit, Input } from '@angular/core';
import { Resturant } from 'src/app/_models/resturant';
import { ResturantService } from '../../resturant.service';

@Component({
  selector: 'restaurant-details-listing',
  templateUrl: './restaurant-details-listing.component.html',
  styleUrls: ['./restaurant-details-listing.component.scss']
})
export class RestaurantDetailsListingComponent implements OnInit {
@Input() restuarants:Resturant[];
  constructor() { }

  ngOnInit() {
   
  }

}
