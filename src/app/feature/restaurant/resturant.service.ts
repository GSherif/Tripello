
import { HotelSurrounding } from 'src/app/_models/hotel-surrounding';
import { Hotel } from 'src/app/_models/hotel';
import { Review } from 'src/app/_models/review';
import { Resturant } from 'src/app/_models/resturant';

export class ResturantService{
    
    data:Resturant[];
    reviews:Review[];
    reviews2:Review[];
    constructor(){
      
        this.reviews=[
            {id:1,reviewerName:"Nathane Raynolda",comment:"Good location, close to the metro station.",rating:4,reviewrtitle:"Blogger",image:"../../../assets/images/people-01-300x300.jpg"},
            {id:2,reviewerName:"Justine-alexandra",comment:"Food was so delicious,but service average",rating:3,reviewrtitle:"Vlogger",image:"https://r-ak.bstatic.com/xdata/images/xphoto/square64/62612233.jpg?k=7f629188b165164d02d78df4887617de05539d59082eb90dc2f379b8c66fc0c8&o=?t=2019-03-26 02:28:38"},
            {id:3,reviewerName:"Monique",comment:"Very good location,great food with great price",rating:4,reviewrtitle:"Bublic firgure",image:"https://lh6.googleusercontent.com/-OwTNCECrxC4/AAAAAAAAAAI/AAAAAAAAAkg/_FkeyRJ191M/photo.jpg64"},
        ]
        this.reviews2 = [
            { id: 1, reviewerName: "Nathane Raynolda", comment: "Good location, close to the metro station.The bed was very comfortable and the room was nicely decorated.", rating: 5, reviewrtitle: "traveller,Blogger", image: "../../../assets/images/people-03-300x300.jpg" },
            { id: 3, reviewerName: "Monique", comment: "Very good location, small but quite compact there is everything needed. The bed is very comfy.", rating: 4, reviewrtitle: "Traveller", image: "../../../assets/images/people-02-300x300.jpg" },
            { id: 2, reviewerName: "Justine-alexandra", comment: " The carpet was a little dirty.The shower door was broken and it was not closing properly.", rating: 2, reviewrtitle: "Vlogger", image: "../../../assets/images/people-01-300x300.jpg" },
        ]
        
        this.data=[

            {id:1,name:"Bistroo",address:"  2125 Spring Street",resturantType:"  Cafe",
           reviews:[...this.reviews], image:"../../../assets/images/bistroo.jpg",rating:4,fkCityId:1,fkCountryId:3, tag:'resturant'},

           {id:2,name:"Chilis",address:"  177 Mostafa elNhas Street",resturantType:"  Restaurant",
           reviews:[...this.reviews2], image:"../../../assets/images/chilis.jpg",rating:3,fkCityId:1,fkCountryId:3,tag:'resturant'},

           {id:3,name:"Chicken Fill-A",address:"  2125 Omar Afndy Street",resturantType:"  Fast Food",
           reviews:[...this.reviews], image:"../../../assets/images/chicken-filla.jpg",rating:3,fkCityId:1,fkCountryId:3,tag:'resturant'},

           {id:4,name:"Lucca",address:"  Royal Maxim Palace Kempinski Hotel,First Settelment,New Cairo",resturantType:"  Italian  Restaurant ",
           reviews:[...this.reviews2], image:"../../../assets/images/Lucca.jpg",rating:4,fkCityId:1,fkCountryId:3,tag:'resturant'},
           
           {id:5,name:"Asmak",address:"  Concord Plaza Mall | Tesseen street ",resturantType:"  SeaFood Restaurant",
           reviews:[...this.reviews], image:"../../../assets/images/Asmak.jpg",rating:4,fkCityId:1,fkCountryId:3,tag:'resturant'},
          
           {id:6,name:"Pizza Bar",address:"  Heliopolis Tower,Cairo ",resturantType:"  Pizza ",
           reviews:[...this.reviews2], image:"../../../assets/images/Pizza Bar.jpg",rating:3,fkCityId:1,fkCountryId:3,tag:'resturant'},
           
           {id:7,name:"Cilantro",address:"  126 Othman Ibn Affan Street ",resturantType:"  Cafe ",
           reviews:[...this.reviews], image:"../../../assets/images/Cilantro.jpg",rating:3.5,fkCityId:1,fkCountryId:3,tag:'resturant'},
           
           {id:8,name:"Giannini's New York",address:"  Sheraton Cairo Hotel & Casino ",resturantType:" Italian food ",
           reviews:[...this.reviews2], image:"../../../assets/images/giannini.jpg",rating:3.5,fkCityId:1,fkCountryId:3,tag:'resturant'},
           
           {id:9,name:"Ibn Hamido",address:"  200 Port Said street",resturantType:" SeaFood Restaurant ",
           reviews:[...this.reviews], image:"../../../assets/images/Ibn Hamido.jpg",rating:5,fkCityId:1,fkCountryId:3,tag:'resturant'},
           
           {id:10,name:"Pizza Hut",address:"  9 B Abou El Feda Street ",resturantType:" Pizza ",
           reviews:[...this.reviews], image:"../../../assets/images/Pizza Hut.jpg",rating:4.5,fkCityId:1,fkCountryId:3,tag:'resturant'},
           
           {id:11,name:"Maestro ",address:"  11511 Omar Ibn El Khattab st. Heliopolis ",resturantType:"  Italian Restaurant ",
           reviews:[...this.reviews2], image:"../../../assets/images/maestro.jpg",rating:5,fkCityId:1,fkCountryId:3,tag:'resturant'},
           
           {id:12,name:"The Smokery",address:"  Katamya Heights | New Cairo - 5th District ",resturantType:"  SeaFood Restaurant",
           reviews:[...this.reviews], image:"../../../assets/images/The Smokery.jpg",rating:4,fkCityId:1,fkCountryId:3,tag:'resturant'},

           {id:13,name:"Arigato",address:"  Legnda Mall, Sheikh Zayed,6 October City ",resturantType:"  Sushi Restaurant",
           reviews:[...this.reviews2], image:"../../../assets/images/arigato.jpg",rating:4,fkCityId:1,fkCountryId:3,tag:'resturant'},

           {id:14,name:"Mori Sushi",address:" 30 El-Mohandes Mohammed Hasan Helmy, Gazirat Mit Oqbah, Agouza, ",resturantType:"  Sushi Restaurant",
           reviews:[...this.reviews], image:"../../../assets/images/MoriSushi.jpg",rating:5,fkCityId:1,fkCountryId:3,tag:'resturant'},
           
           {id:15,name:"Casa Mia",address:"  Sultan Gardens Resort | Shark's Bay, Sharm El Sheikh ",resturantType:"  italian Restaurant",
           reviews:[...this.reviews2], image:"../../../assets/images/CasaMia.jpg",rating:4,fkCityId:2,fkCountryId:3,tag:'resturant'},

           {id:16,name:"Da Mauro 'Solo Pasta&Pizza' ",address:"  El-Salam | Ras Kenedy 5, Sharm El Sheikh ",resturantType:"  italian Restaurant",
           reviews:[...this.reviews2], image:"../../../assets/images/Da Mauro.jpg",rating:3,fkCityId:2,fkCountryId:3,tag:'resturant'},

           {id:17,name:"Farsha Cafe",address:"  Om El Said Hill, Sharm El Sheikh ",resturantType:"  Cafe",
           reviews:[...this.reviews], image:"../../../assets/images/FarshaCafe.jpg",rating:5,fkCityId:2,fkCountryId:3,tag:'resturant'},

           {id:18,name:"La Terrazza",address:"  El Salam Road | NABQ Bay,Sharm El Sheikh ",resturantType:"  Cafe",
           reviews:[...this.reviews2], image:"../../../assets/images/LaTerrazza.jpg",rating:4.5,fkCityId:2,fkCountryId:3,tag:'resturant'},

           {id:19,name:"Reef Grill Restaurant ",address:"  1 Four seasons Boluevard,Sharm El Sheikh ",resturantType:"  Restaurant",
           reviews:[...this.reviews], image:"../../../assets/images/ReefGrillRestaurant.jpg",rating:4,fkCityId:2,fkCountryId:3,tag:'resturant'},

           {id:20,name:"The Palms Bar & Grill",address:"  265 Shark's Bay, Sharm El Sheikh ",resturantType:"  Restaurant",
           reviews:[...this.reviews2], image:"../../../assets/images/ThePalmsBar.jpg",rating:5,fkCityId:2,fkCountryId:3,tag:'resturant'},

           {id:21,name:"El Masrien Grill Restaurant",address:"  Old Market, Sharm El Sheikh ",resturantType:"  Restaurant",
           reviews:[...this.reviews], image:"../../../assets/images/ElMasrienGrill.jpg",rating:4.5,fkCityId:2,fkCountryId:3,tag:'resturant'},

           {id:22,name:"Pizza Hut",address:" El Sultan Qabous St. Beside Hard Rock Cafe, Sharm El Sheikh  ",resturantType:"  Pizza Restaurant",
           reviews:[...this.reviews2], image:"../../../assets/images/Pizza Hut.jpg",rating:5,fkCityId:2,fkCountryId:3,tag:'resturant'},

           {id:23,name:"La Piazzetta",address:" Coral Bay Village | Domina Coral Bay Hotel & Resort, Sharm El Sheikh  ",resturantType:"  Restaurant",
           reviews:[...this.reviews], image:"../../../assets/images/LaPiazzetta.jpg",rating:5,fkCityId:2,fkCountryId:3,tag:'resturant'},

        ];
       
    }
    getAll():Resturant[]{
        return this.data;
    }
    getResturantById(id:Number):Resturant
    {
        return this.data.find(a=>a.id===id)
    }
    getResturantsByCitId(id:number):Resturant[]{
        return this.data.filter(a=>a.fkCityId===id);
    }

  
}
