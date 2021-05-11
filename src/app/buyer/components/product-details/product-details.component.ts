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
  quantity: number = 1;
  availability: string = '';
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

  // Verificar a disponibilidade do produto
  checkAvailability() {
    const quantity = this.product.quantity;

    if (quantity === 0) return `Produto indisponível no momento`;
    else if (quantity === 1) return `${quantity} disponível`;
    return '';
  }

  validateQuantityInput(target: any) {
    let input;

    if (target instanceof EventTarget) {
      input = target as HTMLInputElement;
    }
    let value: number = parseInt(input.value);

    // Validação da quantidade digitada pelo usuário
    if (value <= 0) {
      input.value = '1';
    }
    if (value > this.product.quantity) {
      input.value = `${this.product.quantity}`;
    }
    this.quantity = parseInt(input.value);
    this.incrementDecrease();
  }

  incrementDecrease() {
    const minusBtn = document.querySelector('.minus');
    this.quantity > 1
      ? minusBtn.classList.add('prev')
      : minusBtn.classList.remove('prev');
  }

  quantityByBtn(target: any) {
    const input = document.querySelector('#quantity') as HTMLInputElement;
    const controlBtn = target;

    controlBtn.classList.contains('plus')
      ? (this.quantity += 1)
      : (this.quantity -= 1);

    input.value = `${this.quantity}`;
    this.validateQuantityInput(input);
  }

  priceProduct(){
    console.log(typeof this.product.price)
  }
}
