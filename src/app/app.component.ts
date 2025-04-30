import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FlightComponent} from './components/flight/flight.component';
import {FilterComponent} from './components/filter/filter.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FlightComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jetsetgowithangular';
}
