import { Component, OnInit, Input } from '@angular/core';
import { Resturant } from 'src/app/_models/resturant';
import { ResturantService } from './resturant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
@Input() resturant:Resturant;
  // activatedRoute: any;
  constructor(private resturantt:ResturantService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id: number = +this.activatedRoute.snapshot.params.id;
    this.resturant=this.resturantt.getResturantById(id)
    console.log(this.resturant)
  }

}
