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
  availability: string = '';
  quantity: number = 1;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.quantity = 1;
  }

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

  getQuantity() {
    return this.product.quantity >= 1;
  }
  sumQuantity(): void {
    if (this.getQuantity()) {
      if (this.quantity >= this.product.quantity) {
        this.quantity = this.product.quantity;
      } else {
        this.quantity += 1;
      }
    } else {
      this.quantity = 0;
    }
    this.incrementDecrease();
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity -= 1;
    } else {
      this.quantity = 1;
    }
    this.incrementDecrease();
  }
  validateQuantityInput(target: any): void {
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

  incrementDecrease(): void {
    const minusBtn = document.querySelector('.minus');
    this.quantity > 1
      ? minusBtn.classList.add('prev')
      : minusBtn.classList.remove('prev');
  }

  quantityByBtn(target: any): void {
    const input = document.querySelector('#quantity') as HTMLInputElement;
    const controlBtn = target;

    controlBtn.classList.contains('plus')
      ? (this.quantity += 1)
      : (this.quantity -= 1);

    input.value = `${this.quantity}`;
    this.validateQuantityInput(input);
  }

  priceProduct(): number {
    return this.product.price;
  }

  totalPurchase() {
    return this.quantity * this.product.price;
  }
  addToCart(): void {
    const total = this.totalPurchase();
    const product: any = {
      total: total,
      products: [
        {
          product_id: this.product.id,
          quantity: this.quantity,
          subTotal: this.quantity * this.product.price,
        },
      ],
    };

    !localStorage.cart
      ? localStorage.setItem('cart', JSON.stringify(product))
      : this.updateCart(product);
  }

  updateCart(product: any): void {
    const p = JSON.parse(localStorage.getItem('cart'));
    const id = product.products[0].product_id;
    const result = p.products.findIndex((o: any) => o.product_id === id);

    if (result !== -1) {
      if (product.products[0].quantity === 0) {
        p.products.splice(result, 1);
      } else {
        p.products[result] = product.products[0];
      }
    } else {
      p.products.push(product.products[0]);
    }
    p.total = p.products.reduce((acc:any, current:any)=> {
      return acc + current.subTotal;
    }, 0);
    
    localStorage.setItem("cart", JSON.stringify(p));
  }
}
