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
import { LoginComponent } from './components/login/login.component';
import { SliderComponent } from './components/slider/slider.component';

//importe modules
// import { AdminModule } from './admin/admin.module';
import { BuyerModule } from './buyer/buyer.module';
import { ShopkeeperModule } from './shopkeeper/shopkeeper.module';
import { HomeComponent } from './components/home/home.component';

import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    ReducedName,
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    LoginComponent,
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
    ReactiveFormsModule,
    BuyerModule,
    ShopkeeperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
