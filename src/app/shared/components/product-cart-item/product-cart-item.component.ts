import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem.model';

@Component({
  selector: 'app-product-cart-item',
  templateUrl: './product-cart-item.component.html',
  styleUrls: ['./product-cart-item.component.css']
})
export class ProductCartItemComponent implements OnInit {

  @Input() product: CartItem;
  @Output() deleteButtonPressed: EventEmitter<any> = new EventEmitter();

  subtotal: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.subtotal = this.product.product.price * this.product.quantity;
  }

  setCounterPlus() {
    if (this.product.quantity < this.product.quantity) {
      this.product.quantity += 1      
    }
  }

  setCounterMinus() {
    if (this.product.quantity > 1) {
      this.product.quantity -= 1
    }
  }

  deleteCartItem(): void {
    this.deleteButtonPressed.emit();
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
    if (value > this.product.product.quantity) {
      input.value = `${this.product.product.quantity}`;
    }
    this.product.quantity = parseInt(input.value);
    this.setCounterMinus();
  }
}
