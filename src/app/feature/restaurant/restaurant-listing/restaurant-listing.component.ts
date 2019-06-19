import { Component, OnInit, Input } from '@angular/core';
import { Resturant } from 'src/app/_models/resturant';
import { ResturantService } from '../resturant.service';
import { City } from 'src/app/_models/city';
import { CityService } from '../../cities/city.service';

@Component({
  selector: 'restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrls: ['./restaurant-listing.component.scss']
})
export class RestaurantListingComponent implements OnInit {
@Input() restuarants:Resturant[];
@Input() city:City;
  constructor(private restrants:ResturantService,private citty:CityService) {
    
  }

  ngOnInit() {
    if(!this.restuarants){
      this.restuarants=this.restrants.getResturantsByCitId(1);
      this.city=this.citty.getById(1);
    }
  }

}
