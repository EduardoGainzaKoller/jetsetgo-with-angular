import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {CarouselComponent} from './components/carousel/carousel.component';
import {FooterComponent} from './components/footer/footer.component';
import {SearchHotelBarComponent} from './components/search-hotel-bar/search-hotel-bar.component';
import {OffertComponent} from './components/offert/offert.component';
import {HomeHotelsComponent} from './pages/home-hotels/home-hotels.component';
import {UserService} from './services/user.service';
import {User} from '@angular/fire/auth';
import {NgIf} from '@angular/common';
import {HeaderSessionStartComponent} from './components/header-session-start/header-session-start.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CarouselComponent, FooterComponent, SearchHotelBarComponent, OffertComponent, HomeHotelsComponent, NgIf, HeaderSessionStartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jetsetgowithangular';

  userService: UserService = inject(UserService);

  user: User | null = null;

  ngOnInit(): void {
    this.userService.isLoggedIn().subscribe((user) => {
      this.user = user;
    });
  }
}
