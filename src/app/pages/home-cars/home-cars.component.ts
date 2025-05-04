import {Component, inject} from '@angular/core';
import {CarouselComponent} from "../../components/carousel/carousel.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";
import {NgForOf, SlicePipe} from "@angular/common";
import {OffertComponent} from "../../components/offert/offert.component";
import {SearchCarBarComponent} from '../../components/search-car-bar/search-car-bar.component';
import {Flight} from '../../models/flight';
import {FlightsService} from '../../services/flights.service';

@Component({
  selector: 'app-home-cars',
  imports: [
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    NgForOf,
    OffertComponent,
    SearchCarBarComponent,
    SlicePipe
  ],
  templateUrl: './home-cars.component.html',
  styleUrl: './home-cars.component.css'
})
export class HomeCarsComponent {
  flights: Flight[] = [];
  flightService: FlightsService = inject(FlightsService);

  constructor() {}

  ngOnInit() {
    this.flightService.getAllFlights().subscribe(flights => this.flights = flights);
    console.log(this.flights);
  }
}
