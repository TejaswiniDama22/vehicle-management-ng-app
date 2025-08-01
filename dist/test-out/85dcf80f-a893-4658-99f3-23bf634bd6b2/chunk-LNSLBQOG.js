import {
  VehicleService,
  init_vehicle_service
} from "./chunk-LURVKTM7.js";
import {
  FormBuilder,
  ReactiveFormsModule,
  Router,
  Validators,
  init_forms,
  init_router
} from "./chunk-US4PCD67.js";
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

// angular:jit:template:src\app\app\components\vehicle-register\vehicle-register.component.html
var vehicle_register_component_default;
var init_vehicle_register_component = __esm({
  "angular:jit:template:src\\app\\app\\components\\vehicle-register\\vehicle-register.component.html"() {
    vehicle_register_component_default = `<div class="vehicle-wrapper">\r
  <div class="container">\r
    <div class="card">\r
   <h2><i class="fas fa-car-side"></i> Vehicle Registration</h2>\r
<link rel="preconnect" href="https://fonts.googleapis.com">\r
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">\r
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">\r
\r
      <form [formGroup]="vehicleForm" (ngSubmit)="registerVehicle()">\r
        <input type="number" formControlName="userId" placeholder="User ID" />\r
        <div class="error" *ngIf="vehicleForm.get('userId')?.touched && vehicleForm.get('userId')?.invalid">\r
          <small>User ID is required</small>\r
        </div>\r
\r
        <input type="text" formControlName="licensePlate" placeholder="License Plate (e.g., TS09AB1234)" />\r
        <div class="error" *ngIf="vehicleForm.get('licensePlate')?.touched && vehicleForm.get('licensePlate')?.invalid">\r
          <small *ngIf="vehicleForm.get('licensePlate')?.errors?.['required']">License plate is required.</small>\r
          <small *ngIf="vehicleForm.get('licensePlate')?.errors?.['pattern']">Invalid license plate format.</small>\r
        </div>\r
\r
        <!-- Dropdown for Vehicle Type -->\r
        <select formControlName="vehicleType">\r
          <option value="" disabled selected>Select Vehicle Type</option>\r
          <option value="Car">Car</option>\r
          <option value="Bike">Bike</option>\r
        </select>\r
        <div class="error" *ngIf="vehicleForm.get('vehicleType')?.touched && vehicleForm.get('vehicleType')?.invalid">\r
          <small>Vehicle type is required.</small>\r
        </div>\r
\r
        <button type="submit">Register Vehicle</button>\r
      </form>\r
\r
      <p class="message">{{ message }}</p>\r
    </div>\r
  </div>\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\app\components\vehicle-register\vehicle-register.component.css
var vehicle_register_component_default2;
var init_vehicle_register_component2 = __esm({
  "angular:jit:style:src\\app\\app\\components\\vehicle-register\\vehicle-register.component.css"() {
    vehicle_register_component_default2 = `/* src/app/app/components/vehicle-register/vehicle-register.component.css */
.vehicle-wrapper {
  min-height: 100vh;
  background: linear-gradient(rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 0.9)), url(https://images.unsplash.com/photo-1495435229349-e86db7bfa013?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  width: 100%;
  padding: 40px;
  border-radius: 20px;
  background: rgba(30, 30, 30, 0.7);
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.05), 0 8px 40px rgba(0, 0, 0, 0.4);
  animation: fadeInUp 1s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.card h2 {
  text-align: center;
  color: #00e6e6;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
  letter-spacing: 1.2px;
  position: relative;
}
.card h2::after {
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
.card {
  background: transparent;
  padding: 0;
}
input,
select {
  width: 100%;
  padding: 14px 18px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  font-size: 15px;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg fill='%23bbb' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;
  transition: all 0.3s ease;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
select:focus {
  border-color: #00e6e6;
  box-shadow: 0 0 10px #00e6e6aa;
  background-color: rgba(255, 255, 255, 0.08);
  transform: scale(1.02);
  outline: none;
}
input::placeholder,
select {
  color: #bbb;
}
input:focus,
select:focus {
  border-color: #00e6e6;
  box-shadow: 0 0 10px #00e6e6aa;
  background-color: rgba(255, 255, 255, 0.08);
  transform: scale(1.02);
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
}
button:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 0 16px #00ffff, 0 0 30px #00e6e6;
}
button:active {
  transform: scale(0.98);
}
.error small {
  color: #ff4d4d;
  font-size: 13px;
  margin-top: -12px;
  display: block;
  animation: fadeIn 0.4s ease;
}
.message {
  margin-top: 18px;
  text-align: center;
  color: #00ff99;
  font-weight: 600;
  animation: fadeIn 1s ease;
}
.toggle {
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  color: #89d7f0;
  cursor: pointer;
  transition: color 0.3s;
}
.toggle:hover {
  text-decoration: underline;
  color: #00c7ff;
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
  .container {
    padding: 30px 24px;
  }
  .card h2 {
    font-size: 24px;
  }
}
/*# sourceMappingURL=vehicle-register.component.css.map */
`;
  }
});

// src/app/app/components/vehicle-register/vehicle-register.component.ts
var VehicleRegisterComponent;
var init_vehicle_register_component3 = __esm({
  "src/app/app/components/vehicle-register/vehicle-register.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_vehicle_register_component();
    init_vehicle_register_component2();
    init_core();
    init_forms();
    init_common();
    init_router();
    init_vehicle_service();
    VehicleRegisterComponent = class VehicleRegisterComponent2 {
      fb;
      vehicleService;
      router;
      vehicleForm;
      message = "";
      constructor(fb, vehicleService, router) {
        this.fb = fb;
        this.vehicleService = vehicleService;
        this.router = router;
        this.vehicleForm = this.fb.group({
          userId: ["", [Validators.required]],
          licensePlate: ["", [
            Validators.required,
            Validators.pattern(/^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/)
          ]],
          vehicleType: ["", Validators.required]
        });
      }
      registerVehicle() {
        if (this.vehicleForm.valid) {
          this.vehicleService.registerVehicle(this.vehicleForm.value).subscribe({
            next: (res) => {
              this.message = res.message;
              this.router.navigate(["/dashboard"]);
            },
            error: (err) => {
              if (err.error?.message) {
                this.message = err.error.message;
              } else {
                this.message = "Vehicle registration failed.";
              }
            }
          });
        } else {
          this.message = "Please correct the form errors.";
        }
      }
      static ctorParameters = () => [
        { type: FormBuilder },
        { type: VehicleService },
        { type: Router }
      ];
    };
    VehicleRegisterComponent = __decorate([
      Component({
        selector: "app-vehicle-register",
        standalone: true,
        imports: [CommonModule, ReactiveFormsModule],
        template: vehicle_register_component_default,
        styles: [vehicle_register_component_default2]
      })
    ], VehicleRegisterComponent);
  }
});

export {
  VehicleRegisterComponent,
  init_vehicle_register_component3 as init_vehicle_register_component
};
//# sourceMappingURL=chunk-LNSLBQOG.js.map
