import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/_models/country';
import { Trip } from 'src/app/_models/trip';
import { TripService } from '../../trip/trip.service';

@Component({
  selector: 'country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.scss']
})
export class CountryItemComponent implements OnInit {

  @Input() country: Country;
  trip: Trip;
  constructor(private tripp: TripService) { }

  ngOnInit() {
    
  }
  OnAdd() {
    // this.cityData;
    this.trip = this.tripp.getAll();
    console.log(this.trip)
    let tag = this.country.tag;
    console.log(tag)
    let triptage = this.trip.type = tag;
    console.log(this.trip.type)
    this.trip.countries.push(this.country);

  }


}
