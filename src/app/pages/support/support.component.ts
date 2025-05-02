import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {SupportFormComponent} from '../../components/support-form/support-form.component';
import {FooterComponent} from '../../components/footer/footer.component';

@Component({
  selector: 'app-support',
  imports: [
    HeaderComponent,
    SupportFormComponent,
    FooterComponent
  ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {

}
