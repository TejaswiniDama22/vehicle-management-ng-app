import {
  BookingComponent,
  init_booking_component
} from "./chunk-QTW2L6L5.js";
import {
  DashboardComponent,
  init_dashboard_component
} from "./chunk-SJ5YFW7K.js";
import {
  HomeComponent,
  init_home_component
} from "./chunk-3N23JS6H.js";
import "./chunk-FZJ2EGCV.js";
import {
  LoginRegisterComponent,
  init_login_register_component
} from "./chunk-4SLQO725.js";
import "./chunk-UF4DXAJZ.js";
import {
  VehicleRegisterComponent,
  init_vehicle_register_component
} from "./chunk-LNSLBQOG.js";
import "./chunk-LURVKTM7.js";
import {
  RouterOutlet,
  init_router
} from "./chunk-US4PCD67.js";
import "./chunk-KMTMA6MF.js";
import "./chunk-TBDZK7FY.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6,
  signal
} from "./chunk-BSQ7UZGP.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// src/app/app.ts
var App;
var init_app = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_router();
    init_login_register_component();
    init_vehicle_register_component();
    init_home_component();
    init_dashboard_component();
    init_booking_component();
    App = class App2 {
      title = signal("vehicle-management-ng-app");
    };
    App = __decorate([
      Component({
        selector: "app-root",
        standalone: true,
        imports: [
          RouterOutlet,
          LoginRegisterComponent,
          VehicleRegisterComponent,
          HomeComponent,
          DashboardComponent,
          // ✅ Add this
          BookingComponent
        ],
        template: "<router-outlet></router-outlet>"
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_app();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, vehicle-management-ng-app");
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map
