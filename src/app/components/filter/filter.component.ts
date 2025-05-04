import { Component, EventEmitter, Output } from '@angular/core';
import { Flight } from '../../models/flight';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  precioMin: number | null = null;
  precioMax: number | null = null;

  @Output() filtrosAplicados: EventEmitter<{precioMin: number | null, precioMax: number | null}> = new EventEmitter();

  aplicarFiltros() {
    const precioMinInput = (document.getElementById('precioMin') as HTMLInputElement).value;
    const precioMaxInput = (document.getElementById('precioMax') as HTMLInputElement).value;

    this.precioMin = precioMinInput ? Number(precioMinInput) : null;
    this.precioMax = precioMaxInput ? Number(precioMaxInput) : null;

    this.filtrosAplicados.emit({
      precioMin: this.precioMin,
      precioMax: this.precioMax,
    });
  }
}
