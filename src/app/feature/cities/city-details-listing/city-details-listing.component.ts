import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({

  selector: 'city-details-listing',
  templateUrl: './city-details-listing.component.html',
  styleUrls: ['./city-details-listing.component.scss']
})
export class CityDetailsListingComponent implements OnInit {

  cityDetails: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
