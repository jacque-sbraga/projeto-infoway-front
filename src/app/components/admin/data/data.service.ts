import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './interface-user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<string[]> {
    return of([
      'Smartphones',
      'Computadores',
      'Video Games',
      'Notebooks',
      'Acessórios',
      'Audio',
      'Monitores',
    ]);
  }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    return this.http.post('http://localhost:3030/product', userSettings);
  }
}
