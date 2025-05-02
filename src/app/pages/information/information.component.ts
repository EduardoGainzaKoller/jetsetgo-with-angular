import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {CarouselComponent} from '../../components/carousel/carousel.component';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-information',
  imports: [
    HeaderComponent,
    CarouselComponent,
    FooterComponent
  ],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {

}
