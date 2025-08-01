import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookUrl = 'http://localhost:8080/booking/book';
  private userBookingsUrl = 'http://localhost:8080/booking/user';
  private bookedSlotsUrl = 'http://localhost:8080/booking/booked-slots';
  private vehiclesUrl = 'http://localhost:8080/vehicle/user';

  constructor(private http: HttpClient) {}

  bookSlot(bookingData: any): Observable<any> {
    return this.http.post(this.bookUrl, bookingData);
  }

  getUserBookings(): Observable<any[]> {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      throw new Error('User ID not found in localStorage');
    }
    return this.http.get<any[]>(`${this.userBookingsUrl}/${userId}`);
  }

  getBookedSlots(date: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.bookedSlotsUrl}?date=${date}`);
  }

  getVehiclesByUser(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.vehiclesUrl}/${userId}`);
  }
}
