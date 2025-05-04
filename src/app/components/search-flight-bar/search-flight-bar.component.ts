import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {Hotel} from '../../models/hotel';
import {HotelsService} from '../../services/hotels.service';
import {Flight} from '../../models/flight';
import {FlightsService} from '../../services/flights.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search-flight-bar',
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './search-flight-bar.component.html',
  styleUrl: './search-flight-bar.component.css'
})
export class SearchFlightBarComponent {


  busqueda = {
    destino: '',
    duracion: 0,
    precio: 0,
    fecha_de_salida: '',
    fecha_de_llegada: '',
    hora_de_salida: '',
    hora_de_llegada: '',
  }

  vuelos: Flight[] = [];
  flightService: FlightsService = inject(FlightsService);
  router: Router = inject(Router);

  ngOnInit(): void {
    this.flightService.getAllFlights().subscribe(data => {
      this.vuelos = data;
    });
  }

  searchFlight() {
    this.router.navigate(['/flight-search'], {
      queryParams: {
        destino: this.busqueda.destino,
        duracion: this.busqueda.duracion,
        precio: this.busqueda.precio,
        fecha_de_salida: this.busqueda.fecha_de_salida,
        fecha_de_llegada: this.busqueda.fecha_de_llegada,
        hora_de_salida: this.busqueda.hora_de_salida,
        hora_de_llegada: this.busqueda.hora_de_llegada
      }
    });
  }

}
