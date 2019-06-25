
import { Activity } from 'src/app/_models/activity';
import { Review } from 'src/app/_models/review';

export class ActivityService {

    data: Activity[];
    reviews: Review[];
    constructor() {
        this.reviews = [
            { id: 1, reviewerName: "Nathane Raynolda", comment: "Good location, close to the metro station.The bed was very comfortable and the room was nicely decorated.", rating: 5, reviewrtitle: "traveller,Blogger", image: "../../../assets/images/people-03-300x300.jpg" },
            { id: 3, reviewerName: "Monique", comment: "Very good location, small but quite compact there is everything needed. The bed is very comfy.", rating: 4, reviewrtitle: "Traveller", image: "https://lh6.googleusercontent.com/-OwTNCECrxC4/AAAAAAAAAAI/AAAAAAAAAkg/_FkeyRJ191M/photo.jpg64" },
            { id: 2, reviewerName: "Justine-alexandra", comment: " The carpet was a little dirty.The shower door was broken and it was not closing properly.", rating: 2, reviewrtitle: "Vlogger", image: "../../../assets/images/people-01-300x300.jpg" },
        ]
        this.data = [
        //   cairo tours & activities

         {id:1,name:"Quad Bike Desert Safari around Giza Pyramids ",image:"../../../assets/images/quadBike.jpg",
         description:"Enjoy a short quad bike tour around the Giza Pyramids and experience the most exciting way to discover all the ancient wonders of Egypt. Get up-close to the Sphinx, visit the Valley Temple and see the Great Pyramids all on one tour.",
         address:"Cairo,Egypt",activityType:"Tours",rating:4,fkCityId:1,tag:'activity',reviews:[...this.reviews]},

         {id:2,name:"Saharina Adventure Club",image:"../../../assets/images/saharina.jpg",
         description:"Saharina Adventure Club believes that Egypt is far beyond the Pyramids of Giza or Sphinx, the North Coast or Sharm El Sheikh. ",
         address:"Cairo,Egypt",activityType:"Tours",rating:3,fkCityId:1,tag:'activity',reviews:[...this.reviews]},
         
         {id:3,name:"Pyramids Camel Ride",image:"../../../assets/images/camel.jpg",
         description:"We are a creative luxury desert camps & camel ride company",
         address:"44 Street | Nazlat Al Samman Street, Cairo 12557, Egypt",
         activityType:"Tours",rating:5,fkCityId:1,tag:'activity',reviews:[...this.reviews]},
    
         {id:4,name:"Pyramids Sound and Light Show with Private Transport",image:"../../../assets/images/sound&light.jpg",
          description:"2-hour Giza pyramids sound and light show experience in Cairo ,Enjoy a sound, light and music extravaganza at the Giza pyramids and Sphinx, Watch entranced as brilliant lights and lasers bathe the monuments in a rainbow of colors, See the pyramids, Sphinx and other relics cast with visual projections and laser-beam hieroglyphs, Hear the secrets of the pyramids and ancient Egypt as the Sphinx serves as the ‘storyteller’ ",
          address:"Cairo,Egypt",activityType:"Tours",rating:5,fkCityId:1,tag:'activity',reviews:[...this.reviews]},

          {id:5,name:"2-Hour Nile River Night Dinner Cruise from Cairo",image:"../../../assets/images/Nile River Night Dinner.jpg",
          description:"A cruise along the Nile River is a must for first-time visitors to Egypt and the famous river is even more spectacular by night. Set sail on this 2-hour evening cruise, tuck into a delicious buffet dinner on-board, and be entertained by live music, belly dancing, and a traditional Tanura show.",
          address:"Cairo,Egypt",activityType:"Tours",rating:5,fkCityId:1,tag:'activity',reviews:[...this.reviews]},
          
          {id:6,name:"The pharaoh Nile crystal Dinner Cruise ",image:"../../../assets/images/The pharaoh Nile crystal Dinner Cruise.jpg",
          description:"Unwind after a busy day of sightseeing on a dinner cruise along the Nile, with round-trip hotel transfer for a hassle-free experience. Allow your driver to handle navigation and timings, leaving you free to savor your meal, admire the Nile by moonlight, and be immersed in the program of after-dinner entertainment, including traditional dance performances.",
          address:"Cairo,Egypt",activityType:"Tours",rating:5,fkCityId:1,tag:'activity',reviews:[...this.reviews]},
         
          {id:7,name:"El Tannoura Show Egyptian Heritage Dance Troupe Cairo",image:"../../../assets/images/Tannoura.jpg",
          description:"An excellent value for the money, this outing features hotel pickup and drop-off and an evening of Egyptian folkloric music and entertainment at the stunning Wekalet el Ghouri Arts Center. Enjoy music from local Egyptian musicians and a dance performance that showcases the country’s rich heritage. Whirling Dervish dancers top off the night before heading back to your hotel.",
          address:"Cairo,Egypt",activityType:"Tours",rating:5,fkCityId:1,tag:'activity',reviews:[...this.reviews]},
         
          {id:8,name:"Escape Room Egypt",image:"../../../assets/images/Escape Room Egypt.jpg",
          description:"Escape Room is an interactive and intuitive real-life escape game. Locked in a room with a group of 2 to 6 people, participants have 60 minutes to solve challenging puzzles to escape the room.",
          address:"104 Omar Ibn El-Khattab Street| Cairo,Egypt",activityType:"Activities",rating:5,fkCityId:1,tag:'activity',reviews:[...this.reviews]},
         
          {id:9,name:"HintHunt Cairo",image:"../../../assets/images/HintHunt Cairo.jpg",
          description:"HintHunt took escape games to a new level by combining brain-twisting puzzles with inventive designs, technology and a touch of mystery! HintHunt is the place for you.",
          address:"The District Mall, El Nasr Road, In front of Wadi Degla Sheraton Club, Cairo, Egypt",activityType:"Activities",rating:5,fkCityId:1,tag:'activity',reviews:[...this.reviews]},
         
          {id:10,name:"Gravity Code",image:"../../../assets/images/Gravity Code.jpg",
          description:"Gravity Code is extremely fun for both kids and adults and the staff is super friendly. It includes an olympic trampoline similar to the one used by gymnasts, and an incredibly fun 1-on-1 basketball game called 'Cageball'.",
          address:"90 Avenue, 5th Settlement | Next To American Plaza,Cairo,Egypt",activityType:"Activities",rating:5,fkCityId:1,tag:'activity',reviews:[...this.reviews]},

          {id:11,name:"Sherlocked Egypt",image:"../../../assets/images/Sherlocked Egypt.jpg",
          description:"A 60 minute, live game for 3-5 people. Go on a quest through time and space, solving puzzles, challenges and mysteries.",
          address:"54 Mohi el Din abo el Ezz , Dokki, Cairo,Egypt",activityType:"Activities",rating:5,fkCityId:1,tag:'activity',reviews:[...this.reviews]},

          {id:12,name:"IBC - International Bowling Center",image:"../../../assets/images/IBC.jpg",
          description:"When you are in IBC you will enjoy playing bowling on a 24 lane center. There is variety of drinks and food.",
          address:"Salah Salem Road, Cairo,Egypt",activityType:"Activities",rating:5,fkCityId:1,tag:'activity',reviews:[...this.reviews]},

          {id:13,name:"ISim Egypt Flight Simulator Center",image:"../../../assets/images/ISim.jpg",
          description:"we're the first professional flight simulator in Egypt. Professional flight simulators are a training equipment that are used by airlines and flight schools to train real pilots and make them acquainted to the normal and abnormal procedures of a specific aircraft type before flying the real aircraft.",
          address:"City Stars Mall, Cairo,Egypt",activityType:"Activities",rating:5,fkCityId:1,tag:'activity',reviews:[...this.reviews]},

          {id:14,name:"Verticality Zorbing Park",image:"../../../assets/images/zorbing.jpg",
          description:"The first downhill Zorbing park in the Middle East is in Cairo the heart of Maadi right on Victoria Square. Verticality TGS offers Gyro (harnessed), Hydro (water) and the Indiana Jones group Zorbing rides.",
          address:"Victoria Square | The Field Sports Community Club",activityType:"Activities",rating:5,fkCityId:1,tag:'activity',reviews:[...this.reviews]},

          {id:15,name:"Ski Egypt",image:"../../../assets/images/skiEgypt.jpg",
          description:"Africa’s first indoor ski resort, Ski Egypt’s Snow Park is a snow-filled winter wonderland. At -2 degrees, it is an unforgettable experience for the whole family, with a range of unmatchable activities.All you need to do is to put on a heavy jacket (we provide that), strap on your snow boots (we give you these too!), and come with an open mind to experience a snow cavern filled with interactive experiences – from the thrilling Zorb Ball, or our very own indulging Polar Express Train – to the adrenaline-charged 30 meter long Tube Run.",
          address:"Mall of Aribia | Cairo,Egypt",activityType:"Activities",rating:5,fkCityId:1,tag:'activity',reviews:[...this.reviews]},

        //   Sharm el sheikh tours & activities

        {id:16,name:"Sharm Wonders - Day Tours",image:"../../../assets/images/sharm-wonders-day-tours.jpg",
        description:"We are a British-Egyptian travel company specializing in travel consultancy, transfers, day excursions and tours in Sharm El Sheikh, Hurghada, Cairo, Luxor and beyond.",
        address:"Sharm El Sheikh, Egypt",activityType:"Tours",rating:5,fkCityId:2,tag:'activity',reviews:[...this.reviews]},

        {id:17,name:"Red Sea Elite Diving",image:"../../../assets/images/redSeaElite.jpg",
        description:"Elite Diving is a British family Owned and managed dive center in Sharm El Sheikh Red Sea that offers PADI & BSAC courses for beginners and divers wanting to advance their training and experience. They also provide diving packages for qualified divers of different diving grades and ability. They go under the name of Divers United in resort. ",
        address:"Sharm El Sheikh, Egypt",activityType:"Tours",rating:5,fkCityId:2,tag:'activity',reviews:[...this.reviews]},

        {id:18,name:"El Sherif Safari",image:"../../../assets/images/El Sherif Safari.jpg",
        description:"Our company is a highly qualified team whose main aim is the organization of comfortable and safe trips. Significant work experience, professionalism of personnel, accuracy and speed, fulfillment of contractual obligations and absolute understanding of our clients’ needs are our main principles of work.",
        address:"Sharm El Sheikh, Egypt",activityType:"Tours",rating:5,fkCityId:2,tag:'activity',reviews:[...this.reviews]},

        {id:19,name:"Dive Club Italiano",image:"../../../assets/images/Dive Club Italiano.jpg",
        description:"Immersioni con Guida, Free bus-service Hotel/Porto 2 way - PADI Diving Course - Dive and PADI Courses all the level - PADI Advanced Course - PADI Specialty Nitrox, Deep, Sidemount, Wreck, Night, Digital Underwater Photo, Navigation, Dry Sute.",
        address:"Sharm El Sheikh, Egypt",activityType:"Tours",rating:5,fkCityId:2,tag:'activity',reviews:[...this.reviews]},

        {id:20,name:"Al Mustafa Mosque",image:"../../../assets/images/Al Mustafa Mosque.jpg",
        description:"If you are visiting Sharm El Sheikh, then this mosque is a must see! It's located in the heart of the old market, very clean and beautiful. It's a huge mosque and you can take amazing pictures there.",
        address:"Al Rewaysat Rd, Sharm El Sheikh, Egypt",activityType:"Tours",rating:5,fkCityId:2,tag:'activity',reviews:[...this.reviews]},

        {id:21,name:"Trip to Tiran Island by boat",image:"../../../assets/images/Tiran Island.jpg",
        description:"You will be transferred from your hotel in Sharm el Sheikh to the port. From there, take a boat to Tiran Island (the island will not be entered as it is part of Saudi Arabia). During the boat trip you will have the opportunity to do two snorkeling trips along the coast of Sharm el Sheikh in attractive places with a great underwater world. Another snorkeling takes place near the Tiran island. Admire the colorful underwater world with its diverse fish and corals. On board you get a delicious lunch, soft drinks are also included in the price. Upon arrival at the port, you will be transferred back to your hotel by air-conditioned transfer bus.",
        address:"Tiran Island, Sharm El Sheikh, South Sinai, Red Sea and Sinai",activityType:"Activities",rating:5,fkCityId:2,tag:'activity',reviews:[...this.reviews]},

        {id:22,name:"Ras Mohamed Red Sea Cruise and Snorkeling",image:"../../../assets/images/RasMohamed.jpg",
        description:"Witness one of the world’s most beautiful underwater sites on a cruise day trip to Ras Mohammed National Park from Sharm el Sheikh. Admire the scenery as you sail to the protected Ras Mohammed marine reserve, famous for its glorious coral reefs, marine life and crystal-clear waters. On arrival, use your own snorkeling gear or the supplied equipment to explore the spectacular undersea world, swim in the warm waters or simply sunbathe on deck — your choice! Your cruise includes an onboard buffet lunch and complimentary sodas and mineral water throughout.",
        address:"Sharm El Sheikh, Egypt",activityType:"Activities",rating:5,fkCityId:2,tag:'activity',reviews:[...this.reviews]},

        {id:23,name:"Parasailing",image:"../../../assets/images/Parasailing.jpg",
        description:"Parasailing Tour from Sharm el sheikh, you will spend 20 minutes on the speed boat in water.",
        address:"Sharm El Sheikh, Egypt",activityType:"Activities",rating:5,fkCityId:2,tag:'activity',reviews:[...this.reviews]},

        {id:24,name:"7x1Mega Safari Sharm El Sheikh",image:"../../../assets/images/7x1Mega Safari Sharm El Sheikh.jpg",
        description:"7x1Mega Safari with 7 different activities from Sharm el Sheikh: enjoy a full day's program in Sharm el Sheikh with a Bedouin lunch, a camel ride, paragliding",
        address:"Sharm El Sheikh, Egypt",activityType:"Activities",rating:5,fkCityId:2,tag:'activity',reviews:[...this.reviews]},

        {id:25,name:"Dinner cruise by Boat In Sharm El Sheikh",image:"../../../assets/images/DinnerBoat.jpg",
        description:"This one of the finest relaxing trip in sharm el sheikh, It’s called dinner cruise with show with sea food dinner and soft drinks.",
        address:"Sharm El Sheikh, Egypt",activityType:"Activities",rating:5,fkCityId:2,tag:'activity',reviews:[...this.reviews]},


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