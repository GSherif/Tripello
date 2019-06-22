import { City } from './city';
import { Country } from './country';
import { Resturant } from './resturant';
import { Hotel } from './hotel';
import { Activity } from './activity';

export interface Trip {
    id: number;
    // name: string;
    // description: string;
    cities: City[];
    countries: Country[];
    resturants:Resturant[];
    hotels:Hotel[];
    activities:Activity[];
    type:string;
    
}