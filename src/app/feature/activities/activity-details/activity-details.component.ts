import { Component, OnInit, Input } from '@angular/core';
import { Activity } from 'src/app/_models/activity';
import { ActivityService } from '../activity.service';
import { ActivatedRoute } from '@angular/router';

@Component({

  selector: 'activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {
@Input() activity :Activity
  // activatedRoute: any;
  constructor(private activityDetails:ActivityService,private activatedRoute: ActivatedRoute) {


  }

  ngOnInit() {
    let id: number = +this.activatedRoute.snapshot.params.id;
    if(!this.activity){
      this.activity=this.activityDetails.getById(id);
      console.log(this.activity.reviews)
    }
  }

}
