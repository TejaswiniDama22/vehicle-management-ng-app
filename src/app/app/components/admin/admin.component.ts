import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn = false;

  users: any[] = [];
  vehicles: any[] = [];
  bookings: any[] = [];
  payments: any[] = [];
  reports: any[] = [];

  activeTab: string = 'users';
  loading: boolean = false;
  error: string = '';

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    const loggedIn = localStorage.getItem('adminLoggedIn');
    if (loggedIn === 'true') {
      this.isLoggedIn = true;
      this.loadAllData();
    }
  }

  onLogin() {
    const { email, password } = this.loginForm.value;
    if (email === 'admin@gmail.com' && password === 'admin') {
      this.isLoggedIn = true;
      localStorage.setItem('adminLoggedIn', 'true');
      this.loadAllData();
    } else {
      this.error = 'Invalid admin credentials';
    }
  }

  onLogout() {
    this.isLoggedIn = false;
    localStorage.removeItem('adminLoggedIn');
    this.loginForm.reset();
  }

  loadAllData() {
    this.loading = true;
    this.error = '';

    this.adminService.getAllUsers().subscribe({
      next: (res) => this.users = res.data || [],
      error: (err) => this.handleError(err)
    });

    this.adminService.getAllVehicles().subscribe({
      next: (res) => this.vehicles = res.data || [],
      error: (err) => this.handleError(err)
    });

    this.adminService.getAllBookings().subscribe({
      next: (res) => this.bookings = res.data || [],
      error: (err) => this.handleError(err)
    });

    this.adminService.getAllPayments().subscribe({
      next: (res) => this.payments = res.data || [],
      error: (err) => this.handleError(err)
    });

    this.adminService.getAllReports().subscribe({
      next: (res) => this.reports = res.data || [],
      error: (err) => this.handleError(err),
      complete: () => this.loading = false
    });
  }

  handleError(error: any) {
    this.error = 'Failed to load data.';
    console.error(error);
    this.loading = false;
  }

  deleteVehicle(id: number) {
    if (!confirm('Are you sure you want to delete this vehicle?')) return;
    this.adminService.deleteVehicle(id).subscribe(() => {
      this.vehicles = this.vehicles.filter(v => v.vehicleId !== id);
    });
  }

  deleteBooking(id: number) {
    if (!confirm('Delete this booking?')) return;
    this.adminService.deleteBooking(id).subscribe(() => {
      this.bookings = this.bookings.filter(b => b.bookingId !== id);
    });
  }

  deletePayment(id: number) {
    if (!confirm('Delete this payment?')) return;
    this.adminService.deletePayment(id).subscribe(() => {
      this.payments = this.payments.filter(p => p.paymentId !== id);
    });
  }

  deleteReport(id: number) {
    if (!confirm('Delete this report?')) return;
    this.adminService.deleteReport(id).subscribe(() => {
      this.reports = this.reports.filter(r => r.reportId !== id);
    });
  }

  updateBookingStatus(bookingId: number, newStatus: string) {
    if (!confirm(`Are you sure you want to change the booking status to ${newStatus}?`)) return;

    this.adminService.updateBookingStatus(bookingId, newStatus).subscribe({
      next: () => {
        const booking = this.bookings.find(b => b.bookingId === bookingId);
        if (booking) {
          booking.status = newStatus;
        }
      },
      error: (err) => {
        this.error = 'Failed to update booking status.';
        console.error(err);
      }
    });
  }

  switchTab(tab: string) {
    this.activeTab = tab;
  }
}
