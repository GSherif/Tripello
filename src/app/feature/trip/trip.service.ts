
import { Hotel } from 'src/app/_models/hotel';
import { Resturant } from 'src/app/_models/resturant';
import { Trip } from 'src/app/_models/trip';
import { Country } from 'src/app/_models/country';
import { City } from 'src/app/_models/city';
import { Injectable } from '@angular/core';
import { HotelService } from '../hotels/hotel.service';
import { CountryService } from '../countries/country.service';
import { ResturantService } from '../restaurant/resturant.service';
import { CityService } from '../cities/city.service';
import { Activity } from 'src/app/_models/activity';

@Injectable()
export class TripService{
    
    data:Trip;
    dataOrdered:any[]=[];
    countries:Country[];
    resturants:Resturant[];
    hotels:Hotel[];
    cities:City[];
    activities:Activity[];
    constructor(private hotel:HotelService,private country:CountryService ,private resturant:ResturantService,private city:CityService){

        // this.countries=this.country.getCountriesByIds([1,3,5]);
        // this.hotels= this.hotel.getHotelByCityId(1);
        // this.resturants=this.resturant.getResturantsByCitId(1);
        // this.cities=this.city.getByCountryIds([1,3,5]);
        console.log(this.cities)
        console.log(this.countries);

       this.data={id:1,cities:[],countries:[],resturants:[],hotels:[],activities:[],type:""};
        
       this.dataOrdered=[];
          
     
    }

    getAll(): Trip {
        return this.data;
    }
    getAllOrdered(): any[] {
        return this.dataOrdered;
    }
    // getById(id:number):Trip{
    //     return this.data.find(el=>el.id===id);
    // }


}
