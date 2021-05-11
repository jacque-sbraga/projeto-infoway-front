import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [SliderComponent, ProductCardComponent],
  imports: [CommonModule],
  exports: [SliderComponent, ProductCardComponent],
})
export class SharedModule {}
