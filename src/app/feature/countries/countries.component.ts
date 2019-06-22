import { Component, OnInit, Input } from '@angular/core';
import { City } from 'src/app/_models/city';
import { CityService } from '../cities/city.service';
import { CountryService } from './country.service';
import { Country } from 'src/app/_models/country';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  // @Input() data: City[]
  @Input() country: Country
  constructor(private cityService: CityService, private countryService: CountryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id: number = +this.activatedRoute.snapshot.params.id;
    this.country = this.countryService.getById(id);
    console.log(this.country)

  }

}
