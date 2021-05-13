import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  
  constructor(private _router: Router,) { }

  ngOnInit(): void {
    
  }

  goToProductDetails(): void {
    this._router.navigateByUrl('/products/' + this.product.id);
  }
}
