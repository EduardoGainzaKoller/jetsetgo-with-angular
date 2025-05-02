import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {CarouselComponent} from '../../components/carousel/carousel.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-about-us',
  imports: [
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    NgForOf
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  githubUsers = [
    {
      username: 'EduardoGainzaKoller',
      profileUrl: 'https://github.com/EduardoGainzaKoller',
      avatarUrl: 'https://avatars.githubusercontent.com/u/119002647?v=4'
    },
    {
      username: 'AlvaroRodriguezMiranda',
      profileUrl: 'https://github.com/AlvaroRodriguezMiranda',
      avatarUrl: 'https://avatars.githubusercontent.com/u/147083361?v=4'
    },
    {
      username: 'AlbertooRedondoo',
      profileUrl: 'https://github.com/AlbertooRedondoo',
      avatarUrl: 'https://avatars.githubusercontent.com/u/189739859?v=4'
    }
  ];
}
