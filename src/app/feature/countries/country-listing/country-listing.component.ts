import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/_models/country';
import { CountryService } from '../country.service';
import { City } from 'src/app/_models/city';
import { CityService } from '../../cities/city.service';

@Component({
  selector: 'country-listing',
  templateUrl: './country-listing.component.html',
  styleUrls: ['./country-listing.component.scss']
})
export class CountryListingComponent implements OnInit {

  @Input() data: Country[];
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    if (!this.data) {
      this.data = this.countryService.getAll();
    }
  }

}
