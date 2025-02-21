import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, token?: string): Observable<T> {
    const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : {};
    return this.http.get<T>(url, { headers });
  }

  post<T>(url: string, body: any, token?: string): Observable<T> {
    const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : {};
    return this.http.post<T>(url, body, { headers });
  }
}
