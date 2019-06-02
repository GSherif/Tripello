import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/_models/country';
import { CountryService } from '../../countries/country.service';
import { City } from 'src/app/_models/city';
import { CityService } from '../../cities/city.service';

@Component({
  selector: 'app-make-trip',
  templateUrl: './make-trip.component.html',
  styleUrls: ['./make-trip.component.scss']
})
export class MakeTripComponent implements OnInit {
 countries:Country[];
 cities:City[];
  constructor(private country: CountryService,private city:CityService) { }

  ngOnInit() {
    this.countries=this.country.getAll();
    this.cities=this.city.getAll();
  }

}
