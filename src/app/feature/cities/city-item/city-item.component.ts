import { Component, OnInit, Input } from '@angular/core';
import { City } from 'src/app/_models/city';
import { Trip } from 'src/app/_models/trip';
import { TripService } from '../../trip/trip.service';

@Component({
  selector: 'city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.scss']
})
export class CityItemComponent implements OnInit {

  @Input() city: City;
  trip: Trip;
  constructor(private tripp: TripService) { }

  ngOnInit() {
  }
  OnAdd() {
    // this.cityData;
    this.trip = this.tripp.getAll();
    console.log(this.trip)
    let tag = this.city.tag;
    console.log(tag)
    let triptage = this.trip.type = tag;
    console.log(this.trip.type)
    this.trip.cities.push(this.city);

  }

}
