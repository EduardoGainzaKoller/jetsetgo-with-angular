import {Component, inject} from '@angular/core';
import {CarouselComponent} from "../../components/carousel/carousel.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";
import {NgForOf, SlicePipe} from "@angular/common";
import {OffertComponent} from "../../components/offert/offert.component";
import {Flight} from '../../models/flight';
import {FlightsService} from '../../services/flights.service';
import {SearchFlightBarComponent} from '../../components/search-flight-bar/search-flight-bar.component';

@Component({
  selector: 'app-home-flights',
  imports: [
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    NgForOf,
    OffertComponent,
    SearchFlightBarComponent,
    SlicePipe
  ],
  templateUrl: './home-flights.component.html',
  styleUrl: './home-flights.component.css'
})
export class HomeFlightsComponent {
  flights: Flight[] = [];
  flightService: FlightsService = inject(FlightsService);

  constructor() {}

  ngOnInit() {
    this.flightService.getAllFlights().subscribe(flights => this.flights = flights);
    console.log(this.flights);
  }

}
