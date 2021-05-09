import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductFromRoute();
  }

  getProductFromRoute(): void {
    this.activatedRoute
      .params
      .subscribe(params => {
        if (params.hasOwnProperty('id')) {
          const id = params['id'] as number;          
          this.getProductsByCategory(id);
        }
      });
  }

  getProductsByCategory(id: number): void {    
    this.productService.findOne(id).subscribe(
      response => {
        this.product = response;        
      },
      error => {
        console.log(error);
      });
  }

}
