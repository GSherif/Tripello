import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/_models/hotel';

@Component({
  selector: 'hotel-details-card',
  templateUrl: './hotel-details-card.component.html',
  styleUrls: ['./hotel-details-card.component.scss']
})
export class HotelDetailsCardComponent implements OnInit {
@Input() hotel:Hotel
  constructor() { }

  ngOnInit() {
  }

}
