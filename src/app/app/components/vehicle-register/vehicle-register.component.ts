import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // ✅ Import router
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './vehicle-register.component.html',
  styleUrls: ['./vehicle-register.component.css']
})
export class VehicleRegisterComponent {
  vehicleForm: FormGroup;
  message: string = '';

  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleService,
    private router: Router // ✅ Inject router
  ) {
    this.vehicleForm = this.fb.group({
      userId: ['', [Validators.required]],
      licensePlate: ['', [
        Validators.required,
        Validators.pattern(/^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/)
      ]],
      vehicleType: ['', Validators.required]
    });
  }

  registerVehicle() {
    if (this.vehicleForm.valid) {
      this.vehicleService.registerVehicle(this.vehicleForm.value).subscribe({
        next: res => {
          this.message = res.message;
          this.router.navigate(['/dashboard']); // ✅ Redirect to dashboard
        },
        error: err => {
          if (err.error?.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Vehicle registration failed.';
          }
        }
      });
    } else {
      this.message = 'Please correct the form errors.';
    }
  }
}
