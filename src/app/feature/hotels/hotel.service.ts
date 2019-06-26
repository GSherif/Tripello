
import { HotelSurrounding } from 'src/app/_models/hotel-surrounding';
import { Hotel } from 'src/app/_models/hotel';
import { Review } from 'src/app/_models/review';
import { Injectable } from '@angular/core';
@Injectable()
export class HotelService {
    surrounds: HotelSurrounding[];
    dataa: Hotel[];
    reviews: Review[];
    constructor() {
        this.surrounds = [
            { id: 1, name: "Chilis", categoryName: "Restaurant", distance: 0.9, image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500", fkHotelId: 1 },
            { id: 2, name: "Chilis", categoryName: "Restaurant", distance: 0.7, image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500", fkHotelId: 1 },
            { id: 3, name: "Chilis", categoryName: "Restaurant", distance: 0.8, image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500", fkHotelId: 1 },
        ]
        this.reviews = [
            { id: 1, reviewerName: "Nathane Raynolda", comment: "Good location, close to the metro station.The bed was very comfortable and the room was nicely decorated.", rating: 5, reviewrtitle: "traveller,Blogger", image: "../../../assets/images/people-01-300x300.jpg" },
            { id: 2, reviewerName: "Justine-alexandra", comment: " The carpet was a little dirty.The shower door was broken and it was not closing properly.", rating: 2, reviewrtitle: "Vlogger", image: "https://r-ak.bstatic.com/xdata/images/xphoto/square64/62612233.jpg?k=7f629188b165164d02d78df4887617de05539d59082eb90dc2f379b8c66fc0c8&o=?t=2019-03-26 02:28:38" },
            { id: 3, reviewerName: "Monique", comment: "Very good location, small but quite compact there is everything needed. The bed is very comfy.", rating: 4, reviewrtitle: "Traveller", image: "https://lh6.googleusercontent.com/-OwTNCECrxC4/AAAAAAAAAAI/AAAAAAAAAkg/_FkeyRJ191M/photo.jpg64" },
        ]
        this.dataa = [
            {
                id: 1, name: "Mariote Hotel",address:"New Cairo City,11477 Cairo,Egypt" ,description: "First Settlement, Eastern Ring Road,New Cairo City,11477 Cairo,Egypt.... hotels Every thing was perfect! Excellent hotel we really enjoy it, great view above the nile, stuff very friendly and helpful", facilities: ["Parking", "Family rooms", "Airport shuttle"],
                advantages: null, reviews: [...this.reviews], image: "../../../assets/images/mariotte.jpg", rating: null, fkCityId: 1, fkCountryId: 3,
                surroundings: [...this.surrounds], reasons: ["Prices you can't beat!", "Manage your bookings online", "The staff speak English", "Booking is safe"],tag:'hotel'
            },
            
            {
                id: 2, name: "Hilton Pyramids Golf", address:"Dreamland, El Wahat Road, 6th Of October, Egypt",description: "One of our top picks in 6th Of October. Hilton Pyramids Golf offers warm hospitality within a fantastic Central 6th of October location; perfect for sightseeing, shopping or a business trip. With its classic accommodations and leisure and spa facilities.", facilities: ["Parking", "Family rooms", "Airport shuttle"],
                advantages: null, reviews: [...this.reviews], image: "../../../assets/images/HiltonGolf.jpg", rating: null, fkCityId: 1, fkCountryId: 3,
                surroundings: [...this.surrounds], reasons: ["Very Comfortable", "Manage your bookings online", "The staff So Freindly", "Booking is safe"],tag:'hotel'
            },
            
            {
                id: 3, name: "Ramses Hilton Hotel", address:"Second Settlement, Down Town,Giza City,7777 Cairo,Egypt",description: "Second Settlement, Down Town,Giza City,7777 Cairo,Egypt.... hotels Every thing was perfect! Excellent hotel we really enjoy it, great view above the nile, stuff very friendly and helpful", facilities: ["Parking", "Family rooms", "Airport shuttle"],
                advantages: null, reviews: [...this.reviews], image: "../../../assets/images/hilton.jpg", rating: null, fkCityId: 1, fkCountryId: 3,
                surroundings: [...this.surrounds], reasons: ["Close to Down Tone", "Very Cousy", "The staff So Freindly", "Booking is safe"],tag:'hotel'
            },
            
            {
                id: 4, name: "Nile Meridien Hotel", address:"20 Aisha Taimoria, Garden City, Garden City, Egypt",description: "Conveniently located in the Garden City district of Cairo, Nile Meridien Hotel is located 1.9 km from Tahrir Square, 2.6 km from The Egyptian Museum and 3.1 km from Cairo Tower. Among the facilities of this property are a restaurant, a 24-hour front desk and room service, along with free WiFi.", facilities: ["Free WiFi","Airport shuttle","Family rooms" ],
                advantages: null, reviews: [...this.reviews], image: "../../../assets/images/NileMeridienHotel.jpg", rating: null, fkCityId: 1, fkCountryId: 3,
                surroundings: [...this.surrounds], reasons: ["Prices you can't beat!","Manage your bookings online","The staff speaks English","Booking is safe"],tag:'hotel'
            },
            
            {
                id: 5, name: "The Nile Ritz-Carlton, Cairo", address:"1113 Corniche El Nil, 12344 Cairo, Egypt",description: "Located in the heart of Cairo lies the iconic Nile Ritz-Carlton Cairo, located between the Nile river, Tahrir square and adjacent to the Egyptian Museum. The hotel features panoramic views of the Nile corniche and only a stroll across to Qasr El Nil Bridge and Cairo Opera House.", facilities: ["Parking", "Family rooms", "spa"],
                advantages: null, reviews: [...this.reviews], image: "../../../assets/images/Nile Ritz.jpg", rating: null, fkCityId: 1, fkCountryId: 3,
                surroundings: [...this.surrounds], reasons: ["Very Comfortable", "Manage your bookings online", "The staff So Freindly", "Booking is safe"],tag:'hotel'
            },
            
            {
                id: 6, name: "Kempinski Nile Hotel", address:"Cornich El Nile, 12 Ahmed Ragheb Street, Garden City",description: "Kempinski Nile Hotel is 5 minutes’ walk from downtown Cairo and from the Egyptian Museum. Cairo International Airport is 16 mi away, and the Pyramids of Giza and the Cairo Citadel are 20 minutes away by car.", facilities: ["Parking", "Family rooms", "Airport shuttle"],
                advantages: null, reviews: [...this.reviews], image: "../../../assets/images/Kempinski.jpg", rating: null, fkCityId: 1, fkCountryId: 3,
                surroundings: [...this.surrounds], reasons: ["Prices you can't beat!","Manage your bookings online","The staff speaks English","Booking is safe"],tag:'hotel'
            },

            {
                id: 7, name: "Fairmont Nile City", address:"Corniche El Nile, Ramlet Beaulac, Cairo",description: "Fairmont Nile City is located just 15 mi from Cairo Int’l Airport and Cairo Museum is within 10 minutes drive away. Nile Towers Mall is footsteps away from the hotel.", facilities: ["Parking", "Family rooms", "Airport shuttle"],
                advantages: null, reviews: [...this.reviews], image: "../../../assets/images/fairmont.jpg", rating: null, fkCityId: 1, fkCountryId: 3,
                surroundings: [...this.surrounds], reasons: ["Prices you can't beat!","Manage your bookings online","The staff speaks English","Booking is safe"],tag:'hotel'
            },
            
            {
                id: 8, name: "Four Season Hotel", address:" Down Town,Giza City,7777 Cairo,Egypt",description: "Second Settlement, Down Town,Giza City,7777 Cairo,Egypt.... hotels Every thing was perfect! Excellent hotel we really enjoy it, great view above the nile, stuff very friendly and helpful", facilities: ["Parking", "Family rooms", "Airport shuttle"],
                advantages: null, reviews: [...this.reviews], image: "../../../assets/images/four-season.jpg", rating: null, fkCityId: 1, fkCountryId: 3,
                surroundings: [...this.surrounds], reasons: ["Very Comfortable", "Manage your bookings online", "The staff So Freindly", "Booking is safe"],tag:'hotel'
            },

            {
                id: 9, name: "The Guard Hotel", address:"El Saaqah st, from El Thawra st, Heliopolis, Cairo",description: "Located in the heart of Heliopolis, the hotel has 132 guest rooms and suites, an outdoor pool and barbecue facilities. The hotel also has a children's playground and sun terrace. Guests can enjoy meals in various restaurants and private parking is available on site.", facilities: ["Parking", "Family rooms", "Airport shuttle"],
                advantages: null, reviews: [...this.reviews], image: "../../../assets/images/The Guard Hotel.jpg", rating: null, fkCityId: 1, fkCountryId: 3,
                surroundings: [...this.surrounds], reasons: ["Prices you can't beat!","Manage your bookings online","The staff speaks English","Booking is safe"],tag:'hotel'
            },

            {
                id: 10, name: "Dusit Thani LakeView Cairo", address:"El Tesseen Street, Fifth Settlement, New Cairo City",description: "Set in a resort style,Dusit Thani has a green setting with waterfalls, lakes and a stream giving the place a unique feel.This stylish and contemporary 5-star hotel, located in New Cairo, offers luxurious accommodations.", facilities: ["Parking", "Family rooms", "Airport shuttle"],
                advantages: null, reviews: [...this.reviews], image: "../../../assets/images/Dusit Thani LakeView Cairo.png", rating: null, fkCityId: 1, fkCountryId: 3,
                surroundings: [...this.surrounds], reasons: ["Very Comfortable", "Manage your bookings online", "The staff So Freindly", "Booking is safe"],tag:'hotel'
            },

            {
                id: 11, name: "Novotel Cairo Airport", address:"Cairo Airport Road, Heliopolis",description: "Novotel Cairo Airport offers 2 outdoor pools in the landscaped garden. It is a 10-minute drive from the International Convention and Exhibition Center.", facilities: ["Parking", "Family rooms", "Airport shuttle"],
                advantages: null, reviews: [...this.reviews], image: "../../../assets/images/Novotel.jpg", rating: null, fkCityId: 1, fkCountryId: 3,
                surroundings: [...this.surrounds], reasons: ["Prices you can't beat!","Manage your bookings online","The staff speaks English","Booking is safe"],tag:'hotel'
            },

            {
                id: 12, name: " Holiday Inn Citystars", address:"Ali Rashed St.,Heliopolis, Nasr City,Cairo",description: "This modern, family-friendly hotel is located in the center of the Citystars business and just a 10-minute drive from Cairo International Airport. Holiday Inn City stars offers free WiFi in public areas.", facilities: ["Parking", "Family rooms", "Airport shuttle"],
                advantages: null, reviews: [...this.reviews], image: "../../../assets/images/HolidayInn.jpg", rating: null, fkCityId: 1, fkCountryId: 3,
                surroundings: [...this.surrounds], reasons: ["Very Comfortable", "Manage your bookings online", "The staff So Freindly", "Booking is safe"],tag:'hotel'
            },

            {
                id: 13, name: "Tropitel Naama Bay Hotel", address:"Naama Bay, 45214 Sharm El Sheikh, Egypt",description: "With 4 swimming pools, a 3-slides aqua park and a private beach, Tropitel Naama Bay is located in the heart of Naama Bay. It features a spa, fitness center and modern, spacious rooms.", facilities: ["Parking", "Family rooms", "Airport shuttle"],
                advantages: null, reviews: [...this.reviews], image: "../../../assets/images/Tropitel.jpg", rating: null, fkCityId: 2, fkCountryId: 3,
                surroundings: [...this.surrounds], reasons: ["Very Comfortable", "Manage your bookings online", "The staff So Freindly", "Booking is safe"],tag:'hotel'
            },

            {
                id: 14, name: "Coral Sea Aqua Club Resort", address:"Nabq Bay, Sharm El Sheikh, Egypt",description: "Coral Sea Aqua Club Resort in Sharm El Sheikh provides accommodations with a fitness center, a garden and a terrace. This property is located a short distance from attractions such as International Congress Center", facilities: ["Parking", "Family rooms", "Airport shuttle"],
                advantages: null, reviews: [...this.reviews], image: "../../../assets/images/CoralSea.jpg", rating: null, fkCityId: 2, fkCountryId: 3,
                surroundings: [...this.surrounds], reasons: ["Prices you can't beat!","Manage your bookings online","The staff speaks English","Booking is safe"],tag:'hotel'
            },

            {
                id: 15, name: "Reef Oasis Beach Resort ", address:"Marine Sports Street, Hadbet Um El Sied, 46619 Sharm El Sheikh, Egypt",description: "Featuring a landscaped pool area with 13 pools, this resort has air-conditioned rooms with balconies overlooking the Red Sea or the pools. It features a private beach and a tennis court.", facilities: ["Parking", "Family rooms", "Airport shuttle"],
                advantages: null, reviews: [...this.reviews], image: "../../../assets/images/reefOaisis.jpg", rating: null, fkCityId: 2, fkCountryId: 3,
                surroundings: [...this.surrounds], reasons: ["Very Comfortable", "Manage your bookings online", "The staff So Freindly", "Booking is safe"],tag:'hotel'
            },

            {
                id: 16, name: "Naama Blue Hotel", address:"King Abd Allah Street, Naama Bay, 11234 Sharm El Sheikh, Egypt",description: "Naama Blue Hotel is located at the southern end of Naama Bay, the main resort center of Sharm El Sheikh. The hotel enjoys a prime position just a few minutes stroll from the sandy beaches of Naama Bay and all the popular restaurants, clubs, bars & shops. It is also nicely set back against the hills slightly away from the hustle and bustle of the main street.", facilities: ["Parking", "Family rooms", "Airport shuttle"],
                advantages: null, reviews: [...this.reviews], image: "../../../assets/images/Naama Blue.jpg", rating: null, fkCityId: 2, fkCountryId: 3,
                surroundings: [...this.surrounds], reasons: ["Prices you can't beat!","Manage your bookings online","The staff speaks English","Booking is safe"],tag:'hotel'
            },

            {
                id: 17, name: "Sunrise Arabian Beach Resort", address:"Sharks Bay, Entrance of Convention Center, Sharm El Sheikh, Egypt",description: "Located along with its private beach in the famous area of Sharks Bay, the Sunrise Arabian Beach Resort is surrounded by gardens and offers a variety of facilities, including a spa. This property offers 6 a-la-carte restaurants. Free WiFi is available throughout the resort.", facilities: ["Parking", "Family rooms", "Airport shuttle"],
                advantages: null, reviews: [...this.reviews], image: "../../../assets/images/sunriseHotel.jpg", rating: null, fkCityId: 2, fkCountryId: 3,
                surroundings: [...this.surrounds], reasons: ["Very Comfortable", "Manage your bookings online", "The staff So Freindly", "Booking is safe"],tag:'hotel'
            },

            {
                id: 18, name: "Mövenpick Resort Sharm El Sheikh", address:"Naama Bay 46619 Box 106, 6019 Sharm El Sheikh, Egypt",description: "Featuring 5 private beaches, Mövenpick Resort’s luxury infinity pool is also a highlight. Air-conditioned rooms offer panoramic views of Naama Bay. It also features 4 restaurants, 4 bars and a café.", facilities: ["Parking", "Family rooms", "Airport shuttle"],
                advantages: null, reviews: [...this.reviews], image: "../../../assets/images/Mövenpick.jpg", rating: null, fkCityId: 2, fkCountryId: 3,
                surroundings: [...this.surrounds], reasons: ["Very Comfortable", "Manage your bookings online", "The staff So Freindly", "Booking is safe"],tag:'hotel'
            },

        ];

    }
    getAll(): Hotel[] {
        return this.dataa;
    }
    getHotelById(id: number): Hotel {
        // return this.dataa[id];
        return this.dataa.find(a=>a.id===id)
    }
    getHotelByCityId(cityid: number): Hotel[] {
        return this.dataa.filter(c => c.fkCityId === cityid);
    }


}
