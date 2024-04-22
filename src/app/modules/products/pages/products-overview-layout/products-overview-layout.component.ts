import { Component } from '@angular/core';
import { images } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-products-overview-layout',
  templateUrl: './products-overview-layout.component.html',
  styleUrls: ['./products-overview-layout.component.scss']
})
export class ProductsOverviewLayoutComponent {

  productsList: any[] = [
    {
      image: images.t_shirt,
      name: 'CAMISETA MARCA',
      brandName: 'UNICOLOR',
      sku: 'krogm93746917',
      aditionalInfo: {
        'Color': 'Blanco',
        'Talla': 'S'
      },
      quantity: 1,
      price: 175,
      currency: 'us$'
    },
    {
      image: images.white_shoe,
      name: 'SNEAKERS',
      brandName: 'Marca',
      sku: 'krogm93746917',
      aditionalInfo: {
        'Color': 'Blanco',
        'Talla': '38'
      },
      quantity: 1,
      price: 175,
      currency: 'us$'
    },
    {
      image: images.tall_shoe,
      name: 'SANDALIA',
      brandName: 'UNICOLOR',
      sku: 'krogm93746917',
      aditionalInfo: {
        'Color': 'Beige',
        'Talla': '40'
      },
      quantity: 1,
      price: 175,
      currency: 'us$'
    },
  ]

  prebill: any = {
    basePrice: 175,
    delivery: 175,
    totalPrice: 175,
    discount: '_ US$',
    currency: 'US$'
  }

}
