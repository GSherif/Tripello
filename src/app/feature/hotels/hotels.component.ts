import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/_models/hotel';
import { HotelService } from './hotel.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  @Input() hotel: Hotel;
  // activatedRoute: any;
  constructor(private hottel: HotelService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const idd: number = +this.activatedRoute.snapshot.params.id;
    console.log(idd);
    if (!this.hotel) {
      this.hotel= this.hottel.getHotelById(idd);
      console.log(this.hotel)
    }
  }

}
