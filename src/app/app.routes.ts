import { Routes } from '@angular/router';
import {HomeFlightsComponent} from './pages/home-flights/home-flights.component';
import {HomeHotelsComponent} from './pages/home-hotels/home-hotels.component';
import {HomeCarsComponent} from './pages/home-cars/home-cars.component';


export const routes: Routes = [
  {path: 'home-flights', component: HomeFlightsComponent },
  {path: 'home-hotels', component: HomeHotelsComponent },
  {path: 'home-cars', component: HomeCarsComponent },
  {path: '', component: HomeHotelsComponent }
];
