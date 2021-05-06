import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { CrudBaseService } from './crud-base.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends CrudBaseService<Category> {
  
  constructor(protected _http: HttpClient) {
    super(_http, 'category');
  }  
}
