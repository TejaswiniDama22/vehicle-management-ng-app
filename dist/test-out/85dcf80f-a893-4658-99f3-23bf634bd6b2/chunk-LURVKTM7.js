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

// src/app/app/services/vehicle.service.ts
var VehicleService;
var init_vehicle_service = __esm({
  "src/app/app/services/vehicle.service.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_http();
    VehicleService = class VehicleService2 {
      http;
      registerUrl = "http://localhost:8080/vehicle/register";
      userVehiclesUrl = "http://localhost:8080/vehicle/user";
      constructor(http) {
        this.http = http;
      }
      registerVehicle(vehicleData) {
        return this.http.post(this.registerUrl, vehicleData);
      }
      getUserVehicles() {
        const userId = localStorage.getItem("userId");
        return this.http.get(`${this.userVehiclesUrl}/${userId}`);
      }
      static ctorParameters = () => [
        { type: HttpClient }
      ];
    };
    VehicleService = __decorate([
      Injectable({
        providedIn: "root"
      })
    ], VehicleService);
  }
});

export {
  VehicleService,
  init_vehicle_service
};
//# sourceMappingURL=chunk-LURVKTM7.js.map
