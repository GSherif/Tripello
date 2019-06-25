import { Component, OnInit, Input } from '@angular/core';
import { Resturant } from 'src/app/_models/resturant';
import { TripService } from 'src/app/feature/trip/trip.service';
import { Trip } from 'src/app/_models/trip';

@Component({
  selector: 'restaurant-details-card',
  templateUrl: './restaurant-details-card.component.html',
  styleUrls: ['./restaurant-details-card.component.scss']
})
export class RestaurantDetailsCardComponent implements OnInit {
@Input()resturant:Resturant;

trip: Trip;
  constructor(private tripp: TripService) { }

  ngOnInit() {
  }
  OnAdd() {
  
    this.trip = this.tripp.getAll();
    console.log(this.trip)
    let tag = this.resturant.tag;
    console.log(tag)
    let triptage = this.trip.type = tag;
    console.log(this.trip.type)

    if (triptage == 'resturant') {
      console.log(this.trip.hotels);
      this.trip.resturants.push(this.resturant);
      console.log(this.trip)

    }
    

  }

}
