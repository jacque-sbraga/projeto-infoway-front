import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-cart-item',
  templateUrl: './product-cart-item.component.html',
  styleUrls: ['./product-cart-item.component.css']
})
export class ProductCartItemComponent implements OnInit {

  @Input() product: Product;
  @Input() quantity: number;
  
  @Output() deleteButtonPressed: EventEmitter<any> = new EventEmitter();

  subtotal: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setCounterPlus() {
    if (this.quantity < this.product.quantity) {
      this.quantity += 1      
    }
  }

  setCounterMinus() {
    if (this.quantity > 1) {
      this.quantity -= 1
    }
  }

  deleteCartItem(): void {
    this.deleteButtonPressed.emit();
  }
}
