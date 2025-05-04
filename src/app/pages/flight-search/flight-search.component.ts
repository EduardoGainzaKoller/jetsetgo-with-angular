import { Component, inject } from '@angular/core';
import { Flight } from '../../models/flight';
import { FlightsService } from '../../services/flights.service';
import { ActivatedRoute } from '@angular/router';
import {FilterComponent} from '../../components/filter/filter.component';
import {SearchFlightBarComponent} from '../../components/search-flight-bar/search-flight-bar.component';
import {FlightComponent} from '../../components/flight/flight.component';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-flight-search',
  imports: [
    FilterComponent,
    FilterComponent,
    SearchFlightBarComponent,
    FlightComponent,
    NgForOf,
    NgIf,
    // otros componentes
  ],
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css'
})
export class FlightSearchComponent {
  vuelos: Flight[] = [];
  vuelosFiltrados: Flight[] = [];

  flightService: FlightsService = inject(FlightsService);
  route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.flightService.getAllFlights().subscribe(flights => {
      this.vuelos = flights;

      this.route.queryParams.subscribe(params => {
        const destino = params['destino']?.toLowerCase().trim() || '';
        const fechaSalida = params['fecha_de_salida']?.trim() || '';
        const fechaLlegada = params['fecha_de_llegada']?.trim() || '';

        this.vuelosFiltrados = this.vuelos.filter(vuelo => {
          const matchDestino = !destino || vuelo.destino?.toLowerCase().includes(destino);
          const matchFechaSalida = !fechaSalida || vuelo.fecha_de_salida === fechaSalida;
          const matchFechaLlegada = !fechaLlegada || vuelo.fecha_de_llegada === fechaLlegada;

          return matchDestino && matchFechaSalida && matchFechaLlegada;
        });
      });
    });
  }
}
