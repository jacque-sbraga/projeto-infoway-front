import { Cart } from './../models/cart.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';
import { catchError, tap} from 'rxjs/operators';
import { Observable, pipe} from 'rxjs';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cartItem.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor(
    private http: HttpClient,
    private productService : ProductService,
  ) { }

  addToCart(item:Cart): void {
    const array = [item];

    !localStorage.cart
    ? localStorage.setItem('cart', JSON.stringify(array))
      : this.updateCart(item);
    console.log(localStorage.cart)
  }

  updateCart(product: Cart): void {
    const p = JSON.parse(localStorage.getItem('cart'));

    const id = product.product_id;

    const result = p.findIndex((o: any) => o.product_id === id);
    
    if (result === -1) {
      p.push(product);
    } else {
      p[result].quantity = product.quantity
    }
    
    localStorage.setItem("cart", JSON.stringify(p));
  }

  replaceCart(products: Cart[]): void {
    localStorage.setItem("cart", JSON.stringify(products));
  }

  getCart(): Cart[] {
    return JSON.parse(localStorage.getItem('cart'));    
  }

  delete(id: number): void {
    const p = JSON.parse(localStorage.getItem('cart'));
    const result = p.findIndex((o: any) => o.product_id === id);

    if (result >= -1) {
      p.splice(result, 1);
      localStorage.setItem("cart", JSON.stringify(p));
    }     
  }

  deleteAll(): void{
    localStorage.removeItem("cart");
  }
  
  checkout(idUser: number, cartItems: CartItem[]): Observable<any> {

    let total = 0;
    const products: any[] = [];

    cartItems.forEach((item: CartItem) => {
      const price = item.product.price;
      const subtotal = price * item.quantity;
      total += subtotal;
      products.push({
        product_id: item.product.id,
        quantity: item.quantity,
        subtotal: subtotal,
      });
    });
      
    return this.http.post<any>(`http://localhost:3030/user/${idUser}/order`, {
      total,
      products
    });    
  }  
}
