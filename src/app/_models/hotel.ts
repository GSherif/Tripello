import { Review } from './review';
import { HotelSurrounding } from './hotel-surrounding';

export interface Hotel {
    id: number;
    name: string;
    description: string;
    facilities: string[];
    surroundings: HotelSurrounding[];
    advantages: string[];
    reviews: Review[];
    images: string[];
    rating: number;
    fkCityId: number;
    fkCountryId: number;

}