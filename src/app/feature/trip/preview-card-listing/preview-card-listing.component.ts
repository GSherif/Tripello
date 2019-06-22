import { Component, OnInit, Input } from '@angular/core';
import { Trip } from 'src/app/_models/trip';


@Component({
  selector: 'preview-card-listing',
  templateUrl: './preview-card-listing.component.html',
  styleUrls: ['./preview-card-listing.component.scss']
})
export class PreviewCardListingComponent implements OnInit {
@Input() previewtripItems:Trip[]
  constructor() { }

  ngOnInit() {
   
  }

}
