import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { CartItem } from 'src/app/models/cartItem.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {  
    
  cartProducts: CartItem[] = [];
  subtotal: number = 0;
  total: number = 0;

  userId: number;

  constructor(    
    private _productService: ProductService,
    private _cartService: CartService,
    private _getTokenService: TokenStorageService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.total = 0;
    this.subtotal = 0;
    this.userId = this._getTokenService.getUser().id;
    this.getCartProducts();    
  } 

  getCartProducts(): void {
    const cart = this._cartService.getCart();
    this.total = 0;

    let ids = cart.map((item: any) => item.product_id);    
    this._productService.getAllByIds(ids).subscribe((response: Product[]) => {
      response.forEach(product => {
        const item = cart.find(item => item.product_id == product.id);
        const quantity = item.quantity;
        this.subtotal = product.price * item.quantity;
        this.total += this.subtotal;
        this.cartProducts.push({ quantity: quantity, product: product });
      })
    },
    (error) => {
      console.log(error);
    });
  }

  clearCart(): void {
    this._cartService.deleteAll();
    this.cartProducts = [];
    this.subtotal = 0;
    this.total = 0;
  }
  
  ckeckout(): void {
    let cart = this._cartService.getCart();    
    let ids = cart.map((item: any) => item.product_id);
    
    this._productService.getAllByIds(ids).subscribe((response: Product[]) => {
      let cartItems: CartItem[] = [];
      response.forEach(product => {
        const quantity = cart.find(item => item.product_id == product.id).quantity;
        cartItems.push({ quantity: quantity, product: product });
      });

      this._cartService.checkout(this.userId, cartItems).
        subscribe((response: any) => {
          console.log('Sucesso!');
          this.clearCart();
        });
    });
    
    this._router.navigate(['finished']);
  }
  
  keepShopping(): void {
    const cartItems = this.cartProducts.map(product => {
      return {
        product_id: product.product.id,
        quantity: product.quantity
      } as Cart;
    });

    this._cartService.replaceCart(cartItems);
    this._router.navigate(['products']);
  }
}
