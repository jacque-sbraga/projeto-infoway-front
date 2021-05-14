import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/angular-material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { FinishedBuyerComponent } from './components/finished-buyer/finished-buyer.component';

@NgModule({
  declarations: [
    UserRegisterComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    FinishedBuyerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    UserRegisterComponent,
    CartComponent,
    CheckoutComponent,
  ],
})
export class BuyerModule {}
