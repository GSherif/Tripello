export interface Activity {
    id: number;
    name: string;
    image: string;
    address:string;
    description: string;
    activityType:String;
    rating: number;
    fkCityId: number;
}