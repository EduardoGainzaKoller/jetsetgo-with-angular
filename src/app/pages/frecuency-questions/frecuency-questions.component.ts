import { Component } from '@angular/core';
import {CarouselComponent} from "../../components/carousel/carousel.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-frecuency-questions',
    imports: [
        CarouselComponent,
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './frecuency-questions.component.html',
  styleUrl: './frecuency-questions.component.css'
})
export class FrecuencyQuestionsComponent {

}
