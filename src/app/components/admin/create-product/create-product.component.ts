import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  product: Product;
  postError: boolean;
  postErrorMessage: string;
  categorys: Category[] = [];

  // Caso esteja editando um produto
  productIdFromRoute: number;
  isEditing: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
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

    this.getProductFromRoute();
  }

  getProductFromRoute(): void {
    this.productIdFromRoute = this.activatedRoute.snapshot.params['id'];
    
    // Significa que está editando um produto
    if(this.productIdFromRoute) {
      this.isEditing = true;
      this.productService.findOne(this.productIdFromRoute)
        .subscribe((product: Product) => {
          this.product = product;
        });
    }
    // Se não receber o id, está criando um novo
    else {
      this.isEditing = false;
      this.product = { ...this.originalProduct };      
    }    
  }

  onSubmit(form: NgForm) {
    console.log('onSubmit ', form.valid);
    if (form.valid) {
      // Verifica se está editando um produto já existente
      if (this.isEditing) {
        this.productService.update(this.product.id, this.product).subscribe(
          (result) => {
            console.log('Produto atualizado com sucesso', result);
          },
          (error) => this.onHttpError(error)
        );
      }
      // Senão, cria um novo no banco de dados
      else {
        this.productService.create(this.product).subscribe(
          (result) => {
            console.log('Produto criado com sucesso', result);
          },
          (error) => this.onHttpError(error)
        );
      }
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
