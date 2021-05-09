import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryControlComponent } from './components/inventory-control/inventory-control.component';
import { CategoryRegisterComponent } from './components/category-register/category-register.component';
import { ProductRegisterComponent } from './components/product-register/product-register.component';

import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';



@NgModule({
  declarations: [
    InventoryControlComponent,
    CategoryRegisterComponent,
    ProductRegisterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InventoryControlComponent,
    CategoryRegisterComponent,
    ProductRegisterComponent
  ],
  providers: [
    CategoryService,
    ProductService
  ]
})
export class ShopkeeperModule { }
