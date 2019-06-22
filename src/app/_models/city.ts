import { Hotel } from './hotel';

export interface City {
    id: number;
    name: string;
    image: string;
    description: string;
    rating: number;
    hotels: Hotel[];
    activities: string[];
    restaurants: string[];
    destinations: string[];
    fkCountryId: number;
    tag: string;
}