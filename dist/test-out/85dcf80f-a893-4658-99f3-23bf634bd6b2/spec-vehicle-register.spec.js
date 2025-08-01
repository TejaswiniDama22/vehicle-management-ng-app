import {
  VehicleRegisterComponent,
  init_vehicle_register_component
} from "./chunk-LNSLBQOG.js";
import "./chunk-LURVKTM7.js";
import "./chunk-US4PCD67.js";
import "./chunk-KMTMA6MF.js";
import "./chunk-TBDZK7FY.js";
import {
  TestBed,
  init_testing
} from "./chunk-BSQ7UZGP.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/app/components/vehicle-register/vehicle-register.spec.ts
var require_vehicle_register_spec = __commonJS({
  "src/app/app/components/vehicle-register/vehicle-register.spec.ts"(exports) {
    init_testing();
    init_vehicle_register_component();
    describe("VehicleRegisterComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [VehicleRegisterComponent]
          // since it's a standalone component
        }).compileComponents();
        fixture = TestBed.createComponent(VehicleRegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_vehicle_register_spec();
//# sourceMappingURL=spec-vehicle-register.spec.js.map
