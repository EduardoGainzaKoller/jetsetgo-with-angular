import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {Hotel} from '../../models/hotel';
import {HotelsService} from '../../services/hotels.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search-hotel-bar',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './search-hotel-bar.component.html',
  styleUrl: './search-hotel-bar.component.css'
})
export class SearchHotelBarComponent implements OnInit {

  busqueda = {
    nombre: '',
    precio: 0,
    valoracion: 0,
    estrellas: 0,
    localizacion: '',
    inicio_disponibilidad: '',
    fin_disponibilidad: '',
    adultos: 0,
    ninos: 0,
    habitaciones: 0
  }

  hoteles: Hotel[] = [];
  hotelService: HotelsService = inject(HotelsService);
  router: Router = inject(Router);

  ngOnInit(): void {
    this.hotelService.getAllHotels().subscribe(data => {
      this.hoteles = data;
    });
  }

  searchHotels() {
    this.router.navigate(['/hotel-search'], {
      queryParams: {
        localizacion: this.busqueda.localizacion,
        precio: this.busqueda.precio,
        valoracion: this.busqueda.valoracion,
        estrellas: this.busqueda.estrellas,
        inicio_disponibilidad: this.busqueda.inicio_disponibilidad,
        fin_disponibilidad: this.busqueda.fin_disponibilidad
      }
    });
  }

}
