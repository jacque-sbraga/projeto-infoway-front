import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card-admin',
  templateUrl: './product-card-admin.component.html',
  styleUrls: ['./product-card-admin.component.css']
})
export class ProductCardAdminComponent implements OnInit {

  @Input() product: Product;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  editProduct(): void {     
    this._router.navigateByUrl('/admin-dashboard/create-product/' + this.product.id);
  }

  deleteProduct(): void {

  }
}
