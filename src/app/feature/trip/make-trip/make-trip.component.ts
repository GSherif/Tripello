import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/_models/city';
import { Trip } from 'src/app/_models/trip';
import { TripService } from './trip.service';

@Component({
  selector: 'app-make-trip',
  templateUrl: './make-trip.component.html',
  styleUrls: ['./make-trip.component.scss']
})
export class MakeTripComponent implements OnInit {
  trip: Trip[];
  constructor(private tripe: TripService) { }

  ngOnInit() {
    
    this.trip = this.tripe.getAll();
    console.log(this.trip)
  }

}
