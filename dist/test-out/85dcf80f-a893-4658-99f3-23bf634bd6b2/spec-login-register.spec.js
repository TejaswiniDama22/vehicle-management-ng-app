import {
  LoginRegisterComponent,
  init_login_register_component
} from "./chunk-4SLQO725.js";
import "./chunk-UF4DXAJZ.js";
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

// src/app/app/components/login-register/login-register.spec.ts
var require_login_register_spec = __commonJS({
  "src/app/app/components/login-register/login-register.spec.ts"(exports) {
    init_testing();
    init_login_register_component();
    describe("LoginRegisterComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [LoginRegisterComponent]
          // since it's a standalone component
        }).compileComponents();
        fixture = TestBed.createComponent(LoginRegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_login_register_spec();
//# sourceMappingURL=spec-login-register.spec.js.map
