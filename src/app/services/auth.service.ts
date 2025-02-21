import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/users/';

  constructor(private http: HttpClient,
              private router: Router) {}


  login(loginData: any) {
    const params = new HttpParams()
      .set('phoneNumber', loginData.phoneNumber)
      .set('password', loginData.password);

    return this.http.post<AuthResponse>('http://localhost:8080/api/users/login', {}, { params });
  }

  register(registerData: any): Observable<any> {
    return this.http.post(`http://localhost:8080/api/users/register`, registerData);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Kiểm tra token
  }

  logout() {
    localStorage.removeItem('token'); // Xóa token
    localStorage.removeItem('userData'); // Xóa thông tin người dùng nếu có
    this.router.navigate(['/login']); // Chuyển hướng về trang đăng nhập
  }


  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

}
export interface AuthResponse {
  token: string;
}
