import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {Router, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ReactiveFormsModule, MatInputModule, MatButtonModule, MatCardModule] // Thêm CommonModule vào mảng imports
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^\\d{10,11}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  register() {
    const registerData = this.registerForm.value;

    this.authService.register(registerData).subscribe({
      next: (response) => {
        console.log('Đăng ký thành công:', response.message);
        alert(response.message); // Hiển thị thông báo đăng ký thành công
        this.router.navigate(['/login']); // Chuyển hướng sang trang đăng nhập
      },
      error: (error) => {
        console.error('Lỗi khi đăng ký:', error);
        alert(error.error?.error || "Đăng ký thất bại!"); // Hiển thị lỗi từ API
      }
    });
  }
}
