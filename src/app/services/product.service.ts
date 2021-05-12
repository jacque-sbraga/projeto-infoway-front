import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/product.model';
import { ProductQuery } from '../models/productQuery.model';
import { CrudBaseService } from './crud-base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudBaseService<Product> {
  
  constructor(protected _http: HttpClient) {
    super(_http, 'product');
  }
  
  getAllByParams(args: ProductQuery): Observable<Product[]> {

    // Estrutura de args:
    // args = {
    //   name: 'letras para busca no nome do Produto',
    //   available: true ou false,
    //   featured: true ou false,
    //   category_id: id da categoria do produto
    // }

    let httpParams = new HttpParams()      

    if (args.name) {      
      httpParams = httpParams.set('name', args.name);
    }
    if (args.available) {
      httpParams = httpParams.set('available', '1');
    }
    if (args.featured) {
      httpParams = httpParams.set('featured', '1');
    }
    if (args.category_id) {
      httpParams = httpParams.set('category_id', args.category_id.toString());
    }      
        
    return this._http.get<Product[]>(`${this._baseUrl}/product`, { 'params': httpParams });    
  }
}
