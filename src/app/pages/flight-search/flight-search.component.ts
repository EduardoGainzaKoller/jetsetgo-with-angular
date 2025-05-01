import {Component, inject} from '@angular/core';
import {CarComponent} from "../../components/car/car.component";
import {FilterComponent} from "../../components/filter/filter.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";
import {NgForOf} from "@angular/common";
import {FlightComponent} from '../../components/flight/flight.component';
import {SearchFlightBarComponent} from '../../components/search-flight-bar/search-flight-bar.component';
import {Flight} from '../../models/flight';
import {FlightsService} from '../../services/flights.service';

@Component({
  selector: 'app-flight-search',
  imports: [
    FilterComponent,
    FooterComponent,
    HeaderComponent,
    NgForOf,
    FlightComponent,
    SearchFlightBarComponent
  ],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css'
})
export class FlightSearchComponent {
  flights: Flight[] = [];
  flightService: FlightsService = inject(FlightsService);

  constructor() {}

  ngOnInit() {
    this.flightService.getAllFlights().subscribe(flights => this.flights = flights);
    console.log(this.flights);
  }
}
