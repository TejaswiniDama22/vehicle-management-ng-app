import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app/components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./app/components/login-register/login-register.component').then(m => m.LoginRegisterComponent)
  },
  {
    path: 'vehicle-register',
    loadComponent: () => import('./app/components/vehicle-register/vehicle-register.component').then(m => m.VehicleRegisterComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./app/components/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'book-slot',
    loadComponent: () => import('./app/components/booking/booking.component').then(m => m.BookingComponent)
  },
  {
    path: 'payment',
    loadComponent: () => import('./app/components/payment/payment.component').then(m => m.PaymentComponent)
  },
  {
    path: 'report',
    loadComponent: () => import('./app/components/report/report.component').then(m => m.ReportComponent)
  },
  {
  path: 'admin',
  loadComponent: () => import('./app/components/admin/admin.component').then(m => m.AdminComponent)
},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
