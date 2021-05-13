import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent implements OnInit {
  originalCategory: Category = {
    category: '',
    featured: false,
  };

  category = {
    ...this.originalCategory,
  };

  categorys: Category[] = [];

  categorySelected: number = 0;

  constructor(
    private categoryService: CategoryService,
    private http: HttpClient
  ) {}

  onSubmit(form: NgForm) {
    console.log(form);

    this.categoryService.create(this.category).subscribe(
      () => {
        this.getCategorys();
        form.resetForm();
      },
      (error) => {
        console.log(error || { error: 'Algum erro aconteceu!' });
      }
    );
  }

  testId(): void {
    console.log(this.categorySelected);
  }

  getCategorys(): void {
    this.categoryService.getAll().subscribe(
      (categories) => {
        console.log(categories);
        this.categorys = categories;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  deleteCategory(): void {
    this.categoryService.delete(this.categorySelected).subscribe(
      () => {
        window.location.reload();
        this.getCategorys();
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  updateCategoryName(categoryNewName: string, featured: boolean) {
    const categoryName = {
      category: categoryNewName,
      featured: featured
    };

    const categoryId = this.categorySelected;

    console.log(categoryId, categoryNewName);

    this.categoryService.update(categoryId, categoryName).subscribe(
      () => {
        this.getCategorys();
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  ngOnInit(): void {
    this.getCategorys();
  }
}
