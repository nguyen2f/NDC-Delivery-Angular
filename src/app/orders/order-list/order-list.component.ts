import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { OrderService } from '../../services/order.service';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule,  MatInputModule, MatButtonModule, MatCardModule, MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,  // ✅ Cho tab
    MatListModule] // Thêm ReactiveFormsModule
})
export class OrderListComponent implements OnInit {
  sentOrders: any[] = [];
  receivedOrders: any[] = [];
  selectedTab: string = 'sent';
  errorMessage: string = '';

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadSentOrders();
    this.loadReceivedOrders();
  }

  loadSentOrders() {
    const token = localStorage.getItem('token') || '';
    this.orderService.getSentOrders(token).subscribe({
      next: (orders) => this.sentOrders = orders,
      error: (err) => this.errorMessage = 'Lỗi khi tải đơn hàng đã gửi!'
    });
  }

  loadReceivedOrders() {
    const token = localStorage.getItem('token') || '';
    this.orderService.getReceivedOrders(token).subscribe({
      next: (orders) => this.receivedOrders = orders,
      error: (err) => this.errorMessage = 'Lỗi khi tải đơn hàng đã nhận!'
    });
  }

  setTab(tab: string) {
    this.selectedTab = tab;
  }
}
