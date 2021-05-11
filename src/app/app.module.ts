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
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './login/login.component';
//importe modules
// import { AdminModule } from './admin/admin.module';
import { BuyerModule } from './buyer/buyer.module';
import { ShopkeeperModule } from './shopkeeper/shopkeeper.module';
import { HomeComponent } from './components/home/home.component';
import { AdminModule } from './admin/admin.module';
import { BladeComponent } from './components/admin/blade/blade.component';
import { MainAdminComponent } from './components/admin/main-admin/main-admin.component';
import { ProductDetailsAdminComponent } from './components/admin/product-details-admin/product-details-admin.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { CreateProductComponent } from './components/admin/create-product/create-product.component';
import { ProductsListComponent } from './components/admin/products-list/products-list.component';
import { SharedModule } from './shared/components/shared.module';
@NgModule({
  declarations: [
    ReducedName,
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    BladeComponent,
    MainAdminComponent,
    ProductDetailsAdminComponent,
    HomeAdminComponent,
    CreateProductComponent,
    ProductsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
    BuyerModule,
    ShopkeeperModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
