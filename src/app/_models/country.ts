import { City } from './city';

export interface Country {
    id: number;
    name: string;
    image: string;
    description: string;
    cities: City[];
    rating: number;
    sliderImages: string[];
    tag: string;
}