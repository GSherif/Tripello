import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/_models/hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'hotel-reasons-list',
  templateUrl: './hotel-reasons-list.component.html',
  styleUrls: ['./hotel-reasons-list.component.scss']
})
export class HotelReasonsListComponent implements OnInit {
  @Input() hotelReasons:Hotel[];
  constructor(private facilities: HotelService) { }

  ngOnInit() {
  }

}
