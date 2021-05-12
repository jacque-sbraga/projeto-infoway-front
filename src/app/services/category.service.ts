import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Category } from '../models/category.model';
import { CrudBaseService } from './crud-base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CrudBaseService<Category> {
  
  constructor(protected _http: HttpClient) {
    super(_http, 'category');
  }
  
  getAllByKeyValue(key: string, value: any, complete: boolean): Observable<Category[]> {
    const httpParams = new HttpParams()
      .set('key', key)
      .set('value', value.toString())
      .set('complete', complete.toString());
    
    return this._http.get<Category[]>(`${this._baseUrl}/category`, { 'params': httpParams });    
  }
}
