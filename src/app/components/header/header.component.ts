import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories: Category[] = [];
  featuredCategories: Category[] = [];

  constructor(private categoryService: CategoryService, private _router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getAll().subscribe(
      response => {
        this.categories = response;
        this.featuredCategories = this.categories.filter(category => category.featured);
      },
      error => console.log
    );
  }

  navigateToProductList(selectedCategory: Category): void {    
    this._router.navigate(['product-list'], { queryParams: { category: selectedCategory.category }});    
  }
}
