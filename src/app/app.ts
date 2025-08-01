import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginRegisterComponent } from './app/components/login-register/login-register.component';
import { VehicleRegisterComponent } from './app/components/vehicle-register/vehicle-register.component';
import { HomeComponent } from './app/components/home/home.component';
import { DashboardComponent } from './app/components/dashboard/dashboard.component'; // ✅ Add this
import { BookingComponent } from './app/components/booking/booking.component';
import { PaymentComponent } from './app/components/payment/payment.component';
import { ReportComponent } from './app/components/report/report.component';
import { AdminComponent } from './app/components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginRegisterComponent,
    VehicleRegisterComponent,
    HomeComponent,
    DashboardComponent, // ✅ Add this
    BookingComponent,
    PaymentComponent,
    ReportComponent,
    AdminComponent,
    
    ReactiveFormsModule
  ],
  template: '<router-outlet></router-outlet>',
})
export class App {
  protected readonly title = signal('vehicle-management-ng-app');
}
