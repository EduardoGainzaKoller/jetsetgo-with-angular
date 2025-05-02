import { Component } from '@angular/core';
import {CarouselComponent} from '../../components/carousel/carousel.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';

@Component({
  selector: 'app-terms-and-conditions',
  imports: [
    CarouselComponent,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.css'
})
export class TermsAndConditionsComponent {

}
