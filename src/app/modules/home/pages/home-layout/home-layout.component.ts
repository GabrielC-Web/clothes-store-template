import { Component } from '@angular/core';
import { images } from 'src/assets/images/image-routes';

@Component({
  selector: 'pag-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {

  images = images

  outstandingProducts = [
    this.images.chica1
  ]

}
