import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common'; // ✅ Include NgClass
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';
import { PaymentService } from '../../services/payment.service'; // ✅ If not imported

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    CommonModule,
    NgClass, // ✅ Add this
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  paymentForm: FormGroup;
  message = '';
  isError = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private paymentService: PaymentService
  ) {
    this.paymentForm = this.fb.group({
      bookingId: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  onBookingIdChange() {
    const bookingIdValue = this.paymentForm.get('bookingId')?.value;
    const bookingId = Number(bookingIdValue);

    if (!bookingId) {
      this.paymentForm.get('amount')?.setValue('');
      this.message = 'Booking ID required';
      this.isError = true;
      return;
    }

    this.paymentService.getAmountByBookingId(bookingId).subscribe({
      next: (res) => {
        this.paymentForm.get('amount')?.setValue(res.amount);
        this.message = '';
        this.isError = false;
      },
      error: () => {
        this.paymentForm.get('amount')?.setValue('');
        this.message = 'Invalid Booking ID or error fetching amount';
        this.isError = true;
      },
    });
  }

  onSubmit(): void {
    if (this.paymentForm.invalid) {
      if (!this.paymentForm.get('bookingId')?.value) {
        this.message = 'Please enter Booking ID';
      } else if (!this.paymentForm.get('amount')?.value) {
        this.message = 'Invalid Booking ID or amount not available';
      }
      this.isError = true;
      return;
    }

    const payload = {
      bookingId: this.paymentForm.get('bookingId')?.value,
      amount: this.paymentForm.get('amount')?.value,
      status: 'PAID',
    };

    this.paymentService.postPayment(payload).subscribe({
      next: () => {
        this.paymentService.getPaymentByBookingId(payload.bookingId).subscribe((res) => {
          const lastPayment = {
            paymentId: res.paymentId,
            bookingId: res.bookingId,
            amount: res.amount,
            status: res.status
          };
          this.paymentService.setPaymentDetails(lastPayment);
          this.router.navigate(['/dashboard'], { state: { lastPayment } });
        });
      },
      error: (err) => {
        this.message = err.error?.message || 'Payment failed.';
        this.isError = true;
      },
    });
  }
}
