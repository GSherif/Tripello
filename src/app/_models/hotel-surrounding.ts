
export interface HotelSurrounding {
    id: number;
    name: string;
    categoryName?:string;
    distance: number;
    fkHotelId?: number;
    image?:string;
}