import { Component, OnInit } from '@angular/core';
import { Netflix } from './models/Netflix';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public netflix!: Netflix;

  constructor() {
    /* this.netflix = {
       navbar: {
        title: 'Netflix',
        logo: {
          src: '',
          alt: 'Netflix Logo',
        }
      }, 

      hero: {
        title: 'Los 5 más vistos HOY',
        imgGallery: [
          {
            src: '',
            alt: '',
          },
          {
            src: '',
            alt: '',
          },
          {
            src: '',
            alt: '',
          },
          {
            src: '',
            alt: '',
          },
        ],
      },
    }; */
  }

  ngOnInit(): void {}
}
