import { Component } from '@angular/core';
import { CmmEcomProductDetailModelv2 } from 'src/app/common/data/utils/models/ecommerce.models';
import { icons, images } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-products-detail-layout',
  templateUrl: './products-detail-layout.component.html',
  styleUrls: ['./products-detail-layout.component.scss']
})
export class ProductsDetailLayoutComponent {

  looks = [
    images.chica5,
    images.tall_shoe,
    images.chica2,
  ]

  promos = [
    images.purse,
    images.cap,
    images.purse,
    images.cap,
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

  /**
   * Producto del detalle
   */
  product: CmmEcomProductDetailModelv2 = {
    id: '32',
    currency: '$',
    images: [
      images.t_shirt,
      images.chica3,
      images.chica4,
    ],
    mainImage: images.t_shirt,
    name: 'CAMISETA MARCA',
    brand: 'UNICOLOR',
    price: '175.00',
    sku: 'KROGGM93746917',
    partNumber: '93746917',
    maximunPurchase: 1,
    quantity: 1,
    aditionalInfo: [
      {
        title: 'COLOR',
        type: 'variants',
        colorVariants: [
          {
            color: '#fff'
          },
          {
            color: '#000'
          },
          {
            color: '#148954'
          },
          {
            color: '#0C1284'
          },
          {
            color: '#A46D09'
          },
        ]
      },
      {
        title: 'Tallas',
        type: 'variants',
        textVariants: [
          {
            text: 'XS'
          },
          {
            text: 'S'
          },
          {
            text: 'M'
          },
          {
            text: 'L'
          },
          {
            text: 'XL'
          },
          {
            text: 'XXL'
          },
        ]
      },
    ],

  }

}
