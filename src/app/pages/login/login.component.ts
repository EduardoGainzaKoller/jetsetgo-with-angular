import {Component, inject} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  userService: UserService = inject(UserService);

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }



}
