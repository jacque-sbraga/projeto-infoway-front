import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/angular-material/material.module';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SharedModule } from '../shared/components/shared.module';

@NgModule({
  declarations: [
    UserRegisterComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    UserRegisterComponent,
    ProductListComponent,
    CartComponent,
    CheckoutComponent,
  ],
})
export class BuyerModule {}
