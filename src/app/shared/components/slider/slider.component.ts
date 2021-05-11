import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() featuredProducts: any;

  constructor() {}

  insertElement() {}

  ngOnInit(): void {
    console.log(this.featuredProducts);
  }
}
