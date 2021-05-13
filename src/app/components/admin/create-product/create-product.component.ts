import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  originalProduct: Product = {
    name: '',
    description: '',
    quantity: 0,
    price: 0.0,
    sku: '',
    image: '',
    available: true,
    category_id: null,
  };

  product: Product = { ...this.originalProduct };
  postError: boolean;
  postErrorMessage: string;
  categorys: Category[] = [];

  constructor(
    private getCategoriesService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getCategoriesService.getAll().subscribe(
      (categories) => {
        this.categorys = categories;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  onSubmit(form: NgForm) {
    console.log('onSubmit ', form.valid);
    if (form.valid) {
      this.productService.create(this.product).subscribe(
        (result) => {
          console.log('sucess', result);
        },
        (error) => this.onHttpError(error)
      );
    } else {
      this.postError = true;
      this.postErrorMessage =
        'Por favor, preencha corretamente os campos em vermelho!';
    }
  }

  onHttpError(error: any) {
    console.log('Error: ', error);
    (this.postError = true), (this.postErrorMessage = error.error.errorMessage);
  }
}
