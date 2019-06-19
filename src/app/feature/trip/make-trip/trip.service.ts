
import { Hotel } from 'src/app/_models/hotel';
import { Resturant } from 'src/app/_models/resturant';
import { Trip } from 'src/app/_models/trip';
import { Country } from 'src/app/_models/country';
import { City } from 'src/app/_models/city';
import { Injectable } from '@angular/core';
import { HotelService } from '../../hotels/hotel.service';
import { CountryService } from '../../countries/country.service';

@Injectable()
export class TripService{
    
    data:Trip[];
    countries:Country[];
    resturants:Resturant[];
    hotels:Hotel[];
    cities:City[];
    constructor(private hotel:HotelService,private country:CountryService){
    //   this.countries=[
    //       {id:1,name:"Egypt",image:null,description:null,cities:null,rating:null},
    //       {id:2,name:"Lebanon",image:null,description:null,cities:null,rating:null},
    //       {id:3,name:"Greece",image:null,description:null,cities:null,rating:null},
    //       {id:4,name:"Egypt",image:null,description:null,cities:null,rating:null},

    //     ]
        // this.cities=[
        //     {id:1,name:"Cairo",image:null,description:null,rating:null,hotels:null,activities:null,restaurants:null,destinations:null,fkCountryId:1},
        // ]
        this.countries=this.country.getCountriesByIds([1,3,5]);
        
        this.hotels= this.hotel.getHotelByCityId(1);
        console.log(this.countries);

        // this.cities=
       this.data=[
           {id:1,cities:null,countries:[...this.countries],resturants:null,hotels:[...this.hotels]},
          
           
       ];
     
       
    }
    getAll():Trip[]{
        return this.data;
    }

  
}
