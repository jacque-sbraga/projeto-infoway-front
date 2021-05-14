import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/user.model';

const API_URL = 'http://localhost:3030/user';

const API_URL2 = 'http://localhost:3030/user/avatar';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  create(user: Users): Observable<Users> {
    return this.http.post<Users>(`${API_URL}`, user);
  }

  getUserAvatarr(login: string): Observable<string> {
    const userLogin = {
      login: login,
    };

    return this.http.post<string>(API_URL2, userLogin);
  }
}
