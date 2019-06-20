import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss']
})
export class TripCardComponent implements OnInit {
@Input() tripData:any;
  constructor() { }

  ngOnInit() {
  }

}
