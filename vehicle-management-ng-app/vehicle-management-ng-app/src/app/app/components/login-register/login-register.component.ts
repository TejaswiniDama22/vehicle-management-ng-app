import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  message = '';
  showRegister = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  toggleRegister() {
    this.showRegister = !this.showRegister;
    this.message = '';
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.userService.login(email, password).subscribe({
        next: (res) => {
          const user = res.data;
          localStorage.setItem('userId', user.userId); // ✅ Save user ID
          this.message = res.message;
          this.router.navigate(['/dashboard']); // ✅ Go to dashboard
        },
        error: (err) => {
          this.message =
            err.status === 404 || err.status === 401
              ? 'Invalid email or password'
              : 'Login failed. Try again.';
        }
      });
    } else {
      this.message = 'Please fill in all fields.';
    }
  }

  register() {
    if (this.registerForm.valid) {
      this.userService.register(this.registerForm.value).subscribe({
        next: (res) => {
          this.message = res.message;
          this.toggleRegister(); // Back to login
        },
        error: (err) => {
          this.message = err.status === 409
            ? 'Email already registered'
            : 'Registration failed';
        }
      });
    } else {
      this.message = 'Please fill details .';
    }
  }
}
