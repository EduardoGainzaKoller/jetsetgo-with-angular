import {Component, Input} from '@angular/core';
import { Flight } from '../../models/flight';

@Component({
  selector: 'app-offert',
  imports: [],
  templateUrl: './offert.component.html',
  styleUrl: './offert.component.css'
})
export class OffertComponent {

  @Input() flight: Flight | null = null;

  constructor() {
  }

}
