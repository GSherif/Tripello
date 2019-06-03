
import { HotelSurrounding } from 'src/app/_models/hotel-surrounding';

export class HotelService{
    data:HotelSurrounding[];
    constructor(){
        this.data=[
            {id:1,name:"Chilis",categoryName:"Restaurant",distance:0.9,image:"https://pbs.twimg.com/profile_images/511754294341541888/vmY5Xn13_400x400.png",fkHotelId:null},
            {id:2,name:"Chilis",categoryName:"Restaurant",distance:0.7,image:"https://pbs.twimg.com/profile_images/511754294341541888/vmY5Xn13_400x400.png",fkHotelId:null},
            {id:3,name:"Chilis",categoryName:"Restaurant",distance:0.8,image:"https://pbs.twimg.com/profile_images/511754294341541888/vmY5Xn13_400x400.png",fkHotelId:null},
          
        ]
    }
    getAll():HotelSurrounding[]{
        return this.data;
    }

  
}
