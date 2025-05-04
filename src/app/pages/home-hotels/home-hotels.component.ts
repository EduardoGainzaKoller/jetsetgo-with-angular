import {Component, inject} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {CarouselComponent} from '../../components/carousel/carousel.component';
import {SearchHotelBarComponent} from '../../components/search-hotel-bar/search-hotel-bar.component';
import {OffertComponent} from '../../components/offert/offert.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {Flight} from '../../models/flight';
import {FlightsService} from '../../services/flights.service';
import {NgForOf} from '@angular/common';
import {HeaderSessionStartComponent} from '../../components/header-session-start/header-session-start.component';

@Component({
  selector: 'app-home-hotels',
  imports: [
    HeaderComponent,
    CarouselComponent,
    SearchHotelBarComponent,
    OffertComponent,
    FooterComponent,
    NgForOf,
    HeaderSessionStartComponent
  ],
  templateUrl: './home-hotels.component.html',
  styleUrl: './home-hotels.component.css'
})
export class HomeHotelsComponent {

  flights: Flight[] = [];
  flightService: FlightsService = inject(FlightsService);

  constructor() {}

  ngOnInit() {
    this.flightService.getAllFlights().subscribe(flights => this.flights = flights);
    console.log(this.flights);
  }

}
