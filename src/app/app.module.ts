import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    CityListingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
