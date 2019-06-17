import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/_models/hotel';
import { Review } from 'src/app/_models/review';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'reviews-listing',
  templateUrl: './reviews-listing.component.html',
  styleUrls: ['./reviews-listing.component.scss']
})
export class ReviewsListingComponent implements OnInit {
@Input() Reiviews:Review[];
  constructor(private hotelReivew:HotelService) { }

  ngOnInit() {
  }

}
