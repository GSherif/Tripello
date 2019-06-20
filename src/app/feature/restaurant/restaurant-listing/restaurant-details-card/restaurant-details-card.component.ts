import { Component, OnInit, Input } from '@angular/core';
import { Resturant } from 'src/app/_models/resturant';

@Component({
  selector: 'restaurant-details-card',
  templateUrl: './restaurant-details-card.component.html',
  styleUrls: ['./restaurant-details-card.component.scss']
})
export class RestaurantDetailsCardComponent implements OnInit {
@Input()resturant:Resturant;
  constructor() { }

  ngOnInit() {
  }

}
