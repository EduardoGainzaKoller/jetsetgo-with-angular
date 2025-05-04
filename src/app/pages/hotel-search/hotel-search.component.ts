import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { SearchHotelBarComponent } from '../../components/search-hotel-bar/search-hotel-bar.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { FooterComponent } from '../../components/footer/footer.component';
import {NgForOf, NgIf} from '@angular/common';
import { Hotel } from '../../models/hotel';
import { HotelsService } from '../../services/hotels.service';
import { HotelComponent } from '../../components/hotel/hotel.component';

@Component({
  selector: 'app-hotel-search',
  imports: [
    HeaderComponent,
    SearchHotelBarComponent,
    FilterComponent,
    FooterComponent,
    NgForOf,
    HotelComponent,
    NgIf
  ],
  templateUrl: './hotel-search.component.html',
  styleUrl: './hotel-search.component.css'
})
export class HotelSearchComponent {
  hotels: Hotel[] = [];
  filteredHotels: Hotel[] = [];

  hotelService: HotelsService = inject(HotelsService);
  route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.hotelService.getAllHotels().subscribe(hotels => {
      this.hotels = hotels;

      this.route.queryParams.subscribe(params => {
        const localizacion = params['localizacion']?.toLowerCase().trim() || '';
        const precio = parseFloat(params['precio']) || 0;
        const valoracion = parseFloat(params['valoracion']) || 0;
        const estrellas = parseInt(params['estrellas']) || 0;
        const inicio = params['inicio_disponibilidad']?.trim() || '';
        const fin = params['fin_disponibilidad']?.trim() || '';

        this.filteredHotels = this.hotels.filter(hotel => {
          const matchLocalizacion = !localizacion || hotel.localizacion?.toLowerCase().includes(localizacion);
          const matchPrecio = !precio || (hotel.precio && hotel.precio <= precio);
          const matchValoracion = !valoracion || (hotel.valoracion && hotel.valoracion >= valoracion);
          const matchEstrellas = !estrellas || (hotel.estrellas && hotel.estrellas === estrellas);

          const hotelInicio = hotel.inicio_disponibilidad || '';
          const hotelFin = hotel.fin_disponibilidad || '';
          const matchInicio = !inicio || (hotelInicio && hotelInicio <= inicio);
          const matchFin = !fin || (hotelFin && hotelFin >= fin);

          return matchLocalizacion && matchPrecio && matchValoracion && matchEstrellas && matchInicio && matchFin;
        });
      });
    });
  }
}
