import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'city-activity-details-card',
  templateUrl: './city-activity-details-card.component.html',
  styleUrls: ['./city-activity-details-card.component.scss']
})
export class CityActivityDetailsCardComponent implements OnInit {
  @Input()cityData:any;
  constructor() { }

  ngOnInit() {
  }

}
