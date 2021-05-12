import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importação do pipe

import { ProductCardComponent } from './components/product-card/product-card.component';
import { SliderComponent } from './components/slider/slider.component';
import { MaterialModule } from './angular-material/material.module';
import { ReducedName } from './utils/reducedName.pipe';
import { ProductListComponent } from './views/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardAdminComponent } from './components/product-card-admin/product-card-admin.component';

@NgModule({
  declarations: [SliderComponent, ProductCardComponent, ReducedName, ProductListComponent, ProductCardAdminComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [SliderComponent, ProductCardComponent, ReducedName, ProductListComponent],
})
export class SharedModule {}
