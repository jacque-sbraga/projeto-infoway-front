import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudBaseService } from './crud-base.service';

@Injectable({
  providedIn: 'root'
})
export class UserAvatarService {
  _baseUrl = 'http://localhost:3030';
  constructor(protected _http: HttpClient) {
    
  }
}
