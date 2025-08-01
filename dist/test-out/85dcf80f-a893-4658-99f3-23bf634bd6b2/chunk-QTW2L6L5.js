import {
  FormBuilder,
  ReactiveFormsModule,
  Router,
  Validators,
  init_forms,
  init_router
} from "./chunk-US4PCD67.js";
import {
  HttpClient,
  HttpClientModule,
  init_http
} from "./chunk-KMTMA6MF.js";
import {
  CommonModule,
  init_common
} from "./chunk-TBDZK7FY.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-BSQ7UZGP.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\app\components\booking\booking.component.html
var booking_component_default;
var init_booking_component = __esm({
  "angular:jit:template:src\\app\\app\\components\\booking\\booking.component.html"() {
    booking_component_default = `\r
<link rel="preconnect" href="https://fonts.googleapis.com">\r
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">\r
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"><div class="vehicle-wrapper">\r
  <div class="outer-card">\r
      <h2><i class="fas fa-car-side"></i>Book Parking Slot</h2>\r
\r
    <div class="inner-card">\r
      <form [formGroup]="bookingForm" (ngSubmit)="onSubmit()">\r
\r
        <label>User ID:</label>\r
        <input type="number" formControlName="userId" placeholder="User ID" />\r
        <div class="error" *ngIf="bookingForm.get('userId')?.touched && bookingForm.get('userId')?.invalid">\r
          User ID is required.\r
        </div>\r
\r
        <label>Vehicle Type:</label>\r
        <select formControlName="vehicleType">\r
          <option value="">Select Vehicle Type</option>\r
          <option value="CAR">CAR</option>\r
          <option value="BIKE">BIKE</option>\r
        </select>\r
        <div class="error" *ngIf="bookingForm.get('vehicleType')?.touched && bookingForm.get('vehicleType')?.invalid">\r
          Vehicle type is required.\r
        </div>\r
\r
        <label>License Plate:</label>\r
        <input type="text" formControlName="licensePlate" placeholder="License Plate" />\r
        <div class="error" *ngIf="bookingForm.get('licensePlate')?.touched && bookingForm.get('licensePlate')?.invalid">\r
          License plate is required.\r
        </div>\r
\r
        <label>Start Time:</label>\r
        <input type="datetime-local" formControlName="start" [min]="minDateTime" />\r
        <div class="error" *ngIf="bookingForm.get('start')?.touched && bookingForm.get('start')?.invalid">\r
          Start time is required.\r
        </div>\r
\r
        <label>End Time:</label>\r
        <input type="datetime-local" formControlName="end" [min]="minDateTime" />\r
        <div class="error" *ngIf="bookingForm.get('end')?.touched && bookingForm.get('end')?.invalid">\r
          End time is required.\r
        </div>\r
\r
        <button type="submit">Submit</button>\r
\r
        <div class="error" *ngIf="error">{{ error }}</div>\r
      </form>\r
\r
      <!-- \u2705 VEHICLE DETAILS SECTION (Visible After Successful Booking) -->\r
     \r
  </div>\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\app\components\booking\booking.component.css
var booking_component_default2;
var init_booking_component2 = __esm({
  "angular:jit:style:src\\app\\app\\components\\booking\\booking.component.css"() {
    booking_component_default2 = `/* src/app/app/components/booking/booking.component.css */
.vehicle-wrapper {
  min-height: 100vh;
  background: linear-gradient(rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.9)), url(https://images.unsplash.com/photo-1495435229349-e86db7bfa013?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  font-family: "Poppins", sans-serif;
}
.outer-card {
  max-width: 600px;
  width: 100%;
  padding: 40px 35px;
  border-radius: 20px;
  background: rgba(30, 30, 30, 0.7);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.05), 0 8px 40px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
  animation: fadeInUp 0.8s ease;
}
.outer-card h2 {
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 30px;
  color: #00e6e6;
  text-align: center;
  letter-spacing: 1px;
  position: relative;
}
.outer-card h2::after {
  content: "";
  width: 60px;
  height: 3px;
  background:
    linear-gradient(
      to right,
      #00e6e6,
      #0099cc);
  display: block;
  margin: 12px auto 0;
  border-radius: 3px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
label {
  font-weight: 600;
  font-size: 14px;
  color: #ccc;
  margin-bottom: 6px;
  display: block;
}
input,
select {
  width: 100%;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.05);
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #000;
  font-size: 15px;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg fill='%23bbb' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;
}
input::placeholder {
  color: #bbb;
}
input:focus,
select:focus {
  border-color: #00e6e6;
  box-shadow: 0 0 10px #00e6e6aa;
  background-color: rgba(255, 255, 255, 0.08);
  transform: scale(1.02);
  outline: none;
}
button {
  width: 100%;
  padding: 14px;
  background:
    linear-gradient(
      to right,
      #00e6e6,
      #0099cc);
  color: #111;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 12px #00e6e6aa;
  margin-top: 10px;
}
button:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 0 16px #00ffff, 0 0 30px #00e6e6;
}
button:active {
  transform: scale(0.98);
}
.error {
  color: #ff4d4d;
  font-size: 13px;
  margin-top: -8px;
  animation: fadeIn 0.3s ease-in;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (max-width: 480px) {
  .outer-card {
    padding: 30px 20px;
  }
  .outer-card h2 {
    font-size: 24px;
  }
}
/*# sourceMappingURL=booking.component.css.map */
`;
  }
});

// src/app/app/components/booking/booking.component.ts
var BookingComponent;
var init_booking_component3 = __esm({
  "src/app/app/components/booking/booking.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_booking_component();
    init_booking_component2();
    init_core();
    init_forms();
    init_common();
    init_http();
    init_router();
    BookingComponent = class BookingComponent2 {
      fb;
      http;
      router;
      bookingForm;
      error = "";
      minDateTime = "";
      constructor(fb, http, router) {
        this.fb = fb;
        this.http = http;
        this.router = router;
      }
      ngOnInit() {
        this.bookingForm = this.fb.group({
          userId: ["", Validators.required],
          vehicleType: ["", Validators.required],
          licensePlate: ["", Validators.required],
          start: ["", Validators.required],
          end: ["", Validators.required]
        });
        this.minDateTime = (/* @__PURE__ */ new Date()).toISOString().slice(0, 16);
      }
      onSubmit() {
        if (this.bookingForm.invalid) {
          this.error = "Please fill all required fields.";
          return;
        }
        const request = this.bookingForm.value;
        this.http.post("http://localhost:8080/booking/book", request).subscribe({
          next: () => {
            this.error = "";
            this.bookingForm.reset();
            this.router.navigate(["/dashboard"]);
          },
          error: (err) => {
            this.error = err?.error?.message || "Booking failed.";
            console.error("Booking error:", err);
          }
        });
      }
      static ctorParameters = () => [
        { type: FormBuilder },
        { type: HttpClient },
        { type: Router }
      ];
    };
    BookingComponent = __decorate([
      Component({
        selector: "app-booking",
        standalone: true,
        imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
        template: booking_component_default,
        styles: [booking_component_default2]
      })
    ], BookingComponent);
  }
});

export {
  BookingComponent,
  init_booking_component3 as init_booking_component
};
//# sourceMappingURL=chunk-QTW2L6L5.js.map
