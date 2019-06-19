import { City } from 'src/app/_models/city';
import { Injectable } from '@angular/core';
@Injectable()
export class CityService {
  
    data: City[];
    constructor() {
        this.data = [
            { id: 1, name: "Cairo", image: "../../assets/images/city-cairo.jpg", description: "Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts. Nearby, Giza is the site of the iconic pyramids and Great Sphinx, dating to the 26th century BC. In Gezira Island’s leafy Zamalek district, 187m Cairo Tower affords panoramic city views.", rating: null, hotels: null, activities: null, restaurants: null, destinations: null, fkCountryId: 3 },
            { id: 2, name: "Tokyo", image: "../../assets/images/city-tokyo.jpg", description: "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).", rating: null, hotels: null, activities: null, restaurants: null, destinations: null, fkCountryId: 4 },
            { id: 3, name: "Ankara", image: "../../assets/images/city-ankara.jpg", description: "Ankara, Turkey’s cosmopolitan capital, sits in the country’s central Anatolia region. It’s a center for the performing arts, home to the State Opera and Ballet, the Presidential Symphony Orchestra and several national theater companies. Overlooking the city is Anitkabir, the enormous hilltop mausoleum of Kemal Atatürk, modern Turkey’s first president, who declared Ankara the capital in 1923.", rating: null, hotels: null, activities: null, restaurants: null, destinations: null, fkCountryId: 5 },
            { id: 4, name: "Beirut", image: "../../assets/images/city-beirut.jpg", description: "Beirut is the capital and largest city of Lebanon. No recent population census has been conducted, but 2007 estimates ranged from slightly more than 1 million to 2.2 million as part of Greater Beirut.", rating: null, hotels: null, activities: null, restaurants: null, destinations: null, fkCountryId: 6 },
            { id: 5, name: "Shanghai", image: "../../assets/images/city-shanghai.jpg", description: "Shanghai, on China’s central coast, is the country's biggest city and a global financial hub. Its heart is the Bund, a famed waterfront promenade lined with colonial-era buildings. Across the Huangpu River rises the Pudong district’s futuristic skyline, including 632m Shanghai Tower and the Oriental Pearl TV Tower, with distinctive pink spheres. Sprawling Yu Garden has traditional pavilions, towers and ponds.", rating: null, hotels: null, activities: null, restaurants: null, destinations: null, fkCountryId: 1 },
            { id: 6, name: "Athens", image: "../../assets/images/city-athens.jpg", description: "Athens is the capital of Greece. It was also at the heart of Ancient Greece, a powerful civilization and empire. The city is still dominated by 5th-century BC landmarks, including the Acropolis, a hilltop citadel topped with ancient buildings like the colonnaded Parthenon temple. The Acropolis Museum, along with the National Archaeological Museum, preserves sculptures, vases, jewelry and more from Ancient Greece.", rating: null, hotels: null, activities: null, restaurants: null, destinations: null, fkCountryId: 2 },
            { id: 7, name: "Luxor", image: "../../assets/images/luxur-city.jpg", description: "Luxor, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts. Nearby, Giza is the site of the iconic pyramids and Great Sphinx, dating to the 26th century BC. In Gezira Island’s leafy Zamalek district, 187m Cairo Tower affords panoramic city views.", rating: null, hotels: null, activities: null, restaurants: null, destinations: null, fkCountryId: 3 }
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
    getByCountryId(id: number) :City[] {
        console.log(this.data.filter(a=>a.fkCountryId===id))
        return this.data.filter(a=>a.fkCountryId===id);
    }


}