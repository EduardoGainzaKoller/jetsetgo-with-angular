import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {Flight} from '../../models/flight';
import {FlightsService} from '../../services/flights.service';

@Component({
  selector: 'app-search-car-bar',
  imports: [
    RouterLink
  ],
  templateUrl: './search-car-bar.component.html',
  styleUrl: './search-car-bar.component.css'
})
export class SearchCarBarComponent {

}
