import {Country} from '../../_models/country';

export class CountryService{
    data:Country[];
    constructor(){
        this.data=[
            {id:1,name:"Egypt",description:null,cities:null,rating:null},
            {id:2,name:"Greece",description:null,cities:null,rating:null},
            {id:3,name:"India",description:null,cities:null,rating:null},
            {id:4,name:"Lebanon",description:null,cities:null,rating:null}
        ]
    }
    getAll():Country[]{
        return this.data
    }
}
