
import { Activity } from 'src/app/_models/activity';

export class ActivityService {

    data: Activity[];
    constructor() {

        this.data = [
         {id:1,name:"Quad Bike Desert Safari around Giza Pyramids ",image:"../../../assets/images/quadBike.jpg",
         description:"Enjoy a short quad bike tour around the Giza Pyramids and experience the most exciting way to discover all the ancient wonders of Egypt. Get up-close to the Sphinx, visit the Valley Temple and see the Great Pyramids all on one tour.",
         address:"Cairo,Egypt",activityType:"Safari",rating:4,fkCityId:1},

         {id:2,name:"Saharina Adventure Club",image:"../../../assets/images/saharina.jpg",
         description:"Saharina Adventure Club believes that Egypt is far beyond the Pyramids of Giza or Sphinx, the North Coast or Sharm El Sheikh. ",
         address:"Cairo,Egypt",activityType:"Safari",rating:3,fkCityId:1},
         
         {id:3,name:"Pyramids Camel Ride",image:"../../../assets/images/camel.jpg",
         description:"We are a creative luxury desert camps & camel ride company",
         address:"44 Street | Nazlat Al Samman Street, Cairo 12557, Egypt",
         activityType:"Safari",rating:5,fkCityId:1},
        
         {id:4,name:"Egipto Travel",image:"https://media-cdn.tripadvisor.com/media/photo-i/14/e7/fc/0c/caption.jpg",
         description:"Welcome to our Pharaonic land, I previously guided individuals and groups from Spain and South America throughout Egypt: Cairo, Giza, Luxor, Aswan and Alexandria. I can organize daily tours in Egypt or tour packages include accommodation and tours with reasonable prices",
         address:"Cairo,Egypt",activityType:"Safari",rating:3.5,fkCityId:1},
         
         {id:5,name:"Full-Day Bicycle Tour",image:"../../../assets/images/bicycle1.jpeg",
         description:"Duration 4.5 hours,Printed or mobile voucher accepted,Instant confirmation",
         address:"Tokyo,Japan",activityType:"Cycling",rating:3,fkCityId:2},
         
         {id:6,name:"Cycling and Cruising and Cruising Tour",image:"../../../assets/images/bicyle2.jpg",
         description:"Enjoy both cycling and cruising in the bay area in Tokyo. It's possible to see fantastic night view from your bicycle and the ship. Duration 4 hours,Printed or mobile voucher accepted",
         address:"Tokyo,Japan",activityType:"Cycling",rating:4,fkCityId:2},
         
         {id:7,name:"Calm Waters of Dog River",image:"../../../assets/images/river2.jpg",
         description:`Risks in whitewater rafting can result from both environmental dangers and from improper behavior. Certain features on rivers in Lebanon and elsewhere are inherently unsafe and have remained consistently so despite the passage of time. These would include "keeper hydraulics",`,
         address:"Beirut,Lebanon",activityType:"Canoeing",rating:5,fkCityId:4},
         
         {id:8,name:"Rafting & Accommodation in Al Assi River",image:"../../../assets/images/river.jpg",
         description:"Unlike other rivers, Al-Assi offers enough water depth all year round. This package includes an overnight and gets you to a camp in Al-Zwaytineh village of Hermel, located at 150 km from Beirut (2h30). It is run by professionals from various rafting clubs of Lebanon.",
         address:"Beirut,Lebanon",activityType:"Canoeing",rating:4,fkCityId:4},
         
         {id:9,name:"Sledding through crisp air and frozen forests",image:"../../../assets/images/dogSlade.png",
         description:"Duration 2.5 hours including transfers (husky drive approx. 1h 15mins),Meeting Point The tour starts from Koskikatu 1, 96200 Rovaniemi.Please report at the meeting point 45 minutes before the start time. This is mandatory to allow time for pre-departure briefing.",
         address:"Athens,Greece",activityType:"Dog sledding",rating:4.5,fkCityId:6},
         
         {id:10,name:"Mushing and Dog Sledding Experience",image:"../../../assets/images/dogSlade2.jpg",
         description:"Duration 3 hours,Printed or mobile voucher accepted,Instant confirmation,Easy cancellation",
         address:"Athens,Greece",activityType:"Dog sledding",rating:2,fkCityId:6},
         
        // 
         
        ]
    }
    
    getAll(): Activity[] {
        return this.data;
    }

    getById(id: number): Activity {
        return this.data.find(c => c.id === id)
    }

    add(activity: Activity) {
        activity.id = this.data.length + 1;
        this.data.push(activity);
    }

    update(activity: Activity) {
        const i = this.data.findIndex(c => c.id === activity.id);
        this.data[i] = activity;
    }

    delete(id: number) {
        const i = this.data.findIndex(c => c.id === id);
        this.data.splice(i, 1);
    }
   
    getActivityByCityId(cityid: number): Activity[] {
        return this.data.filter(c => c.fkCityId === cityid);
    }
    getActivityByType(type: string): Activity[] {
        return this.data.filter(c => c.activityType === type);
    }


}