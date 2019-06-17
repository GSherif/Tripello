import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/_models/hotel';

@Component({
  selector: 'hotel-facilities-card',
  templateUrl: './hotel-facilities-card.component.html',
  styleUrls: ['./hotel-facilities-card.component.scss']
})
export class HotelFacilitiesCardComponent implements OnInit {
  @Input() hotelFacility:Hotel;
  constructor() { }

  ngOnInit() {
  }

}
