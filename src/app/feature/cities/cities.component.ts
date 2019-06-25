import { Component, OnInit, Input } from '@angular/core';
import { Resturant } from 'src/app/_models/resturant';
import { Activity } from 'src/app/_models/activity';
import { Hotel } from 'src/app/_models/hotel';
import { ResturantService } from '../restaurant/resturant.service';
import { HotelService } from '../hotels/hotel.service';
import { ActivityService } from '../activities/activity.service';
import { CityService } from './city.service';
import { City } from 'src/app/_models/city';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  @Input() hotel: Hotel[];
  @Input() resturant: Resturant[];
  @Input() activity: Activity[];
  @Input() city: City;
  constructor(private resturants: ResturantService, private hotels: HotelService, private activities: ActivityService, private cityService: CityService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id: number = +this.activatedRoute.snapshot.params.id;
    this.city = this.cityService.getById(id);
    console.log(this.city)
    if (!this.resturant && !this.hotel && !this.activity) {
      this.resturant = this.resturants.getResturantsByCitId(this.city.id);
      console.log(this.resturant)
      this.hotel = this.hotels.getHotelByCityId(this.city.id);
      console.log(this.hotel)
      this.activity = this.activities.getActivityByCityId(this.city.id);
    }
  }
}
