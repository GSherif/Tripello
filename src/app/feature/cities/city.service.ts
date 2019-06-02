import { City } from 'src/app/_models/city';

export class CityService{
    data:City[];
    constructor()
    {
        this.data=[
            {id:1,name:"Cairo",description:null,rating:null,hotels:null,activities:null,restaurants:null,fkCountryId:null,destinations:null},
            {id:2,name:"Santoreny",description:null,rating:null,hotels:null,activities:null,restaurants:null,fkCountryId:null,destinations:null},
            {id:3,name:"Baly",description:null,rating:null,hotels:null,activities:null,restaurants:null,fkCountryId:null,destinations:null},
            {id:4,name:"Birute",description:null,rating:null,hotels:null,activities:null,restaurants:null,fkCountryId:null,destinations:null}

        ]
    }
  
    getAll():City[]{
        return this.data;
    }
    
}