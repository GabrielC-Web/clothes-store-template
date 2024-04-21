import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { CmmModule } from 'src/app/common/common.module';
import { MainNavbarMennuComponent } from './components/main-navbar-mennu/main-navbar-mennu.component';
import { MainSidenavMenuComponent } from './components/main-sidenav-menu/main-sidenav-menu.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainNavbarMennuComponent,
    MainSidenavMenuComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CmmModule
  ]
})
export class MainModule { }
