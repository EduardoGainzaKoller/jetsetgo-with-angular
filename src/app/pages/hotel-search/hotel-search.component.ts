import {Component, inject} from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {SearchHotelBarComponent} from '../../components/search-hotel-bar/search-hotel-bar.component';
import {FilterComponent} from '../../components/filter/filter.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {NgForOf} from '@angular/common';
import {Hotel} from '../../models/hotel';
import {HotelsService} from '../../services/hotels.service';
import {HotelComponent} from '../../components/hotel/hotel.component';

@Component({
  selector: 'app-hotel-search',
  imports: [
    HeaderComponent,
    SearchHotelBarComponent,
    FilterComponent,
    FooterComponent,
    NgForOf,
    HotelComponent
  ],
  templateUrl: './hotel-search.component.html',
  styleUrl: './hotel-search.component.css'
})
export class HotelSearchComponent {
  hotels: Hotel[] = [];
  hotelService: HotelsService = inject(HotelsService);

  constructor() {}

  ngOnInit() {
    this.hotelService.getAllHotels().subscribe(hotels => this.hotels = hotels);
    console.log(this.hotels);
  }

}
