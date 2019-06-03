import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{CountryService} from './feature/countries/country.service';
import{CityService} from './feature/cities/city.service';
import{HotelService} from './feature/hotels/hotel.service';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import { CountriesComponent } from './feature/countries/countries.component';
import { CountryItemComponent } from './feature/countries/country-item/country-item.component';
import { CountryListingComponent } from './feature/countries/country-listing/country-listing.component';
import { CitiesComponent } from './feature/cities/cities.component';
import { CityItemComponent } from './feature/cities/city-item/city-item.component';
import { CityListingComponent } from './feature/cities/city-listing/city-listing.component';
import { DropdownComponent } from './feature/dropdown/dropdown.component';
import { MakeTripComponent } from './feature/trip/make-trip/make-trip.component';
import { HotelCardComponent } from './feature/hotels/hotel-card/hotel-card.component';
import { HotelCardListingComponent } from './feature/hotels/hotel-card-listing/hotel-card-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    CountriesComponent,
    CountryItemComponent,
    CountryListingComponent,
    CitiesComponent,
    CityItemComponent,
    CityListingComponent,
    DropdownComponent,
    MakeTripComponent,
    HotelCardComponent,
    HotelCardListingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CountryService,CityService,HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
