import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

export abstract class CrudBaseService<T> {

  _baseUrl = 'http://localhost:3030';

  constructor(
    protected _http: HttpClient,
    protected _path: string
  ) {}

  getAll(): Observable<T[]> {
    return this._http.get<T[]>(`${this._baseUrl}/${this._path}`);
  }

  findOne(id: any): Observable<T> {
    return this._http.get<T>(`${this._baseUrl}/${this._path}/${id}`);
  }

  create(t: T): Observable<T> {
    return this._http.post<T>(`${this._baseUrl}/${this._path}`, t);
  }

  update(id: any, t: T): Observable<T> {
    return this._http.put<T>(`${this._baseUrl}/${this._path}/${id}`, t);
  }

  delete(id: any): Observable<T> {
    return this._http.delete<T>(`${this._baseUrl}/${this._path}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this._http.delete(`${this._baseUrl}/${this._path}`);
  }
}