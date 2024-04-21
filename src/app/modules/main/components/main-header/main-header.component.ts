import { Component, EventEmitter, Input, Output } from '@angular/core';
import { icons } from 'src/assets/images/image-routes';

@Component({
  selector: 'cmp-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {

  icons = icons

  /**
   * Emite evento de abrir sidenav
   */
  @Output() openSidenav: EventEmitter<boolean> = new EventEmitter()

  /**
   * Indica si el sidenav está abierto
   */
  @Input() sidenavOpen: boolean = false

  /**
   * Toggle el sidenav
   */
  toggleSidenav() {

    this.sidenavOpen = !this.sidenavOpen

    this.openSidenav.emit(this.sidenavOpen)

  }

}
