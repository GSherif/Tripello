import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/_models/review';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'reviews-item',
  templateUrl: './reviews-item.component.html',
  styleUrls: ['./reviews-item.component.scss']
})
export class ReviewsItemComponent implements OnInit {
@Input() reiview:Review;
  constructor(private review:HotelService) { }

  ngOnInit() {
  }

}
