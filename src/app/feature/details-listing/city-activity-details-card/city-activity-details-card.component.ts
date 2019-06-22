import { Component, OnInit, Input } from '@angular/core';
import { Trip } from 'src/app/_models/trip';
import { TripService } from '../../trip/make-trip/trip.service';

@Component({
  selector: 'city-activity-details-card',
  templateUrl: './city-activity-details-card.component.html',
  styleUrls: ['./city-activity-details-card.component.scss']
})
export class CityActivityDetailsCardComponent implements OnInit {
  @Input() cityData: any;
  trip: Trip;
  constructor(private tripp: TripService) { }

  ngOnInit() {
    console.log(this.cityData)
  }

  OnAdd() {
    // this.cityData;
    this.trip = this.tripp.getAll();
    console.log(this.trip)
    
    this.trip.hotels.push(this.cityData);
  }


}
