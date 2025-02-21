import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MatInputModule, MatButtonModule, MatCardModule, BrowserAnimationsModule, // Quan trọng!
    MatToolbarModule]
})
export class DashboardComponent implements OnInit {
  userPhoneNumber: string | null = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.userPhoneNumber = localStorage.getItem('phoneNumber');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
