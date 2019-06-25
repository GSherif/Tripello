import { Component, OnInit, Input } from '@angular/core';
import { Activity } from 'src/app/_models/activity';
import { ActivityService } from '../activity.service';

@Component({

  selector: 'activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {
@Input() activity :Activity
  constructor(private activityDetails:ActivityService) {


  }

  ngOnInit() {
    if(!this.activity){
      this.activity=this.activityDetails.getById(1);
      console.log(this.activity.reviews)
    }
  }

}
