import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/_models/hotel';

@Component({
  selector: 'hotel-details-listing',
  templateUrl: './hotel-details-listing.component.html',
  styleUrls: ['./hotel-details-listing.component.scss']
})
export class HotelDetailsListingComponent implements OnInit {
  @Input() hoteles:Hotel[];
  constructor() { }

  ngOnInit() {
  }

}
