import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  featuredProducts: any[] = [];  

  constructor(private _categoryService: CategoryService, private _productService: ProductService) { }

  ngOnInit(): void {
    this.getFeaturedCategories();

    console.log(this.featuredProducts);
  }

  getFeaturedCategories(): void {
    this._categoryService.getAllByKeyValue('featured', '1', false).subscribe(
      categories => {
        for (const category of categories) {
          this.getFeaturedProducts(category);          
        }        
      },
      error => {
        console.log(error);
      }
    );
  }

  getFeaturedProducts(category: Category): void {
    this._productService.getAllByKeyValue('category_id', category.id, false).subscribe(
      products => {
        this.featuredProducts.push({ category: category.category, products: products });
      },
      error => {
        console.log(error);
      }
    );
  }
}
