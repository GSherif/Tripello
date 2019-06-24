import { Component, OnInit, Input } from '@angular/core';
import { TripService } from '../trip.service';
import { Trip } from 'src/app/_models/trip';

@Component({
  selector: 'preview-trip',
  templateUrl: './preview-trip.component.html',
  styleUrls: ['./preview-trip.component.scss']
})
export class PreviewTripComponent implements OnInit {
  @Input() previewItems:Trip[]
  constructor(private tripPreview:TripService) { }

  ngOnInit() {
    if(!this.previewItems){
      this.previewItems=this.tripPreview.getAllOrdered()
    }
  }

}
