import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { CrudBaseService } from './crud-base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudBaseService<Product> {
  
  constructor(protected _http: HttpClient) {
    super(_http, 'product');
  }  
}
