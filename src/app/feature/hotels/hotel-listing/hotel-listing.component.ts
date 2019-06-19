import { Component, OnInit, Input } from '@angular/core';
import { City } from 'src/app/_models/city';
import { CityService } from '../../cities/city.service';
import { HotelService } from '../hotel.service';
import { Hotel } from 'src/app/_models/hotel';

@Component({
  selector: 'hotel-listing',
  templateUrl: './hotel-listing.component.html',
  styleUrls: ['./hotel-listing.component.scss']
})
export class HotelListingComponent implements OnInit {
@Input() hotles:Hotel[];
@Input() city:City;
  constructor(private hotel:HotelService,private cty:CityService) { }

  ngOnInit() {
    if(!this.hotles){
      this.hotles=this.hotel.getHotelByCityId(1);
      this.city=this.cty.getById(1);
    }
  }

}
