import { Component, HostListener } from '@angular/core';
import { icons, images } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-products-layout',
  templateUrl: './products-layout.component.html',
  styleUrls: ['./products-layout.component.scss']
})
export class ProductsLayoutComponent {

  products: any[] = [
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
    {
      image: images.jean,
      name: 'JEANS MARCA',
      showOfferBadge: true,
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
    {
      image: images.cap,
      name: 'GORRA MARCA',
      price: '200',
      showOfferBadge: true,
      variants: [
        '#D7D3D2',
        '#000',
        '#074459'
      ]
    },
    {
      image: images.cap,
      name: 'GORRA MARCA',
      showOfferBadge: true,
      price: '200',
      variants: [
        '#D7D3D2',
        '#000',
        '#074459'
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

  ]

  items: any[] = [
    {
      icon: icons.van,
      info: 'Envío Gratis',
      text: 'Solo dentro la ciudad de Caracas'
    },
    {
      icon: icons.return,
      info: 'Devoluciones',
      text: 'Devoluciones gratuitas y cambios'
    },
    {
      icon: icons.purse,
      info: 'Empaque exclusivo',
      text: 'Empaque exclusivo por marca'
    },
  ]

  smallMode: boolean = false

  @HostListener('window:resize', ['$event'])
  onResize(e: Event) {

    if (window.innerWidth <= 767) {

      this.smallMode = true

    } else {

      this.smallMode = false

    }

  }

  ngOnInit() {

    if (window.innerWidth <= 767) {

      this.smallMode = true

    } else {

      this.smallMode = false

    }

  }

}
