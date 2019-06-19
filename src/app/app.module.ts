import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountryService } from './feature/countries/country.service';
import { CityService } from './feature/cities/city.service';
import { HotelService } from './feature/hotels/hotel.service';
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
import { HotelCardListingComponent } from './feature/hotels/hotel-surrounding-listing/hotel-card-listing.component';
import { RatingComponent } from './feature/rating/rating.component';
import { RatingItemComponent } from './feature/rating/rating-item/rating-item.component';
import { RatingListingComponent } from './feature/rating/rating-listing/rating-listing.component';
import { RestaurantComponent } from './feature/restaurant/restaurant.component';
import { HotelsComponent } from './feature/hotels/hotels.component';
import { HotelFacilitiesListingComponent } from './feature/hotels/hotel-facilities-listing/hotel-facilities-listing.component';
import { HotelFacilitiesCardComponent } from './feature/hotels/hotel-facilities-card/hotel-facilities-card.component';
import { HotelReasonsListComponent } from './feature/hotels/hotel-reasons-list/hotel-reasons-list.component';
import { ReviewsListingComponent } from './feature/hotels/reviews-listing/reviews-listing.component';
import { ReviewsItemComponent } from './feature/hotels/reviews-item/reviews-item.component';
import { AddReviewComponent } from './feature/hotels/add-review/add-review.component';
import { HotelSliderComponent } from './feature/hotels/hotel-slider/hotel-slider.component';
import { ResturantService } from './feature/restaurant/resturant.service';
import { ResturantSliderComponent } from './feature/restaurant/resturant-slider/resturant-slider.component';
import { HomeComponent } from './core/home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TripService } from './feature/trip/make-trip/trip.service';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { CityDetailsListingComponent } from './feature/cities/city-details-listing/city-details-listing.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HotelListingComponent } from './feature/hotels/hotel-listing/hotel-listing.component';
import { HotelDetailsListingComponent } from './feature/hotels/hotel-listing/hotel-details-listing/hotel-details-listing.component';
import { HotelDetailsCardComponent } from './feature/hotels/hotel-listing/hotel-details-card/hotel-details-card.component';
import { ReactiveFormsModule} from '@angular/forms';


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
    HotelCardListingComponent,
    RatingComponent,
    RatingItemComponent,
    RatingListingComponent,
    RestaurantComponent,
    HotelsComponent,
    HotelFacilitiesListingComponent,
    HotelFacilitiesCardComponent,
    HotelReasonsListComponent,
    ReviewsListingComponent,
    ReviewsItemComponent,
    AddReviewComponent,
    HotelSliderComponent,
    ResturantSliderComponent,
    HomeComponent,

    ContactUsComponent,

    CityDetailsListingComponent,
    HotelListingComponent,
    HotelDetailsListingComponent,
    HotelDetailsCardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'countries', component: CountriesComponent },
      { path: 'maketrip', component: MakeTripComponent },
      { path: 'contactus', component: ContactUsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]),
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [CountryService, CityService, HotelService, ResturantService, TripService],

  bootstrap: [AppComponent]
})
export class AppModule { }
