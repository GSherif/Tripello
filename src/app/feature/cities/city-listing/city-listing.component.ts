import { Component, OnInit, Input } from '@angular/core';
import { City } from 'src/app/_models/city';
import { CityService } from '../city.service';

@Component({
  selector: 'city-listing',
  templateUrl: './city-listing.component.html',
  styleUrls: ['./city-listing.component.scss']
})
export class CityListingComponent implements OnInit {

  @Input() data: City[];
  @Input() countryCities: City[];
  constructor(private cityService: CityService) { }

  ngOnInit() {
    if (!this.data) {
      this.data = this.cityService.getAll();
      console.log(this.data)
    }

    // if (!this.countryCities) {
    //   this.countryCities=this.cityService.getByCountryId(3);
    // }
  }

}
