import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthResponse, AuthService} from '../../services/auth.service';
import {Router, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; // Import ReactiveFormsModule
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule,RouterModule, HttpClientModule,ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule] // Thêm CommonModule vào mảng imports

})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern('^\\d{10,11}$')]],
      password: ['', Validators.required]
    });
  }

  login() {
    const loginData = {
      phoneNumber: this.loginForm.value.phoneNumber,
      password: this.loginForm.value.password
    };

    this.authService.login(loginData).subscribe({
      next: (response: AuthResponse) => {  // ✅ Xác định kiểu dữ liệu của response
        console.log('Đăng nhập thành công:', response);
        localStorage.setItem('token', response.token); // Không còn lỗi undefined
        localStorage.setItem('phoneNumber', loginData.phoneNumber); // Lưu số điện thoại
        this.router.navigate(['/dashboard']); // Chuyển hướng đến trang dashboard
      },
      error: (error) => {
        console.error('Lỗi khi đăng nhập:', error);
      }
    });

  }

}
