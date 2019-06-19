
import { HotelSurrounding } from 'src/app/_models/hotel-surrounding';
import { Hotel } from 'src/app/_models/hotel';
import { Review } from 'src/app/_models/review';
import { Injectable } from '@angular/core';
@Injectable()
export class HotelService{
    data:HotelSurrounding[];
    dataa:Hotel[];
    reviews:Review[];
    constructor(){
        this.data=[
            {id:1,name:"Chilis",categoryName:"Restaurant",distance:0.9,image:"https://pbs.twimg.com/profile_images/511754294341541888/vmY5Xn13_400x400.png",fkHotelId:null},
            {id:2,name:"Chilis",categoryName:"Restaurant",distance:0.7,image:"https://pbs.twimg.com/profile_images/511754294341541888/vmY5Xn13_400x400.png",fkHotelId:null},
            {id:3,name:"Chilis",categoryName:"Restaurant",distance:0.8,image:"https://pbs.twimg.com/profile_images/511754294341541888/vmY5Xn13_400x400.png",fkHotelId:null},
        ]
        this.reviews=[
            {id:1,reviewerName:"Nathane Raynolda",comment:"Good location, close to the metro station.The bed was very comfortable and the room was nicely decorated.",rating:5,reviewrtitle:"traveller,Blogger",image:"../../../assets/images/people-01-300x300.jpg"},
            {id:2,reviewerName:"Justine-alexandra",comment:" The carpet was a little dirty.The shower door was broken and it was not closing properly.",rating:2,reviewrtitle:"Vlogger",image:"https://r-ak.bstatic.com/xdata/images/xphoto/square64/62612233.jpg?k=7f629188b165164d02d78df4887617de05539d59082eb90dc2f379b8c66fc0c8&o=?t=2019-03-26 02:28:38"},
            {id:3,reviewerName:"Monique",comment:"Very good location, small but quite compact there is everything needed. The bed is very comfy.",rating:4,reviewrtitle:"Traveller",image:"https://lh6.googleusercontent.com/-OwTNCECrxC4/AAAAAAAAAAI/AAAAAAAAAkg/_FkeyRJ191M/photo.jpg64"},
        ]
        this.dataa=[
            {id:1,name:"Kempinski Nile Hotel",description:"First Settlement, Eastern Ring Road,New Cairo City,11477 Cairo,Egypt.... hotels Every thing was perfect! Excellent hotel we really enjoy it, great view above the nile, stuff very friendly and helpful",facilities:["Parking","Family rooms","Airport shuttle"],
            advantages:null,reviews:[...this.reviews], images:null,rating:null,fkCityId:1,fkCountryId:3,
            surroundings:[...this.data],reasons:["Prices you can't beat!","Manage your bookings online","The staff speak English","Booking is safe"]},
        ];
       
    }
    getAll():Hotel[]{
        return this.dataa;
    }
    getHotelById(id:number):Hotel
    {
        return this.dataa[id];
    }
    getHotelByCityId(cityid:number):Hotel[]
    {
        return this.dataa.filter(c => c.fkCityId === cityid);
    }

  
}
