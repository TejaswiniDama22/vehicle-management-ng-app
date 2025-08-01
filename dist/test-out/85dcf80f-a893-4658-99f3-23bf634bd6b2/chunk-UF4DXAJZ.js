import {
  HttpClient,
  init_http
} from "./chunk-KMTMA6MF.js";
import {
  Injectable,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-BSQ7UZGP.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/app/services/user.ts
var UserService;
var init_user = __esm({
  "src/app/app/services/user.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    UserService = class UserService2 {
      http;
      baseUrl = "http://localhost:8080/user";
      constructor(http) {
        this.http = http;
      }
      register(user) {
        return this.http.post(`${this.baseUrl}/register`, user);
      }
      login(email, password) {
        return this.http.post(`${this.baseUrl}/login`, { email, password });
      }
      getCurrentUser() {
        const userId = localStorage.getItem("userId");
        return this.http.get(`${this.baseUrl}/me/${userId}`);
      }
      logout() {
        localStorage.removeItem("userId");
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    UserService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], UserService);
  }
});

export {
  UserService,
  init_user
};
//# sourceMappingURL=chunk-UF4DXAJZ.js.map
