import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() featuredProducts: Product[];
  animationStateControl: string = 'running';
  
  constructor() {}

  ngOnInit(): void {    
  }

  stopAnimation(): void {
    this.animationStateControl = 'paused';
  }

  playAnimation(): void {
    this.animationStateControl = 'running';
  }
}
