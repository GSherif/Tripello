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
import { TripService } from './feature/trip/trip.service';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HotelListingComponent } from './feature/hotels/hotel-listing/hotel-listing.component';
import { HotelDetailsListingComponent } from './feature/hotels/hotel-listing/hotel-details-listing/hotel-details-listing.component';
import { HotelDetailsCardComponent } from './feature/hotels/hotel-listing/hotel-details-card/hotel-details-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './_services/user.service';
import { RestaurantListingComponent } from './feature/restaurant/restaurant-listing/restaurant-listing.component';
import { RestaurantDetailsListingComponent } from './feature/restaurant/restaurant-listing/restaurant-details-listing/restaurant-details-listing.component';
import { RestaurantDetailsCardComponent } from './feature/restaurant/restaurant-listing/restaurant-details-card/restaurant-details-card.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ActivitiesComponent } from './feature/activities/activities.component';
import { TripCardListingComponent } from './feature/trip/trip-card-listing/trip-card-listing.component';
import { TripCardComponent } from './feature/trip/trip-card/trip-card.component';
import { FormFilterComponent } from './feature/activities/form-filter/form-filter.component';
import { FormCityFilterComponent } from './feature/cities/form-city-filter/form-city-filter.component';
import { CityActivityDetailsCardListingComponent } from './feature/details-listing/city-activity-details-card-listing/city-activity-details-card-listing.component'
import { CityActivityDetailsCardComponent } from './feature/details-listing/city-activity-details-card/city-activity-details-card.component';
import { from } from 'rxjs';
import { ActivityService } from './feature/activities/activity.service';
import { AboutComponent } from './core/about/about.component';
import { PreviewTripComponent } from './feature/trip/preview-trip/preview-trip.component';
import { PreviewCardComponent } from './feature/trip/preview-card/preview-card.component';
import { PreviewCardListingComponent } from './feature/trip/preview-card-listing/preview-card-listing.component';
import { ActivityDetailsComponent } from './feature/activities/activity-details/activity-details.component';
import { ActivityDetailsSliderComponent } from './feature/activities/activity-details/activity-details-slider/activity-details-slider.component';
import { ActivityDetailsReviewCardComponent } from './feature/activities/activity-details/activity-details-review-card/activity-details-review-card.component';
import { ActivityDetailsReviewCardListingComponent } from './feature/activities/activity-details/activity-details-review-card-listing/activity-details-review-card-listing.component';
import { CityDetailsHotelCardComponent } from './feature/hotels/city-details-hotel-card/city-details-hotel-card.component';
import { CityDetailsHotelCardListingComponent } from './feature/hotels/city-details-hotel-card-listing/city-details-hotel-card-listing.component';
import { CityDetailsResturantCardListingComponent } from './feature/restaurant/city-details-resturant-card-listing/city-details-resturant-card-listing.component';
import { CityDetailsResturantCardComponent } from './feature/restaurant/city-details-resturant-card/city-details-resturant-card.component';
import { CityDetailsActivityCardComponent } from './feature/activities/city-details-activity-card/city-details-activity-card.component';
import { CityDetailsActivityCardListingComponent } from './feature/activities/city-details-activity-card-listing/city-details-activity-card-listing.component';






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
    HotelListingComponent,
    HotelDetailsListingComponent,
    HotelDetailsCardComponent,
    RestaurantListingComponent,
    RestaurantDetailsListingComponent,
    RestaurantDetailsCardComponent,
    ActivitiesComponent,
    TripCardListingComponent,
    TripCardComponent,
    FormFilterComponent,
    FormCityFilterComponent,
    CityActivityDetailsCardComponent,
    CityActivityDetailsCardListingComponent,
    AboutComponent,
    PreviewTripComponent,
    PreviewCardComponent,
    PreviewCardListingComponent,
    ActivityDetailsComponent,
    ActivityDetailsSliderComponent,
    ActivityDetailsReviewCardComponent,
    ActivityDetailsReviewCardListingComponent,
   
    CityDetailsHotelCardComponent,
    CityDetailsHotelCardListingComponent,
    CityDetailsResturantCardListingComponent,
    CityDetailsResturantCardComponent,
    CityDetailsActivityCardComponent,
    CityDetailsActivityCardListingComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'countries', component: CountryListingComponent },
      { path: 'countries/:id', component: CountriesComponent },
      { path: 'cities/:id', component: CitiesComponent },
      { path: 'countries/:id/cities/:id', component: CitiesComponent },
      { path: 'maketrip', component: MakeTripComponent },
      { path: 'maketrip/preview', component: PreviewTripComponent },
      { path: 'restaurants', component: RestaurantListingComponent },
      { path: 'restaurants/:id', component:  RestaurantComponent },
      { path: 'activities', component: ActivitiesComponent },
      { path: 'activities/:id', component: ActivityDetailsComponent},
      { path: 'hotels', component: HotelListingComponent },
      { path: 'hotels/:id', component: HotelsComponent },
      // { path: 'countries/:id/cities/:id/hotels/:id', component: HotelsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contactus', component: ContactUsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]),
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [CountryService, CityService, HotelService, ResturantService, ActivityService, TripService, UserService],

  bootstrap: [AppComponent]
})
export class AppModule { }
