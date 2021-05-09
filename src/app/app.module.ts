import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './shared/material.module';

// Importação do pipe
import { ReducedName } from './shared/utils/reducedName.pipe';

import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductRegisterComponent } from './components/product-register/product-register.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HomeComponent } from './components/home/home.component';
import { InventoryControlComponent } from './components/inventory-control/inventory-control.component';
import { ProductListComponent } from './components/product-list/product-list.component';
// import { UserRegisterComponent } from './components/user-register/user-register.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CategoryRegisterComponent } from './components/category-register/category-register.component';
import { SliderComponent } from './shared/components/slider/slider.component';


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
    SliderComponent    
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
