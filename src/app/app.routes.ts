import { Routes } from '@angular/router';
<<<<<<< HEAD

export const routes: Routes = [];
=======
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreateOrderComponent } from './orders/create-order/create-order.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Chuyển hướng mặc định đến Login
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-order', component: CreateOrderComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'dashboard', component: DashboardComponent },
];
>>>>>>> adc7798 (Hoàn thiện giao diện cơ bản cho web)
