import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '@angular/fire/auth';

@Component({
  selector: 'app-header-session-start',
  imports: [
    RouterLink
  ],
  templateUrl: './header-session-start.component.html',
  styleUrl: './header-session-start.component.css'
})
export class HeaderSessionStartComponent {

  userService: UserService = inject(UserService);
  user: User | null = null;

  constructor(private router: Router) {
  }


  ngOnInit() {
    this.user = this.userService.getCurrentUser()
  }

  cerrarSesion() {
    this.userService.logout().then(() => {
      console.log('Sesión cerrada');
      this.router.navigate(['/login']);
    });

  }
}
