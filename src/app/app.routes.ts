import { Routes } from '@angular/router';
import {HomeFlightsComponent} from './pages/home-flights/home-flights.component';
import {HomeHotelsComponent} from './pages/home-hotels/home-hotels.component';
import {HomeCarsComponent} from './pages/home-cars/home-cars.component';
import {HotelSearchComponent} from './pages/hotel-search/hotel-search.component';
import {CarSearchComponent} from './pages/car-search/car-search.component';
import {FlightSearchComponent} from './pages/flight-search/flight-search.component';
import {RegisterComponent} from './pages/register/register.component';
import {SupportComponent} from './pages/support/support.component';
import {FrecuencyQuestionsComponent} from './pages/frecuency-questions/frecuency-questions.component';
import {InformationComponent} from './pages/information/information.component';
import {PrivacyComponent} from './pages/privacy/privacy.component';
import {TermsAndConditionsComponent} from './pages/terms-and-conditions/terms-and-conditions.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {LoginComponent} from './pages/login/login.component';


export const routes: Routes = [
  {path: 'home-flights', component: HomeFlightsComponent },
  {path: 'home-hotels', component: HomeHotelsComponent },
  {path: 'home-cars', component: HomeCarsComponent },
  {path: 'hotel-search', component: HotelSearchComponent },
  {path: 'car-search', component: CarSearchComponent },
  {path: 'flight-search', component: FlightSearchComponent },
  {path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path: 'support', component: SupportComponent },
  {path: 'frequency-questions', component: FrecuencyQuestionsComponent },
  {path: 'information', component: InformationComponent },
  {path: 'privacy', component: PrivacyComponent },
  {path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  {path: '', component: HomeHotelsComponent }
];
