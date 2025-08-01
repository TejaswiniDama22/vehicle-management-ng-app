import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { UserService } from '../../services/user';
import { VehicleService } from '../../services/vehicle.service';
import { BookingService } from '../../services/booking.service';
import { PaymentService } from '../../services/payment.service';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any = {};
  vehicles: any[] = [];
  bookings: any[] = [];
  lastPayment: any = null;

  constructor(
    private userService: UserService,
    private vehicleService: VehicleService,
    private bookingService: BookingService,
    private paymentService: PaymentService,
    private router: Router
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd && this.router.url === '/dashboard'))
      .subscribe(() => {
        this.loadRegisteredVehicles();
        this.loadBookings();
        this.loadLastPayment();
      });
  }

  ngOnInit(): void {
    this.loadUserDetails();
    this.loadRegisteredVehicles();
    this.loadBookings();

    const nav = this.router.getCurrentNavigation();
    const paymentFromState = nav?.extras?.state?.['lastPayment'];

    if (paymentFromState) {
      this.lastPayment = paymentFromState;
    } else {
      this.loadLastPayment();
    }
  }

  loadUserDetails() {
    this.userService.getCurrentUser().subscribe({
      next: (res) => {
        this.user = res?.data || res;
      },
      error: (err) => {
        console.error('Failed to fetch user:', err);
        this.router.navigate(['/login']);
      }
    });
  }

  loadRegisteredVehicles() {
    this.vehicleService.getUserVehicles().subscribe({
      next: (res) => {
        this.vehicles = res;
      },
      error: (err) => {
        console.error('Failed to load vehicles:', err);
      }
    });
  }

  loadBookings() {
    this.bookingService.getUserBookings().subscribe({
      next: (res) => {
        const bookings = res;

        bookings.forEach((booking: any) => {
          this.paymentService.getPaymentByBookingId(booking.bookingId).subscribe({
            next: (paymentRes) => {
              booking.paymentStatus = paymentRes?.status || 'PENDING';
            },
            error: () => {
              booking.paymentStatus = 'PENDING';
            }
          });
        });

        this.bookings = bookings;
      },
      error: (err) => {
        console.error('Failed to load bookings:', err);
      }
    });
  }

  loadLastPayment() {
    this.lastPayment = this.paymentService.getPaymentDetails();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  makePayment(booking: any) {
    if (booking.status === 'PENDING') {
      alert('Payment not allowed until admin approves your booking.');
      return;
    }

    if (booking.status === 'FAILED') {
      alert('This booking has failed. Payment is not allowed.');
      return;
    }

    const start = new Date(booking.start);
    const end = new Date(booking.end);
    const durationHours = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60));
    const amount = durationHours * 50; // ₹50/hour

    const payment = {
      bookingId: booking.bookingId,
      amount: amount,
    };

    this.paymentService.setPaymentDetails(payment);
    this.router.navigate(['/payment'], { state: { lastPayment: payment } });
  }
}
