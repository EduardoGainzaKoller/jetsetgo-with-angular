import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FooterComponent,
    HeaderComponent,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  userService: UserService = inject(UserService);
  router: Router = inject(Router);
  errorMessage: string = '';

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  async onLogin() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    try {
      await this.userService.loginWithEmail(email, password);
      this.router.navigate(['/home-hotels']);
    } catch (error: any) {
      this.errorMessage = this.mapErrorMessage(error.code || error.message);
    }
  }

  async onLoginWithGoogle() {
    try {
      await this.userService.loginWithGoogle();
      this.router.navigate(['/home-hotels']);
    } catch (error: any) {
      this.errorMessage = this.mapErrorMessage(error.code || error.message);
    }
  }

  async onLoginWithGitHub() {
    try {
      await this.userService.loginWithGitHub();
      this.router.navigate(['/home-hotels']);
    } catch (error: any) {
      this.errorMessage = this.mapErrorMessage(error.code || error.message);
    }
  }

  private mapErrorMessage(code: string): string {
    switch (code) {
      case 'auth/user-not-found':
        return 'No existe una cuenta con ese correo.';
      case 'auth/wrong-password':
        return 'Contraseña incorrecta.';
      case 'auth/invalid-email':
        return 'Correo electrónico inválido.';
      case 'auth/popup-closed-by-user':
        return 'Se cerró el popup sin iniciar sesión.';
      default:
        return 'Ocurrió un error. Intenta nuevamente.';
    }
  }
}
