import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {  
    
  cartProducts: Product[] = [];

  constructor(    
    private _productService: ProductService,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getCartProducts();
  } 

  getCartProducts(): void {





    // this._productService
    //   .getAllByParams({ category_id: category.id })
    //   .subscribe(
    //     (products) => {
    //       if (products.length > 0) {
    //         this.featuredProducts.push({
    //           category: category.category,
    //           products: products,
    //         });
    //       }
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
  }
}
