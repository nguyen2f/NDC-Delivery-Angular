import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NDC';
}
=======
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule,MatToolbarModule,
    MatButtonModule, MatSidenavModule, MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ] // Thêm RouterModule
})
export class AppComponent {
  title = 'delivery-management';
  logout() {
    localStorage.removeItem('user'); // Xóa thông tin đăng nhập
    window.location.href = '/login'; // Chuyển hướng về trang đăng nhập
  }
}

>>>>>>> adc7798 (Hoàn thiện giao diện cơ bản cho web)
