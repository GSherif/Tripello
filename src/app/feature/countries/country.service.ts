import { Country } from '../../_models/country';
import { Injectable } from '@angular/core';
import { CityService } from '../cities/city.service';
import { City } from 'src/app/_models/city';
@Injectable()
export class CountryService {
    data: Country[];
    citis: City[];
    constructor(private cities: CityService) {
        this.data = [
            {
                id: 1, image: "../../assets/images/country-china.jpg", name: "China", description: "China, officially the People's Republic of China, is a country in East Asia and the world's most populous country, with a population of around 1.404 billion. Covering approximately 9,600,000 square kilometers, it is the third- or fourth-largest country by total area.",
                cities: [...this.cities.getByCountryId(1)], rating: 5, sliderImages: ["../../../assets/images/slider1-china.jpg", "../../../assets/images/slider2-china.jpg", "../../../assets/images/slider3-china.jpg"], tag: 'country',
            },
            {
                id: 2, image: "../../assets/images/country-greece.jpg", name: "Greece", description: "Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas. Influential in ancient times, it's often called the cradle of Western civilization. Athens, its capital, retains landmarks including the 5th-century B.C. Acropolis citadel with the Parthenon temple. Greece is also known for its beaches, from the black sands of Santorini to the party resorts of Mykonos.",
                cities: [...this.cities.getByCountryId(2)], rating: null, sliderImages: ["../../../assets/images/slider1-greece.jpg", "../../../assets/images/slider2-greece.jpg", "../../../assets/images/slider3-greece.jpg"], tag: 'country',
            },
            {
                id: 3, image: "../../assets/images/country-egypt.jpg", name: "Egypt", description: "Egypt is a country linking northeast Africa with the Middle East, dates to the time of the pharaohs. Millennia-old monuments sit along the fertile Nile River Valley, including Giza's colossal Pyramids and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple and Valley of the Kings tombs. The capital, Cairo, is home to Ottoman landmarks like Muhammad Ali Mosque and the Egyptian Museum, a trove of antiquities.",
                cities: [...this.cities.getByCountryId(3)], rating: null, sliderImages: ["../../../assets/images/slider1-egypt.jpg", "../../../assets/images/slider2-egypt.jpg", "../../../assets/images/slider3-egypt.jpg"], tag: 'country',
            },
            {
                id: 4, image: "../../assets/images/country-japan.jpg", name: "Japan", description: "Japan is an island country in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian continent and stretches from the Sea of Okhotsk in the north to the East China Sea and the Philippine Sea in the south.",
                cities: [...this.cities.getByCountryId(4)], rating: null, sliderImages: ["../../../assets/images/slider1-japan.jpg", "../../../assets/images/slider2-japan.jpg", "../../../assets/images/slider3-japan.jpg"], tag: 'country',
            },
            {
                id: 5, image: "../../assets/images/country-turkey.jpg", name: "Turkey", description: "Turkey is a nation straddling eastern Europe and western Asia with cultural connections to ancient Greek, Persian, Roman, Byzantine and Ottoman empires. Cosmopolitan Istanbul, on the Bosphorus Strait, is home to the iconic Hagia Sophia, with its soaring dome and Christian mosaics, the massive 17th-century Blue Mosque and the circa-1460 Topkapı Palace, former home of sultans. Ankara is Turkey’s modern capital.",
                cities: [...this.cities.getByCountryId(5)], rating: null, sliderImages: ["../../../assets/images/slider1-turkey.jpg", "../../../assets/images/slider2-turkey.jpg", "../../../assets/images/slider3-turkey.jpg"], tag: 'country',
            },
            {
                id: 6, image: "../../assets/images/country-lebanon.jpg", name: "Lebanon", description: "Lebanon, officially known as the Lebanese Republic, is a country in Western Asia. It is bordered by Syria to the north and east and Israel to the south, while Cyprus is west across the Mediterranean Sea.",
                cities: [...this.cities.getByCountryId(6)], rating: null, sliderImages: ["../../../assets/images/slider1-lebanon.jpg", "../../../assets/images/slider2-lebanon.jpg", "../../../assets/images/slider3-lebanon.jpg"], tag: 'country',
            }
        ]
    }
    // [
    //     { id: 1, name: "Cairo", image: "../../assets/images/city-cairo.jpg",
    //      description: "Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts. Nearby, Giza is the site of the iconic pyramids and Great Sphinx, dating to the 26th century BC. In Gezira Island’s leafy Zamalek district, 187m Cairo Tower affords panoramic city views.", 
    //      rating: null, hotels: null, activities: null, restaurants: null, destinations: null, fkCountryId: 3 },
    //    ], rating: null
    getAll(): Country[] {
        return this.data
    }

    getById(id: number): Country {
        return this.data.find(a => a.id === id)
    }

    add(country: Country) {
        country.id = this.data.length + 1;
        this.data.push(country);
    }

    update(country: Country) {
        const i = this.data.findIndex(a => a.id === country.id);
        this.data[i] = country;
    }

    delete(id: number) {
        const i = this.data.findIndex(a => a.id === id);
        this.data.splice(i, 1);
    }
    getCountriesByIds(ids: number[]): Country[] {

        var coutries: Country[] = [];

        for (let i = 0; i < ids.length; i++) {

            // console.log(this.getById(ids[i]))

            var country = this.getById(ids[i]);

            //  console.log(coutries);

            coutries.push(country);
            // console.log(coutries)
        }
        return coutries;


    }
}
