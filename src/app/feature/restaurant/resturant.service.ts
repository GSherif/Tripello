
import { HotelSurrounding } from 'src/app/_models/hotel-surrounding';
import { Hotel } from 'src/app/_models/hotel';
import { Review } from 'src/app/_models/review';
import { Resturant } from 'src/app/_models/resturant';

export class ResturantService{
    
    data:Resturant[];
    reviews:Review[];
    constructor(){
      
        this.reviews=[
            {id:1,reviewerName:"Nathane Raynolda",comment:"Good location, close to the metro station.",rating:4,reviewrtitle:"Blogger",image:"../../../assets/images/people-01-300x300.jpg"},
            {id:2,reviewerName:"Justine-alexandra",comment:"Food was so delicious,but service average",rating:3,reviewrtitle:"Vlogger",image:"https://r-ak.bstatic.com/xdata/images/xphoto/square64/62612233.jpg?k=7f629188b165164d02d78df4887617de05539d59082eb90dc2f379b8c66fc0c8&o=?t=2019-03-26 02:28:38"},
            {id:3,reviewerName:"Monique",comment:"Very good location,great food with great price",rating:4,reviewrtitle:"Bublic firgure",image:"https://lh6.googleusercontent.com/-OwTNCECrxC4/AAAAAAAAAAI/AAAAAAAAAkg/_FkeyRJ191M/photo.jpg64"},
        ]
        this.data=[
            {id:1,name:"Bistroo",address:"Address : 2125 Spring Street",resturantType:"Restaurant Type : Cafe",
           reviews:[...this.reviews], image:"../../../assets/images/bistroo.jpg",rating:4,fkCityId:1,fkCountryId:3},
           {id:2,name:"Chilis",address:"Address : 177 Mostafa elNhas Street",resturantType:"Restaurant Type : Restaurant",
           reviews:[...this.reviews], image:"../../../assets/images/chilis.jpg",rating:3,fkCityId:1,fkCountryId:3},
           {id:3,name:"Chicken Fill-A",address:"Address : 2125 Omar Afndy Street",resturantType:"Restaurant Type : Fast Food",
           reviews:[...this.reviews], image:"../../../assets/images/chicken-filla.jpg",rating:3,fkCityId:1,fkCountryId:3},

        ];
       
    }
    getAll():Resturant[]{
        return this.data;
    }
    getResturantById():Resturant
    {
        return this.data[0];
    }
    getResturantsByCitId(id:number):Resturant[]{
        return this.data.filter(a=>a.fkCityId===id);
    }

  
}
