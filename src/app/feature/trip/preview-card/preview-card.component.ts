import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss']
})
export class PreviewCardComponent implements OnInit {
@Input() previewTrip:any;
  constructor() { }

  ngOnInit() {
  }

}
