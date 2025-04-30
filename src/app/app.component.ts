import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {FooterComponent} from './components/footer/footer.component';
import {SearchHotelBarComponent} from './components/search-hotel-bar/search-hotel-bar.component';
import {OffertComponent} from './components/offert/offert.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CarouselComponent, FooterComponent, SearchHotelBarComponent, OffertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jetsetgowithangular';
}
