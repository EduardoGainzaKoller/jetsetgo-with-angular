import {Component, Input} from '@angular/core';
import {Flight} from '../../models/flight';

@Component({
  selector: 'app-flight',
  imports: [],
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.css'
})
export class FlightComponent {
  @Input() flight: Flight | null = null;
}
