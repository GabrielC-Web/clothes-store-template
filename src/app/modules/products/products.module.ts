import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsLayoutComponent } from './pages/products-layout/products-layout.component';
import { CmmModule } from 'src/app/common/common.module';
import { CoreModule } from 'src/app/core/core.module';
import { ProductsOverviewLayoutComponent } from './pages/products-overview-layout/products-overview-layout.component';


@NgModule({
  declarations: [
    ProductsLayoutComponent,
    ProductsOverviewLayoutComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    CmmModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
