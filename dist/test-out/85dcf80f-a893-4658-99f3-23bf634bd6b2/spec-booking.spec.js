import {
  BookingComponent,
  init_booking_component
} from "./chunk-QTW2L6L5.js";
import {
  HttpClientTestingModule,
  init_testing as init_testing2
} from "./chunk-FAZJACBR.js";
import {
  ReactiveFormsModule,
  init_forms
} from "./chunk-US4PCD67.js";
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

// src/app/app/components/booking/booking.spec.ts
var require_booking_spec = __commonJS({
  "src/app/app/components/booking/booking.spec.ts"(exports) {
    init_testing();
    init_booking_component();
    init_forms();
    init_testing2();
    describe("BookingComponent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          declarations: [BookingComponent],
          imports: [ReactiveFormsModule, HttpClientTestingModule]
        }).compileComponents();
        fixture = TestBed.createComponent(BookingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_booking_spec();
//# sourceMappingURL=spec-booking.spec.js.map
