import { Component, OnInit, Input } from '@angular/core';
import { Resturant } from 'src/app/_models/resturant';
import { ResturantService } from './resturant.service';

@Component({
  selector: 'restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
@Input() resturant:Resturant;
  constructor(private resturantt:ResturantService) { }

  ngOnInit() {
    this.resturant=this.resturantt.getResturantById(5)
    console.log(this.resturant)
  }

}
