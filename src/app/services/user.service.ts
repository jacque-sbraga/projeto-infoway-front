import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/user.model';

const API_URL = 'http://localhost:3030/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  create(user: Users): Observable<Users> {
    return this.http.post<Users>(`${API_URL}`, user);
  }
}
