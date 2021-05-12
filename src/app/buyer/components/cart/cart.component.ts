import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  featuredProducts: any[] = [];

  constructor(
    private _categoryService: CategoryService,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getFeaturedCategories();

    console.log(this.featuredProducts);
  }

  getFeaturedCategories(): void {
    this._categoryService.getAllByKeyValue('featured', '1', false).subscribe(
      (categories) => {
        for (const category of categories) {
          this.getFeaturedProducts(category);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getFeaturedProducts(category: Category): void {
    this._productService
      .getAllByParams({ category_id: category.id })
      .subscribe(
        (products) => {
          if (products.length > 0) {
            this.featuredProducts.push({
              category: category.category,
              products: products,
            });
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
