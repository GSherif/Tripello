import { City } from 'src/app/_models/city';

export class CityService {
    data: City[];
    constructor() {
        this.data = [
            { id: 1, name: "Cairo", image: "../../assets/images/city-cairo.jpg", description: "Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts. Nearby, Giza is the site of the iconic pyramids and Great Sphinx, dating to the 26th century BC. In Gezira Island’s leafy Zamalek district, 187m Cairo Tower affords panoramic city views.", rating: null, hotels: null, activities: null, restaurants: null, destinations: null, fkCountryId: 3 },
            { id: 2, name: "Tokyo", image: "../../assets/images/city-tokyo.jpg", description: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).", rating: null, hotels: null, activities: null, restaurants: null, destinations: null, fkCountryId: 4 },
            { id: 3, name: "Ankara", image: "../../assets/images/city-ankara.jpg", description: "Ankara, Turkey’s cosmopolitan capital, sits in the country’s central Anatolia region. It’s a center for the performing arts, home to the State Opera and Ballet, the Presidential Symphony Orchestra and several national theater companies. Overlooking the city is Anitkabir, the enormous hilltop mausoleum of Kemal Atatürk, modern Turkey’s first president, who declared Ankara the capital in 1923.", rating: null, hotels: null, activities: null, restaurants: null, destinations: null, fkCountryId: 5 },
            { id: 4, name: "Beirut", image: "../../assets/images/city-beirut.jpg", description: "Beirut is the capital and largest city of Lebanon. No recent population census has been conducted, but 2007 estimates ranged from slightly more than 1 million to 2.2 million as part of Greater Beirut.", rating: null, hotels: null, activities: null, restaurants: null, destinations: null, fkCountryId: 6 }
        ]
    }

    getAll(): City[] {
        return this.data;
    }

    getById(id: number): City {
        return this.data.find(c => c.id === id)
    }

    add(city: City) {
        city.id = this.data.length + 1;
        this.data.push(city);
    }

    update(city: City) {
        const i = this.data.findIndex(c => c.id === city.id);
        this.data[i] = city;
    }

    delete(id: number) {
        const i = this.data.findIndex(c => c.id === id);
        this.data.splice(i, 1);
    }

}