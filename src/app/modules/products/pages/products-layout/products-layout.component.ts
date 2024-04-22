import { Component } from '@angular/core';
import { images } from 'src/assets/images/image-routes';

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

}
