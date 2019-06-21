import { Component, OnInit, Input } from '@angular/core';
import { Activity } from 'src/app/_models/activity';
import { ActivityService } from './activity.service';


@Component({
  selector: 'activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  @Input() safari: Activity[];
  @Input() cycling: Activity[];
  @Input() canoeing: Activity[];
  @Input() dogsledding: Activity[];
 @Input() activity :Activity[];
  constructor(private activities: ActivityService) {

  }

  ngOnInit() {
    if ( !this.activity && !this.canoeing && !this.cycling && !this.dogsledding && !this.safari) {
      // this.activity=this.activities.getAll();
      this.safari=this.activities.getActivityByType('Safari')
      this.cycling=this.activities.getActivityByType('Cycling')
      this.canoeing=this.activities.getActivityByType('Canoeing')
      this.dogsledding=this.activities.getActivityByType('Dog sledding')

    }
  }

}
