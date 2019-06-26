import { Component, OnInit, Input } from '@angular/core';
import { Activity } from 'src/app/_models/activity';
import { Trip } from 'src/app/_models/trip';
import { TripService } from '../../trip/trip.service';

@Component({
  
  selector: 'city-details-activity-card',
  templateUrl: './city-details-activity-card.component.html',
  styleUrls: ['./city-details-activity-card.component.scss']
})
export class CityDetailsActivityCardComponent implements OnInit {

  @Input() activityCityData: Activity;
  trip: Trip;
  constructor(private tripp: TripService) { 
  }

  ngOnInit() {
    console.log(this.activityCityData);
  }
  
  OnAdd() {
    // this.cityData;
    this.trip = this.tripp.getAll();
    console.log(this.trip)
    let tag = this.activityCityData.tag;
    console.log(tag)
    let triptage = this.trip.type = tag;
    console.log(this.trip.type)

    if (triptage == 'activity') {
      console.log(this.trip.hotels);
      this.trip.activities.push(this.activityCityData);
      console.log(this.trip)

  }
}

}
