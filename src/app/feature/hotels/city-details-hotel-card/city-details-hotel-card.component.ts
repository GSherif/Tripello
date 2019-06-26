import { Component, OnInit, Input } from '@angular/core';
import { TripService } from '../../trip/trip.service';
import { Trip } from 'src/app/_models/trip';
import { Hotel } from 'src/app/_models/hotel';

@Component({
  selector: 'city-details-hotel-card',
  templateUrl: './city-details-hotel-card.component.html',
  styleUrls: ['./city-details-hotel-card.component.scss']
})
export class CityDetailsHotelCardComponent implements OnInit {

  @Input() hotelCityData: Hotel;
  trip: Trip;
  constructor(private tripp: TripService) { 
  }

  ngOnInit() {
    console.log(this.hotelCityData);
  }
  
  OnAdd() {
    // this.cityData;
    this.trip = this.tripp.getAll();
    console.log(this.trip)
    let tag = this.hotelCityData.tag;
    console.log(tag)
    let triptage = this.trip.type = tag;
    console.log(this.trip.type)

    if (triptage == 'hotel') {
      console.log(this.trip.hotels);
      this.trip.hotels.push(this.hotelCityData);
      console.log(this.trip)

  }
}

}
