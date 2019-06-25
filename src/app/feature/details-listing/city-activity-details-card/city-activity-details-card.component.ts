import { Component, OnInit, Input } from '@angular/core';
import { Trip } from 'src/app/_models/trip';
import { TripService } from '../../trip/trip.service';

@Component({
  selector: 'city-activity-details-card',
  templateUrl: './city-activity-details-card.component.html',
  styleUrls: ['./city-activity-details-card.component.scss']
})
export class CityActivityDetailsCardComponent implements OnInit {
  @Input() cityData: any;
  trip: Trip;
  constructor(private tripp: TripService) { 
    this.cityData=0;
  }

  ngOnInit() {
    console.log(this.cityData);
  }
  

  OnAdd() {
    // this.cityData;
    this.trip = this.tripp.getAll();
    console.log(this.trip)
    let tag = this.cityData.tag;
    console.log(tag)
    let triptage = this.trip.type = tag;
    console.log(this.trip.type)

    if (triptage == 'hotel') {
      console.log(this.trip.hotels);
      this.trip.hotels.push(this.cityData);
      console.log(this.trip)

    }
    else if (triptage == 'resturant') {
      this.trip.resturants.push(this.cityData);

    }
    else if(triptage==='activity')
    {
      this.trip.activities.push(this.cityData);
    }

  }


}
