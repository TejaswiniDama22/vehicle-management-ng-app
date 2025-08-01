import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:8080/api/admin';
    apiUrl: any;

  constructor(private http: HttpClient) {}

  // Users
  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/user/${id}`);
  }

  // Vehicles
  getAllVehicles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/vehicles`);
  }

  deleteVehicle(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/vehicle/${id}`);
  }

  // Bookings
  getAllBookings(): Observable<any> {
    return this.http.get(`${this.baseUrl}/bookings`);
  }

  deleteBooking(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/booking/${id}`);
  }

  // Payments
  getAllPayments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/payments`);
  }

  deletePayment(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/payment/${id}`);
  }

  // Reports
  getAllReports(): Observable<any> {
    return this.http.get(`${this.baseUrl}/reports`);
  }

  deleteReport(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/report/${id}`);
  }

 

updateBookingStatus(id: number, status: string) {
  return this.http.put<any>(`${this.baseUrl}/booking/${id}/status`, null, {
    params: { status }
  });
}
updateSlotStatus(id: number, status: string) {
  return this.http.put(`${this.baseUrl}/slot/${id}/status?status=${status}`, {});
}

getAllSlots() {
  return this.http.get<any>(`${this.baseUrl}/slots`);
}
}