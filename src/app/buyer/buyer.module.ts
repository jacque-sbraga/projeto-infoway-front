import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { MaterialModule } from '../shared/angular-material/material.module';

@NgModule({
  declarations: [
    UserRegisterComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent    
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UserRegisterComponent,
    ProductListComponent,
    CartComponent,
    CheckoutComponent    
  ]
})
export class BuyerModule { }
