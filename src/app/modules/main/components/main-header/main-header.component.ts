import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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
