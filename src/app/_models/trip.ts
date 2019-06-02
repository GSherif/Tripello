import { City } from './city';
import { Country } from './country';
export interface Trip {
    id: number;
    name: string;
    description: string;
    cities: City[];
    countries: Country[];
    
}