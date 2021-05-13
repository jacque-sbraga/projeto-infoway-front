import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../models/address.model';
import { CrudBaseService } from './crud-base.service';

@Injectable({
  providedIn: 'root',
})
export class AddressService extends CrudBaseService<Address> {
  constructor(protected _http: HttpClient) {
    super(_http, 'address');
  }
}
