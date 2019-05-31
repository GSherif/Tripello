import { Review } from './review';

export interface Hotel {
    id: number;
    name: string;
    description: string;
    facilities: string[];
    surroundings: string[];
    advantages: string[];
    reviews: Review[];
    images: string[];
    rating: number;
    fkCityId: number;
    fkCountryId: number;
}