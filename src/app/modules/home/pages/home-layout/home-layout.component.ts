import { Component, HostListener } from '@angular/core';
import { logoShape } from 'src/app/common/assets/images/images-routes';
import { images, logos } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {

  images = images

  logos = logos

  logosBanner = [
    logos.mango,
    logos.channel,
    logos.dior,
  ]

  outstandingProducts = [
    this.images.t_shirt,
    this.images.tall_shoe,
    this.images.white_shoe,
  ]

  /**
   * Productos del carrusel
   */
  carouselProductsBigScreen: any[] = [
    [
      {
        image: images.white_shoe,
        name: 'SNEAKERS MARCA',
        price: '158',
        variants: [
          '#D7D3D2',
          '#000',
          '#E5B8A3'
        ]
      },
      {
        image: images.tall_shoe,
        name: 'SANDALIAS MARCA',
        price: '200',
        variants: [
          '#E5B8A3',
          '#000',
        ]
      },
      {
        image: images.t_shirt,
        name: 'CAMISETA MARCA',
        price: '158',
        variants: [
          '#fff',
          '#000',
          '#148954',
          '#0C1284',
          '#A46D09'
        ]
      },
    ],
    [
      {
        image: images.jean,
        name: 'JEANS MARCA',
        price: '158',
        variants: [
          '#356281',
          '#6F9FC5',
          '#000'
        ]
      },
      {
        image: images.purse,
        name: 'CARTERA ALTAS',
        price: '200',
        variants: [
          '#000'
        ]
      },
      {
        image: images.cap,
        name: 'GORRA MARCA',
        price: '200',
        variants: [
          '#D7D3D2',
          '#000',
          '#074459'
        ]
      },
    ],
    [
      {
        image: images.tall_shoe,
        name: 'SANDALIAS MARCA',
        price: '200',
        variants: [
          '#E5B8A3',
          '#000',
        ]
      },
      {
        image: images.white_shoe,
        name: 'SNEAKERS MARCA',
        price: '158',
        variants: [
          '#D7D3D2',
          '#000',
          '#E5B8A3'
        ]
      },
      {
        image: images.t_shirt,
        name: 'CAMISETA MARCA',
        price: '158',
        variants: [
          '#fff',
          '#000',
          '#148954',
          '#0C1284',
          '#A46D09'
        ]
      },
    ],
  ]
  /**
   * Productos del carrusel
   */
  carouselProductsSmallScreen: any[] = []

  @HostListener('window:resize', ['$event'])
  onResize(e: Event) {

    //* Veo si la pantalla es lo suficientemente pequeña
    if (window.innerWidth <= 992) {
      this.changeListMode()
    } else {
      this.carouselProductsSmallScreen = []
    }

  }

  ngOnInit() {

    this.changeListMode()

  }

  /**
   * Genera una lista con todos los items del listado con secciones de items
   */
  changeListMode() {

    //* Vacío el listado
    this.carouselProductsSmallScreen = []

    //* Creo el listado con todos los items por separado
    this.carouselProductsBigScreen.forEach(section => {

      section.forEach((item: any) => {

        this.carouselProductsSmallScreen.push(item)

      })

    })

  }

}
