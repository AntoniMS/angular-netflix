import { Component, OnInit } from '@angular/core';
import { NetFlix, Film } from './models/Netflix';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public netFlix: NetFlix;
  public action: Film;
  public anime: Film;
  public drama: Film;
  constructor() {
    this.netFlix = {
      navbar: {
        logo: {
          src: "../../../assets/images/LOGO/logo.png",
          alt: "NetFlix Logo"
        },
      },
      hero: {
        title: "Los 5 más populares hoy",
        imgGallery: [
          {
            src: "../../../assets/images/Top10/2-reina.webp",
            alt: "Reina"
          },
          {
            src: "../../../assets/images/Top10/1-papel.webp",
            alt: "Casa de papel"
          },
          {
            src: "../../../assets/images/Top10/6-aquinohay.webp",
            alt: "Aqui no hay quien viva"
          },
          {
            src: "../../../assets/images/Top10/8-ricos.webp",
            alt: "Ricos"
          },
          {
            src: "../../../assets/images/Top10/3-titanes.webp",
            alt: "Titanes"
          }
        ]
      }

    },
    this.action = {
      title: "Acción",
      imgGallery: [
        {
          src: "../../../assets/images/Accion/misionimposiblenacion.webp",
          alt: "Mision imposible"
        },
        {
          src: "../../../assets/images/Accion/killbill2.webp",
          alt: "Kill Bill2"
        },
        {
          src: "../../../assets/images/Accion/worldwarz.webp",
          alt: "WarZ"
        },
        {
          src: "../../../assets/images/Accion/terminator2.webp",
          alt: "Terminator2"
        },
        {
          src: "../../../assets/images/Accion/johnwick2.webp",
          alt: "JhonWick2"
        }
      ]
    };
    this.anime = {
      title: "Anime",
      imgGallery: [
        {
          src: "../../../assets/images/Anime/evangelion.webp",
          alt: "Evangelion *¬*"
        },
        {
          src: "../../../assets/images/Anime/chihiro.webp",
          alt: "Chihiro <3"
        },
        {
          src: "../../../assets/images/Anime/mononoke.webp",
          alt: "MonoNoke"
        },
        {
          src: "../../../assets/images/Anime/perfectblue.webp",
          alt: "PerfectBlue"
        },
        {
          src: "../../../assets/images/Anime/ninokuni.jpg",
          alt: "NinoKuni"
        }
      ]
    };
    this.drama = {
      title: "Drama",
      imgGallery: [
        {
          src: "../../../assets/images/Drama/millaverde.webp",
          alt: "milla verde"
        },
        {
          src: "../../../assets/images/Drama/clublucha.webp",
          alt: "el club de la lucha"
        },
        {
          src: "../../../assets/images/Drama/salvaralsoldado.webp",
          alt: "salvar al soldado ryan"
        },
        {
          src: "../../../assets/images/Drama/naufrago.webp",
          alt: "naufrago"
        },
        {
          src: "../../../assets/images/Drama/1917.webp",
          alt: "1917"
        }
      ]
    };
  }

  ngOnInit(): void {
  }

}
