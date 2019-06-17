import { Component, OnInit, Input } from '@angular/core';
import { HotelSurrounding } from 'src/app/_models/hotel-surrounding';
import { Hotel } from 'src/app/_models/hotel';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {
  @Input() hotelSurroud:HotelSurrounding;

  constructor() {
            // this.hotelSurroud={id:1,name:"Chilis",categoryName:"Restaurant",distance:0.5,image:"https://pbs.twimg.com/profile_images/511754294341541888/vmY5Xn13_400x400.png",fkHotelId:null}
   }

  ngOnInit() {

  }

}
