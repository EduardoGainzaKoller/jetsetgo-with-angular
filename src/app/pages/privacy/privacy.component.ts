import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {CarouselComponent} from '../../components/carousel/carousel.component';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-privacy',
  imports: [
    HeaderComponent,
    CarouselComponent,
    FooterComponent
  ],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent {

}
