import {
  UserService,
  init_user
} from "./chunk-UF4DXAJZ.js";
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

// angular:jit:template:src\app\app\components\login-register\login-register.component.html
var login_register_component_default;
var init_login_register_component = __esm({
  "angular:jit:template:src\\app\\app\\components\\login-register\\login-register.component.html"() {
    login_register_component_default = `\r
<div class="container">\r
  <div class="card">\r
    <h2 *ngIf="!showRegister">Login</h2>\r
    <h2 *ngIf="showRegister">Register</h2>\r
\r
    <!-- Login Form -->\r
    <form [formGroup]="loginForm" (ngSubmit)="login()" *ngIf="!showRegister">\r
      <input formControlName="email" type="email" placeholder="Email" />\r
      <div class="error" *ngIf="loginForm.get('email')?.touched && loginForm.get('email')?.invalid">\r
        <small *ngIf="loginForm.get('email')?.errors?.['required']">Email is required.</small>\r
        <small *ngIf="loginForm.get('email')?.errors?.['email']">Invalid email format.</small>\r
      </div>\r
\r
      <input formControlName="password" type="password" placeholder="Password" />\r
      <div class="error" *ngIf="loginForm.get('password')?.touched && loginForm.get('password')?.invalid">\r
        <small *ngIf="loginForm.get('password')?.errors?.['required']">Password is required.</small>\r
      </div>\r
\r
      <button type="submit">Login</button>\r
    </form>\r
\r
    <!-- Register Form -->\r
    <form [formGroup]="registerForm" (ngSubmit)="register()" *ngIf="showRegister">\r
      <input formControlName="name" type="text" placeholder="Name" />\r
      <div class="error" *ngIf="registerForm.get('name')?.touched && registerForm.get('name')?.invalid">\r
        <small>Name is required.</small>\r
      </div>\r
\r
      <input formControlName="email" type="email" placeholder="Email" />\r
      <div class="error" *ngIf="registerForm.get('email')?.touched && registerForm.get('email')?.invalid">\r
        <small *ngIf="registerForm.get('email')?.errors?.['required']">Email is required.</small>\r
        <small *ngIf="registerForm.get('email')?.errors?.['email']">Invalid email format.</small>\r
      </div>\r
\r
      <input formControlName="password" type="password" placeholder="Password" />\r
      <div class="error" *ngIf="registerForm.get('password')?.touched && registerForm.get('password')?.invalid">\r
        <small *ngIf="registerForm.get('password')?.errors?.['required']">Password is required.</small>\r
        <small *ngIf="registerForm.get('password')?.errors?.['minlength']">Password must be at least 8 characters.</small>\r
      </div>\r
\r
      <button type="submit">Register</button>\r
    </form>\r
\r
    <p class="toggle" (click)="toggleRegister()">\r
      {{ showRegister ? 'Already registered? Login' : 'New user? Register here' }}\r
    </p>\r
\r
    <p class="message">{{ message }}</p>\r
  </div>\r
</div>\r
`;
  }
});

// angular:jit:style:src\app\app\components\login-register\login-register.component.css
var login_register_component_default2;
var init_login_register_component2 = __esm({
  "angular:jit:style:src\\app\\app\\components\\login-register\\login-register.component.css"() {
    login_register_component_default2 = "/* src/app/app/components/login-register/login-register.component.css */\n.container {\n  display: flex;\n  justify-content: center;\n  margin-top: 180px;\n}\n.card {\n  background: #f5f5f5;\n  padding: 30px;\n  border-radius: 10px;\n  width: 350px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\ninput {\n  display: block;\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 15px;\n  border-radius: 6px;\n  border: 1px solid #ccc;\n}\nbutton {\n  width: 100%;\n  background: #28a745;\n  color: white;\n  padding: 10px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n}\nbutton:hover {\n  background: #218838;\n}\n.toggle {\n  color: #007bff;\n  cursor: pointer;\n  text-align: center;\n  margin-top: 10px;\n}\n.error small {\n  color: red;\n  font-size: 12px;\n}\n.message {\n  margin-top: 10px;\n  font-weight: bold;\n  color: darkred;\n}\n/*# sourceMappingURL=login-register.component.css.map */\n";
  }
});

// src/app/app/components/login-register/login-register.component.ts
var LoginRegisterComponent;
var init_login_register_component3 = __esm({
  "src/app/app/components/login-register/login-register.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_login_register_component();
    init_login_register_component2();
    init_core();
    init_forms();
    init_common();
    init_router();
    init_user();
    LoginRegisterComponent = class LoginRegisterComponent2 {
      fb;
      userService;
      router;
      loginForm;
      registerForm;
      message = "";
      showRegister = false;
      constructor(fb, userService, router) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.loginForm = this.fb.group({
          email: ["", [Validators.required, Validators.email]],
          password: ["", Validators.required]
        });
        this.registerForm = this.fb.group({
          name: ["", Validators.required],
          email: ["", [Validators.required, Validators.email]],
          password: ["", [Validators.required, Validators.minLength(8)]]
        });
      }
      toggleRegister() {
        this.showRegister = !this.showRegister;
        this.message = "";
      }
      login() {
        if (this.loginForm.valid) {
          const { email, password } = this.loginForm.value;
          this.userService.login(email, password).subscribe({
            next: (res) => {
              const user = res.data;
              localStorage.setItem("userId", user.userId);
              this.message = res.message;
              this.router.navigate(["/dashboard"]);
            },
            error: (err) => {
              this.message = err.status === 404 || err.status === 401 ? "Invalid email or password" : "Login failed. Try again.";
            }
          });
        } else {
          this.message = "Please fill in all fields.";
        }
      }
      register() {
        if (this.registerForm.valid) {
          this.userService.register(this.registerForm.value).subscribe({
            next: (res) => {
              this.message = res.message;
              this.toggleRegister();
            },
            error: (err) => {
              this.message = err.status === 409 ? "Email already registered" : "Registration failed";
            }
          });
        } else {
          this.message = "Please fix the validation errors.";
        }
      }
      static ctorParameters = () => [
        { type: FormBuilder },
        { type: UserService },
        { type: Router }
      ];
    };
    LoginRegisterComponent = __decorate([
      Component({
        selector: "app-login-register",
        standalone: true,
        imports: [CommonModule, ReactiveFormsModule],
        template: login_register_component_default,
        styles: [login_register_component_default2]
      })
    ], LoginRegisterComponent);
  }
});

export {
  LoginRegisterComponent,
  init_login_register_component3 as init_login_register_component
};
//# sourceMappingURL=chunk-4SLQO725.js.map
