import { Component, OnInit, Input } from '@angular/core';
import { Resturant } from 'src/app/_models/resturant';
import { Trip } from 'src/app/_models/trip';
import { TripService } from '../../trip/trip.service';

@Component({

  selector: 'city-details-resturant-card',
  templateUrl: './city-details-resturant-card.component.html',
  styleUrls: ['./city-details-resturant-card.component.scss']
})
export class CityDetailsResturantCardComponent implements OnInit {

  @Input() resturantCityData: Resturant;
  trip: Trip;
  constructor(private tripp: TripService) { 
  }

  ngOnInit() {
    console.log(this.resturantCityData);
  }
  
  OnAdd() {
    // this.cityData;
    this.trip = this.tripp.getAll();
    console.log(this.trip)
    let tag = this.resturantCityData.tag;
    console.log(tag)
    let triptage = this.trip.type = tag;
    console.log(this.trip.type)

    if (triptage == 'resturant') {
      console.log(this.trip.hotels);
      this.trip.resturants.push(this.resturantCityData);
      console.log(this.trip)

  }
}

}
