import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private lastPayment: any = null;

  constructor(private http: HttpClient) {}

  getAmountByBookingId(id: number): Observable<{ amount: number }> {
    return this.http.get<{ amount: number }>(`/api/payment/amount/${id}`);
  }

  postPayment(payload: { bookingId: number; amount: number; status: string }) {
    return this.http.post<any>('/api/payment/pay', payload);
  }

  getPaymentByBookingId(id: number): Observable<any> {
    return this.http.get<any>(`/api/payment/${id}`);
  }

  setPaymentDetails(payment: any) {
    this.lastPayment = payment;
    localStorage.setItem('lastPayment', JSON.stringify(payment));
  }

  getPaymentDetails(): any {
    if (this.lastPayment) return this.lastPayment;
    const stored = localStorage.getItem('lastPayment');
    if (stored) this.lastPayment = JSON.parse(stored);
    return this.lastPayment;
  }
  getLatestPaymentForUser(): Observable<any> {
  return this.http.get<any>(`/api/payment/latest`);
}

}
