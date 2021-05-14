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
  @Output() quantityChanged: EventEmitter<any> = new EventEmitter();

  subtotal: number = 0;  

  constructor() { }

  ngOnInit(): void {
    this.calculateSubtotal();
  }

  setCounterPlus() {
    if (this.product.quantity < this.product.product.quantity) {
      this.product.quantity += 1
      this.calculateSubtotal();
    }
  }

  setCounterMinus() {
    if (this.product.quantity > 1) {
      this.product.quantity -= 1
      this.calculateSubtotal();
    }
  }

  deleteCartItem(): void {
    this.deleteButtonPressed.emit(this.product.product.id);
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
      this.product.quantity = value as number;
      this.subtotal = this.product.product.price;
      this.quantityChanged.emit();
    }
    if (value > this.product.product.quantity) {
      input.value = `${this.product.product.quantity}`;      
      this.calculateSubtotal();
    }
    this.quantityChanged.emit();
  }

  calculateSubtotal(): void {
    this.subtotal = this.product.product.price * this.product.quantity;
    this.quantityChanged.emit();
  }
}
