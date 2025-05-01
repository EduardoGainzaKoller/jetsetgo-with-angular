import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { UserService } from '../../services/user.service';
import {NgIf} from '@angular/common';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    NgIf,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  errorMessage = '';

  registerForm: FormGroup;
  userService: UserService = inject(UserService);
  router: Router = inject(Router);

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()
    })
  }

  async onRegister() {
    if (this.registerForm.invalid) return;

    const { email, password } = this.registerForm.value;

    try {
      const methods = await this.userService.checkIfEmailExists(email);
      if (methods) {
        this.errorMessage = 'Este correo ya está registrado.';
        return;
      }

      await this.userService.register(email, password);
      this.router.navigate(['/home-hotels']);
    } catch (error: any) {
      this.errorMessage = 'Error al registrar: ' + error.message;
    }
  }


  async onRegisterWithGoogle() {
    try {
      await this.userService.loginWithGoogle();
      this.router.navigate(['/home-hotels']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  async onRegisterWithGitHub() {
    try {
      await this.userService.loginWithGitHub();
      this.router.navigate(['/home-hotels']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

}
