import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredProducts: any[] = [];

  constructor(
    private _categoryService: CategoryService,
    private _productService: ProductService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getFeaturedCategories();
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
    this._productService.getAllByParams({ category_id: category.id }).subscribe(
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

  avatarUrl: string = '';

  getUserAvatar(login: string): void {
    this.userService.getUserAvatarr(login).subscribe((data) => {
      this.avatarUrl = data;
      console.log(this.avatarUrl);
      console.log(data);
    });
  }
}
