
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
           reviews:[...this.reviews], image:"../../../assets/images/bistroo.jpg",rating:4,fkCityId:1,fkCountryId:3, tag:'resturant'},

           {id:2,name:"Chilis",address:"Address : 177 Mostafa elNhas Street",resturantType:"Restaurant Type : Restaurant",
           reviews:[...this.reviews], image:"../../../assets/images/chilis.jpg",rating:3,fkCityId:1,fkCountryId:3,tag:'resturant'},

           {id:3,name:"Chicken Fill-A",address:"Address : 2125 Omar Afndy Street",resturantType:"Restaurant Type : Fast Food",
           reviews:[...this.reviews], image:"../../../assets/images/chicken-filla.jpg",rating:3,fkCityId:1,fkCountryId:3,tag:'resturant'},

           {id:4,name:"Lucca",address:"Address : Royal Maxim Palace Kempinski Hotel,First Settelment,New Cairo",resturantType:"Restaurant Type : Italian  Restaurant ",
           reviews:[...this.reviews], image:"../../../assets/images/Lucca.jpg",rating:4,fkCityId:1,fkCountryId:3,tag:'resturant'},
           
           {id:5,name:"Asmak",address:"Address : Concord Plaza Mall | Tesseen street ",resturantType:"Restaurant Type : SeaFood Restaurant",
           reviews:[...this.reviews], image:"../../../assets/images/Asmak.jpg",rating:4,fkCityId:1,fkCountryId:3,tag:'resturant'},
          
           {id:6,name:"Pizza Bar",address:"Address : Heliopolis Tower,Cairo ",resturantType:"Restaurant Type : Pizza ",
           reviews:[...this.reviews], image:"../../../assets/images/Pizza Bar.jpg",rating:3,fkCityId:1,fkCountryId:3,tag:'resturant'},
           
           {id:7,name:"Cilantro",address:"Address : 126 Othman Ibn Affan Street ",resturantType:"Restaurant Type : Cafe ",
           reviews:[...this.reviews], image:"../../../assets/images/Cilantro.jpg",rating:3.5,fkCityId:1,fkCountryId:3,tag:'resturant'},
           
           {id:8,name:"Giannini's New York",address:"Address : Sheraton Cairo Hotel & Casino ",resturantType:"Restaurant Type :Italian food ",
           reviews:[...this.reviews], image:"../../../assets/images/giannini.jpg",rating:3.5,fkCityId:1,fkCountryId:3,tag:'resturant'},
           
           {id:9,name:"Ibn Hamido",address:"Address : 200 Port Said street",resturantType:"Restaurant Type :SeaFood Restaurant ",
           reviews:[...this.reviews], image:"../../../assets/images/Ibn Hamido.jpg",rating:5,fkCityId:1,fkCountryId:3,tag:'resturant'},
           
           {id:10,name:"Pizza Hut",address:"Address : 9 B Abou El Feda Street ",resturantType:"Restaurant Type :Pizza ",
           reviews:[...this.reviews], image:"../../../assets/images/Pizza Hut.jpg",rating:4.5,fkCityId:1,fkCountryId:3,tag:'resturant'},
           
           {id:11,name:"Maestro ",address:"Address : 11511 Omar Ibn El Khattab st. Heliopolis ",resturantType:"Restaurant Type : Italian Restaurant ",
           reviews:[...this.reviews], image:"../../../assets/images/maestro.jpg",rating:5,fkCityId:1,fkCountryId:3,tag:'resturant'},
           
           {id:12,name:"The Smokery",address:"Address : Katamya Heights | New Cairo - 5th District ",resturantType:"Restaurant Type : SeaFood Restaurant",
           reviews:[...this.reviews], image:"../../../assets/images/The Smokery.jpg",rating:4,fkCityId:1,fkCountryId:3,tag:'resturant'},

           {id:13,name:"Arigato",address:"Address : Legnda Mall, Sheikh Zayed,6 October City ",resturantType:"Restaurant Type : Sushi Restaurant",
           reviews:[...this.reviews], image:"../../../assets/images/arigato.jpg",rating:4,fkCityId:1,fkCountryId:3,tag:'resturant'},

           {id:14,name:"Mori Sushi",address:"Address :30 El-Mohandes Mohammed Hasan Helmy, Gazirat Mit Oqbah, Agouza, ",resturantType:"Restaurant Type : Sushi Restaurant",
           reviews:[...this.reviews], image:"../../../assets/images/MoriSushi.jpg",rating:5,fkCityId:1,fkCountryId:3,tag:'resturant'},
           
           {id:15,name:"Casa Mia",address:"Address : Sultan Gardens Resort | Shark's Bay, Sharm El Sheikh ",resturantType:"Restaurant Type : italian Restaurant",
           reviews:[...this.reviews], image:"../../../assets/images/CasaMia.jpg",rating:4,fkCityId:2,fkCountryId:3,tag:'resturant'},

           {id:16,name:"Da Mauro 'Solo Pasta&Pizza' ",address:"Address : El-Salam | Ras Kenedy 5, Sharm El Sheikh ",resturantType:"Restaurant Type : italian Restaurant",
           reviews:[...this.reviews], image:"../../../assets/images/Da Mauro.jpg",rating:3,fkCityId:2,fkCountryId:3,tag:'resturant'},

           {id:17,name:"Farsha Cafe",address:"Address : Om El Said Hill, Sharm El Sheikh ",resturantType:"Restaurant Type : Cafe",
           reviews:[...this.reviews], image:"../../../assets/images/FarshaCafe.jpg",rating:5,fkCityId:2,fkCountryId:3,tag:'resturant'},

           {id:18,name:"La Terrazza",address:"Address : El Salam Road | NABQ Bay,Sharm El Sheikh ",resturantType:"Restaurant Type : Cafe",
           reviews:[...this.reviews], image:"../../../assets/images/LaTerrazza.jpg",rating:4.5,fkCityId:2,fkCountryId:3,tag:'resturant'},

           {id:19,name:"Reef Grill Restaurant ",address:"Address : 1 Four seasons Boluevard,Sharm El Sheikh ",resturantType:"Restaurant Type : Restaurant",
           reviews:[...this.reviews], image:"../../../assets/images/ReefGrillRestaurant.jpg",rating:4,fkCityId:2,fkCountryId:3,tag:'resturant'},

           {id:20,name:"The Palms Bar & Grill",address:"Address : 265 Shark's Bay, Sharm El Sheikh ",resturantType:"Restaurant Type : Restaurant",
           reviews:[...this.reviews], image:"../../../assets/images/ThePalmsBar.jpg",rating:5,fkCityId:2,fkCountryId:3,tag:'resturant'},

           {id:21,name:"El Masrien Grill Restaurant",address:"Address : Old Market, Sharm El Sheikh ",resturantType:"Restaurant Type : Restaurant",
           reviews:[...this.reviews], image:"../../../assets/images/ElMasrienGrill.jpg",rating:4.5,fkCityId:2,fkCountryId:3,tag:'resturant'},

           {id:22,name:"Pizza Hut",address:"Address :El Sultan Qabous St. Beside Hard Rock Cafe, Sharm El Sheikh  ",resturantType:"Restaurant Type : Pizza Restaurant",
           reviews:[...this.reviews], image:"../../../assets/images/Pizza Hut.jpg",rating:5,fkCityId:2,fkCountryId:3,tag:'resturant'},

           {id:23,name:"La Piazzetta",address:"Address :Coral Bay Village | Domina Coral Bay Hotel & Resort, Sharm El Sheikh  ",resturantType:"Restaurant Type : Restaurant",
           reviews:[...this.reviews], image:"../../../assets/images/LaPiazzetta.jpg",rating:5,fkCityId:2,fkCountryId:3,tag:'resturant'},

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
