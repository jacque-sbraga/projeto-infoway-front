import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './shared/angular-material/material.module';

// Importação do pipe
import { ReducedName } from './shared/utils/reducedName.pipe';

import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/login/login.component';
// import { UserRegisterComponent } from './components/user-register/user-register.component';

import { ProductRegisterComponent } from './components/product-register/product-register.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { InventoryControlComponent } from './components/inventory-control/inventory-control.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CategoryRegisterComponent } from './components/category-register/category-register.component';

import { SliderComponent } from './shared/components/slider/slider.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';


@NgModule({
  declarations: [
    ReducedName,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductRegisterComponent,
    LoginComponent,
    ProductDetailsComponent,
    HomeComponent,
    InventoryControlComponent,
    ProductListComponent,
    // UserRegisterComponent,
    CartComponent,
    CheckoutComponent,
    CategoryRegisterComponent,
    SliderComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
