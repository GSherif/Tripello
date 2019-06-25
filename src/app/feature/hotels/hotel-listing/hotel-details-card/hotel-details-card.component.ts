import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/_models/hotel';
import { TripService } from 'src/app/feature/trip/trip.service';
import { Trip } from 'src/app/_models/trip';

@Component({
  selector: 'hotel-details-card',
  templateUrl: './hotel-details-card.component.html',
  styleUrls: ['./hotel-details-card.component.scss']
})
export class HotelDetailsCardComponent implements OnInit {
@Input() hotel:Hotel

trip: Trip;
  constructor(private tripp: TripService) { }

  ngOnInit() {
  }
  OnAdd() {
  
    this.trip = this.tripp.getAll();
    console.log(this.trip)
    let tag = this.hotel.tag;
    console.log(tag)
    let triptage = this.trip.type = tag;
    console.log(this.trip.type)

    if (triptage == 'hotel') {
      console.log(this.trip.hotels);
      this.trip.hotels.push(this.hotel);
      console.log(this.trip)

    }
    

  }
}
