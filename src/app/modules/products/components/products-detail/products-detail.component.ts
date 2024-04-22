import { Component, Input } from '@angular/core';
import { images } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent {

  @Input() product = {
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
    aditionalInfo: {
      'Color': 'Blanco',
      'Talla': 'S',
    },
    variants: [
      '#fff',
      '#000',
      '#148954',
      '#0C1284',
      '#A46D09'
    ],
    sizes: [
      'XS',
      'S',
      'M',
      'L',
      'XL',
      'XXL',
    ]
  }

  /**
   * Index de la imagen a mostrar
   */
  mainImageIndex: number = 0

  choosenVariant: number = 0

  choosenSize: number = 0

  constructor() { }

  /**
   * Añade más unidades del producto
   */
  addProductUnit() {

    this.product.quantity += 1

  }

  /**
   * Elimina unidades del producto
   */
  removeProductUnit() {

    this.product.quantity -= 1

    if (this.product.quantity < 1) {
      this.product.quantity = 1
    }

  }

  /**
   * Cambia la imagen que se está mostrando
   * @param next 
   */
  changeMainImageIndex(next: boolean) {

    if (next) {

      this.mainImageIndex += 1

      if (this.mainImageIndex >= this.product.images.length) {
        this.mainImageIndex = 0
      }

    } else {

      if (this.mainImageIndex <= 0) {

        this.mainImageIndex = this.product.images.length - 1

      }

    }

  }

}
