import { Component, OnInit, Input } from '@angular/core';
import { Trip } from 'src/app/_models/trip';
import { TripService } from './trip.service';

@Component({
  selector: 'app-make-trip',
  templateUrl: './make-trip.component.html',
  styleUrls: ['./make-trip.component.scss']
})
export class MakeTripComponent implements OnInit {

  @Input() trip: Trip;

  constructor(private tripe: TripService) { }

  ngOnInit() {
    if (!this.trip) {
      this.trip = this.tripe.getAll();
      console.log(this.trip);

      console.log(this.trip['countries']);

    }
  }

}
