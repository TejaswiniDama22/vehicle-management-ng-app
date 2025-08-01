import {
  HomeComponent,
  init_home_component
} from "./chunk-3N23JS6H.js";
import "./chunk-FZJ2EGCV.js";
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

// src/app/app/components/home/home.spec.ts
var require_home_spec = __commonJS({
  "src/app/app/components/home/home.spec.ts"(exports) {
    init_testing();
    init_home_component();
    describe("HomeComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [HomeComponent]
          // ✅ HomeComponent must be standalone
        }).compileComponents();
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_home_spec();
//# sourceMappingURL=spec-home.spec.js.map
