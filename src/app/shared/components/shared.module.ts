import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MaterialModule } from '../angular-material/material.module';

// Importação do pipe
import { ReducedName } from '../utils/reducedName.pipe';

@NgModule({
  declarations: [SliderComponent, ProductCardComponent, ReducedName],
  imports: [CommonModule, MaterialModule],
  exports: [SliderComponent, ProductCardComponent, ReducedName],
})
export class SharedModule {}
