import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule
} from '@angular/forms';
import {
  HttpClient,
  HttpClientModule
} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // 👈 Import Router

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  reportForm: FormGroup;
  successMessage = '';
  errorMessage = '';
  report = {
    userId: null,
    description: ''
  };

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router // 👈 Inject Router
  ) {
    this.reportForm = this.fb.group({
      userId: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.reportForm.invalid) {
      this.errorMessage = 'All fields are required';
      return;
    }

    const reportData = this.reportForm.value;
    console.log('Submitting report:', reportData);

    this.http.post<any>('http://localhost:8080/report/submit', reportData).subscribe({
      next: (res) => {
        this.successMessage = res.message;
        this.errorMessage = '';

        // Redirect to dashboard after brief delay (optional)
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);
      },
      error: (err) => {
        this.errorMessage = err.error.message || 'Report submission failed';
        this.successMessage = '';
      }
    });
  }
}
