import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Importação do pipe

import { ProductCardComponent } from './components/product-card/product-card.component';
import { SliderComponent } from './components/slider/slider.component';
import { MaterialModule } from './angular-material/material.module';
import { ReducedName } from './utils/reducedName.pipe';
import { ProductListComponent } from './views/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardAdminComponent } from './components/product-card-admin/product-card-admin.component';
import { ModalAlertComponent } from './components/modal-alert/modal-alert.component';
import { ProductCartItemComponent } from './components/product-cart-item/product-cart-item.component';

@NgModule({
  declarations: [
    SliderComponent,
    ProductCardComponent,
    ReducedName,
    ProductListComponent,
    ProductCardAdminComponent,
    ModalAlertComponent,
    ProductCartItemComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, NgbModule],
  exports: [
    SliderComponent,
    ProductCardComponent,
    ReducedName,
    ProductListComponent,
    ProductCardAdminComponent,
    ModalAlertComponent,
    ProductCartItemComponent],
})
export class SharedModule {}
