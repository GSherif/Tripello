import { Component, OnInit, Input } from '@angular/core';
import { Resturant } from 'src/app/_models/resturant';
import { Activity } from 'src/app/_models/activity';
import { Hotel } from 'src/app/_models/hotel';
import { ResturantService } from '../../restaurant/resturant.service';
import { HotelService } from '../../hotels/hotel.service';
import { ActivityService } from '../../activities/activity.service';


@Component({

  selector: 'city-details-listing',
  templateUrl: './city-details-listing.component.html',
  styleUrls: ['./city-details-listing.component.scss']
})
export class CityDetailsListingComponent implements OnInit {
  
  @Input() hotel:Hotel[];
@Input() resturant:Resturant[];
@Input() activity:Activity[];

  constructor(private resturants:ResturantService,private hotels:HotelService,private activities:ActivityService) { }

  ngOnInit() {
    
    if(!this.resturant && !this.hotel && !this.activity){
      this.resturant=this.resturants.getResturantsByCitId(1);
      this.hotel=this.hotels.getHotelByCityId(1);
      this.activity=this.activities.getActivityByCityId(1);
    }
  }

}
