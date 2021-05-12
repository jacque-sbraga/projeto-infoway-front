import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card-admin',
  templateUrl: './product-card-admin.component.html',
  styleUrls: ['./product-card-admin.component.css']
})
export class ProductCardAdminComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
