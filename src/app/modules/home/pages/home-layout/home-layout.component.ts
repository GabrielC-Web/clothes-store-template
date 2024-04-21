import { Component } from '@angular/core';
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

}
