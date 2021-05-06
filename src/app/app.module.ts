import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductRegisterComponent } from './components/product-register/product-register.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HomeComponent } from './components/home/home.component';
import { InventoryControlComponent } from './components/inventory-control/inventory-control.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CategoryRegisterComponent } from './components/category-register/category-register.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductRegisterComponent,
    LoginComponent,
    ProductDetailsComponent,
    HomeComponent,
    InventoryControlComponent,
    ProductListComponent,
    UserRegisterComponent,
    CartComponent,
    CheckoutComponent,
    CategoryRegisterComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
