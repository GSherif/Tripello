import { Review } from './review';

export interface Resturant {
    id: number;
    name: string;
    address: string;
    resturantType:string;
    reviews: Review[];
    images: string[];
    rating: number;
    fkCityId: number;
    fkCountryId: number;


}