import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-header-session-start',
  imports: [
    RouterLink
  ],
  templateUrl: './header-session-start.component.html',
  styleUrl: './header-session-start.component.css'
})
export class HeaderSessionStartComponent {
  // Asegúrate de que tienes acceso al servicio de autenticación si usas uno
  constructor(private router: Router) {
  }

  cerrarSesion() {
    // Lógica para cerrar sesión aquí, por ejemplo:
    // this.authService.logout(); // Si tienes un servicio de autenticación

    // Redirigir al login después de cerrar sesión
    this.router.navigate(['/login']);
  }
}
