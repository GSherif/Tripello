import { Component, OnInit, Input } from '@angular/core';
import { Trip } from 'src/app/_models/trip';
import { TripService } from '../trip.service';

@Component({
  selector: 'trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss']
})
export class TripCardComponent implements OnInit {
  @Input() tripData: any;
  tripOrderd: any[];
  constructor(private triporder:TripService) { }

  ngOnInit() {
  }
  OnAddToOrder(){
    
    console.log(this.tripOrderd);
    console.log(this.tripData);

    this.tripOrderd=this.triporder.getAllOrdered();
    this.tripOrderd.push(this.tripData)
    console.log(this.tripOrderd);
  }

}
