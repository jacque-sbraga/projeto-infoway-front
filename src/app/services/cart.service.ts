import { Cart } from './../models/cart.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';

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
    console.log(p)

    const id = product.product_id;

    const result = p.findIndex((o: any) => o.product_id === id);
    
    if (result === -1) {
      p.push(product);
    } else {
      p[result].quantity = product.quantity
    }
    
    localStorage.setItem("cart", JSON.stringify(p));
  }

  delete(id: number){
    const p = JSON.parse(localStorage.getItem('cart'));
    const result = p.findIndex((o: any) => o.product_id === id);

    if (result >= -1) {
      p.splice(result, 1);
      localStorage.setItem("cart", JSON.stringify(p));
    } 
    
  }

  deleteAll(){
    localStorage.removeItem("cart");
  }
  
  checkout(idUser: number){
    const cart = JSON.parse(localStorage.get("cart"));
    let total = 0;
    const products: any = [];

    for(let item of cart){

      this.productService.findOne(item.id).subscribe(response => {
        const price = response.price;
        const subtotal = price * item.quantity;
        total += subtotal;
        products.push({
          product_id: response.id,
          quantity: item.quantity,
          subtotal: subtotal,
        })
      })
    }
    return this.http.post<any>(`http://localhost:3030/user/${idUser}/order`, {
      total,
      products
    })
  }
}
