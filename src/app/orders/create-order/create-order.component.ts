import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { OrderService } from '../../services/order.service';

import {Router, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  standalone: true,
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule,  MatInputModule, MatButtonModule, MatCardModule, MatInputModule,
    MatTabsModule,  // ✅ Cho tab
    MatListModule] // Thêm ReactiveFormsModule
})
export class CreateOrderComponent {
  orderForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router
  ) {
    this.orderForm = this.fb.group({
      senderName: ['', Validators.required],
      senderPhoneNumber: ['', Validators.required],
      senderAddress: this.fb.group({  // ✅ Kiểm tra phần này
        province: ['', Validators.required],
        district: ['', Validators.required],
        ward: ['', Validators.required],
        detailedAddress: ['', Validators.required]
      }),
      receiverName: ['', Validators.required],
      receiverPhoneNumber: ['', Validators.required],
      receiverAddress: this.fb.group({  // ✅ Kiểm tra phần này
        province: ['', Validators.required],
        district: ['', Validators.required],
        ward: ['', Validators.required],
        detailedAddress: ['', Validators.required]
      }),
      orderName: ['', Validators.required],
      orderWeight: ['', [Validators.required, Validators.min(0.1)]],
      orderQuantity: ['', [Validators.required, Validators.min(1)]]
    });
  }

    createOrder() {
    if (this.orderForm.invalid) {
      this.errorMessage = "Vui lòng nhập đầy đủ thông tin!";
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Bạn chưa đăng nhập!');
      this.router.navigate(['/login']);
      return;
    }

    const orderData = this.orderForm.value;
    this.orderService.createOrder(orderData, token).subscribe({
      next: (response) => {
        console.log('Tạo đơn hàng thành công:', response);
        alert('Đơn hàng đã được tạo thành công!');
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Lỗi khi tạo đơn hàng:', error);
        this.errorMessage = "Không thể tạo đơn hàng. Vui lòng thử lại!";
      }
    });
  }
}
