import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/angular-material/material.module';

import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserRegisterComponent } from './components/user-register/user-register.component';

@NgModule({
  declarations: [
    UserRegisterComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UserRegisterComponent,
    CartComponent,
    CheckoutComponent,
  ],
})
export class BuyerModule {}
