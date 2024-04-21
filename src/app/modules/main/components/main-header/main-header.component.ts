import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { icons } from 'src/assets/images/image-routes';
import { MainMenuDialogComponent } from '../../dialogs/main-menu-dialog/main-menu-dialog.component';
import { MatMenuTrigger } from '@angular/material/menu';

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
   * Indica si debo mostrar el background
   */
  @Input() showBg: boolean = false

  @HostListener('window:scroll', ['$event'])
  onScroll(e: Event) {

    if (document.documentElement.scrollTop >= 162) {
      this.showBg = true
    } else {
      this.showBg = false
    }

  }

  showed: string = ''

  constructor(
    private dialog: MatDialog
  ) { }

  /**
   * Toggle el sidenav
   */
  toggleSidenav() {

    this.sidenavOpen = !this.sidenavOpen

    this.openSidenav.emit(this.sidenavOpen)

  }

  showMenu(menu: string) {

    this.showed = menu

  }

}
