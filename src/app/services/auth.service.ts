import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:3030/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: { login: string; password: string }): Observable<any> {
    return this.http.post(
      AUTH_API + 'session',
      {
        login: credentials.login,
        password: credentials.password,
      },
      httpOptions
    );
  }

  register(user: { login: string; email: string; password: string; }): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        login: user.login,
        email: user.email,
        password: user.password,
      },
      httpOptions
    );
  }
}
