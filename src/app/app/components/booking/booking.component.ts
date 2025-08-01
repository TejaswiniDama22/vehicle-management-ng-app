import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  error = '';
  minDateTime: string = '';
  vehicles: any[] = [];
  bookedSlots: { start: string; end: string }[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      userId: ['', Validators.required],
      vehicleType: ['', Validators.required],
      licensePlate: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required]
    });

    this.minDateTime = new Date().toISOString().slice(0, 16);

    this.bookingForm.get('userId')?.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((userId) => {
        if (userId) {
          this.fetchVehiclesByUserId(userId);
        } else {
          this.vehicles = [];
          this.bookingForm.patchValue({ licensePlate: '', vehicleType: '' });
        }
      });

    this.bookingForm.get('licensePlate')?.valueChanges.subscribe((plate) => {
      const selected = this.vehicles.find(v => v.licensePlate === plate);
      this.bookingForm.patchValue({ vehicleType: selected?.type || '' });
    });

    this.bookingForm.get('start')?.valueChanges.subscribe((value: string) => {
      if (value) {
        const dateOnly = value.split('T')[0];
        this.fetchBookedSlots(dateOnly);
      }
    });
  }

  fetchVehiclesByUserId(userId: string): void {
    this.bookingService.getVehiclesByUser(userId).subscribe({
      next: (data) => {
        this.vehicles = data || [];
        if (this.vehicles.length === 1) {
          this.bookingForm.patchValue({
            licensePlate: this.vehicles[0].licensePlate,
            vehicleType: this.vehicles[0].type
          });
        } else {
          this.bookingForm.patchValue({ licensePlate: '', vehicleType: '' });
        }
      },
      error: () => {
        this.vehicles = [];
        this.bookingForm.patchValue({ licensePlate: '', vehicleType: '' });
      }
    });
  }

  fetchBookedSlots(date: string): void {
    this.bookingService.getBookedSlots(date).subscribe({
      next: (data) => {
        this.bookedSlots = data || [];
      },
      error: () => {
        this.bookedSlots = [];
      }
    });
  }

  generateHourlySlots(): string[] {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      hours.push(i.toString().padStart(2, '0') + ':00');
    }
    return hours;
  }

  getAvailableCount(hour: string): number {
    const TOTAL_SLOTS = 2;
    if (!this.bookedSlots.length) return TOTAL_SLOTS;

    const date = this.bookingForm.get('start')?.value?.split('T')[0];
    if (!date) return TOTAL_SLOTS;

    const hourStart = new Date(`${date}T${hour}`);
    const hourEnd = new Date(hourStart.getTime() + 60 * 60 * 1000); // +1 hour

    const overlapping = this.bookedSlots.filter(slot => {
      const slotStart = new Date(slot.start);
      const slotEnd = new Date(slot.end);
      return slotStart < hourEnd && slotEnd > hourStart;
    }).length;

    return Math.max(0, TOTAL_SLOTS - overlapping);
  }

  onSubmit(): void {
    if (this.bookingForm.invalid) {
      this.error = 'Please fill all required fields.';
      return;
    }

    const request = this.bookingForm.value;

    this.bookingService.bookSlot(request).subscribe({
      next: () => {
        this.error = '';
        this.bookingForm.reset();
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.error = err?.error?.message || 'Booking failed.';
      }
    });
  }
}
