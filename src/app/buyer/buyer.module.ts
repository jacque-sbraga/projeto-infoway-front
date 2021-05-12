import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SliderComponent } from '../shared/components/slider/slider.component';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/components/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserRegisterComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
  ],
  imports: [CommonModule, MatGridListModule, MatCardModule, SharedModule, FormsModule],
  exports: [
    UserRegisterComponent,
    ProductListComponent,
    CartComponent,
    CheckoutComponent,
  ],
})
export class BuyerModule {}
