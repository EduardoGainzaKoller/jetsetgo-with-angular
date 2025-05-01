import {Component, Input} from '@angular/core';
import {Hotel} from '../../models/hotel';

@Component({
  selector: 'app-hotel',
  imports: [],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent {
  @Input() hotel: Hotel | null = null;

}
