import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  quantity: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProductFromRoute();
  }

  getProductFromRoute(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.hasOwnProperty('id')) {
        const id = params['id'] as number;
        this.getProductsByCategory(id);
      }
    });
  }

  getProductsByCategory(id: number): void {
    this.productService.findOne(id).subscribe(
      (response) => {
        this.product = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  validateQuantityInput(target: EventTarget) {
    let element = target as HTMLInputElement;
    const minusBtn = document.querySelector('.minus');
    this.quantity = parseInt(element.value);

    // Para evitar que o usuário coloque uma quantidade menor que 1
    if (this.quantity <= 0) {
      element.value = '1';
      this.setQuantity(1);
    }
      this.quantity > 1 ?
      minusBtn.classList.add('increment'):
      minusBtn.classList.remove('increment');
  }

  incrementDecrease(target: any) {
    const input = document.querySelector('#quantity') as HTMLInputElement;

    target.classList.contains('plus')
      ? this.setQuantity(1)
      : this.setQuantity(-1);

    input.value = `${this.quantity}`;
    this.validateQuantityInput(input);
  }

  setQuantity(value: number) {
    if (value <= this.product.quantity) {
      this.quantity += value;
      console.log(this.quantity);
    }
  }
}
