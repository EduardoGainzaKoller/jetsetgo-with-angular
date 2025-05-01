import {Component, inject} from '@angular/core';
import {FilterComponent} from "../../components/filter/filter.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";
import {NgForOf} from "@angular/common";
import {SearchCarBarComponent} from '../../components/search-car-bar/search-car-bar.component';
import {CarComponent} from '../../components/car/car.component';
import {Car} from '../../models/car';
import {CarsService} from '../../services/cars.service';

@Component({
  selector: 'app-car-search',
  imports: [
    FilterComponent,
    FooterComponent,
    HeaderComponent,
    NgForOf,
    SearchCarBarComponent,
    CarComponent
  ],
  templateUrl: './car-search.component.html',
  styleUrl: './car-search.component.css'
})
export class CarSearchComponent {
  cars: Car[] = [];
  carService: CarsService = inject(CarsService);

  constructor() {}

  ngOnInit() {
    this.carService.getAllCars().subscribe(cars => this.cars = cars);
    console.log(this.cars);
  }
}
