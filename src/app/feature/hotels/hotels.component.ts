import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/_models/hotel';
import { HotelService } from './hotel.service';

@Component({
  selector: 'hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  @Input() hotel: Hotel;
  constructor(private hottel: HotelService) { }

  ngOnInit() {
    if (!this.hotel) {

      this.hotel= this.hottel.getHotelById(0);
      console.log(this.hotel)
    }
  }

}
